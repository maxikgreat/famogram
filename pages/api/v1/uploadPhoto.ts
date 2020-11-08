import { NextApiRequest, NextApiResponse } from 'next';
import { File } from 'formidable';
// @ts-expect-error
import Formidable from 'formidable-serverless';
import fs from 'fs';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise(async (resolve, reject) => {
    const form = new Formidable.IncomingForm({
      multiples: true,
      keepExtensions: true,
    });

    form
      .on('file', (name: string, file: File) => {
        const data = fs.readFileSync(file.path);
        fs.writeFileSync(`public/avatars/${file.name}`, data);
        fs.unlinkSync(file.path);
      })
      .on('aborted', () => {
        reject(res.status(500).send('Aborted'))  
      })
      .on('end', () => {
        resolve(res.status(200).send('done'));
      });

    await form.parse(req);
  });
}