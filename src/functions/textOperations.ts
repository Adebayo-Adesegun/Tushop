import * as fs from 'fs';
import * as path from 'path';

function readDataFromTextFile<T>(filePath: string, dataParser: (data: string[]) => T): T {
        try {
            const projectDir = path.dirname(__dirname);
            const fullPath = path.join(projectDir, filePath);
            const data = fs.readFileSync(fullPath, 'utf8');
            const lines = data.split('\n');
            return dataParser(lines);
        } catch (error) {
            console.error('Error reading file:', error);
            throw new Error('Error reading input file.');
        }
}

function appendDataToTextFile(filePath: string, data: string): void {
    try {
        const projectDir = path.dirname(__dirname);
        const fullPath = path.join(projectDir, filePath);
        fs.writeFileSync(fullPath, '', { flag: 'a' });
        fs.appendFileSync(fullPath, data);
    } catch (error) {
        console.error('Error appending to file:', error);
        throw new Error('Error appending to file.');
    }
}


export {
    readDataFromTextFile,
    appendDataToTextFile
}
  