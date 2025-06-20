import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'private', 'favicon.ico');
  try {
    const icon = fs.readFileSync(filePath);
    res.setHeader('Content-Type', 'image/x-icon');
    res.status(200).send(icon);
  } catch (err) {
    res.status(500).send('Favicon not found');
  }
}
