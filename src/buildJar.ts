import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import { getAllIcons } from './icons';
import { formatSize } from './util/formatSize';

function getPomXML() {
    const pomPath = path.join(__dirname, 'pom.xml');
    return fs.readFileSync(pomPath, 'utf-8');
}

interface BuildJarOptions {
    outDir: string;
    outBasename: string;
    jsfResourceName: string;
    cssPath: string;
}

export async function buildJar({
    outDir,
    outBasename,
    jsfResourceName,
    cssPath,
}: BuildJarOptions): Promise<void> {
    fs.mkdirSync(outDir, { recursive: true });

    const zip = new JSZip();

    zip.file(
        `META-INF/resources/${jsfResourceName}/${outBasename}.css`,
        fs.readFileSync(cssPath, 'utf-8')
    );

    for (const icon of getAllIcons()) {
        if (!icon?.slug || !icon?.svg) continue;
        zip.file(`META-INF/resources/${jsfResourceName}/icons/${icon.slug}.svg`, icon.svg);
    }

    const jarPath = path.join(outDir, `${outBasename}.jar`);
    const buffer = await zip.generateAsync({
        type: 'nodebuffer',
        compression: 'DEFLATE',
        compressionOptions: { level: 9 },
    });
    fs.writeFileSync(jarPath, buffer);
    console.log(`JAR built at ${jarPath} (${formatSize(buffer.byteLength)})`);
}
