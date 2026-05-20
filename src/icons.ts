import * as icons from 'simple-icons';
import { SimpleIcon } from 'simple-icons';

export function getAllIcons(): SimpleIcon[] {
    const allIcons = icons as unknown as Record<string, SimpleIcon>;
    return Object.values(allIcons).filter((icon) => icon && icon.slug && icon.hex && icon.svg);
}
