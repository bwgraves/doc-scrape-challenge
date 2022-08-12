import { readFile, writeFile } from 'fs';
import { parse } from 'node-html-parser';

readFile('postconf.5.html', 'utf8', (err, data) => {
    const sets = parse(data).querySelectorAll('dt a[name]').map(h => {
        const header = h.rawText;
        writeFile(`./md/${header}.md`, `# ${header} ${h.parentNode.parentNode.nextElementSibling.rawText}`, function (err) { if (err) throw err; console.log(`Saved! - ${header}`); });
    });
});