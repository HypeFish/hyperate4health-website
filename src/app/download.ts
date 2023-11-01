import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const filePath = "../../public/Hyperate4Health.jar"
    const fileStream = fs.createReadStream(filePath);

    fileStream.pipe(res);
}
