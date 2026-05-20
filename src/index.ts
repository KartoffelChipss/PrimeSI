import { buildCss } from './buildCss';
import path from 'path';
import { buildJar } from './buildJar';

const OUT_DIR = path.join(__dirname, '..', 'out');
const OUT_BASENAME = 'primesi';
const JSF_RESOURCE_NAME = 'primesi';

buildCss({
    jsfResourceName: JSF_RESOURCE_NAME,
    outDir: OUT_DIR,
    outBasename: OUT_BASENAME,
    useCdn: true,
});

buildCss({
    jsfResourceName: JSF_RESOURCE_NAME,
    outDir: OUT_DIR,
    outBasename: OUT_BASENAME,
    useCdn: false,
});

buildJar({
    outDir: OUT_DIR,
    outBasename: OUT_BASENAME,
    jsfResourceName: JSF_RESOURCE_NAME,
    cssPath: path.join(OUT_DIR, `${OUT_BASENAME}_local.min.css`),
});
