import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs';
import * as sharp from 'sharp';
import slugify from 'slugify';
import logger from '../logger';

export const resizePic = async (picPath: string, toPath: string, d1: number, d2: number): Promise<void> => {
    try {
        const buffer = await fs.promises.readFile(picPath);

        await sharp(buffer).resize(d1, d2).toFormat('jpeg').jpeg({ quality: 100 }).toFile(toPath);

        await fs.promises.unlink(picPath);
    } catch (err) {
        logger.warn(`Error in Resizing ${picPath}: ${err.message}`, 'image_resize', err);
    }
};

export const resizeUserPic = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.files || Object.keys(req.files).length === 0) return next();

    const files = [];

    if (req.body['profilePic']) files.push(req.files['profilePic'][0]);

    if (req.body['coverPic']) files.push(req.files['coverPic'][0]);

    files.forEach(file => {
        const picPath = `${file.destination}/${file.filename}`;
        const toPath = `public/users/${file.fieldname}s/${slugify(
            req.user ? req.user.username : req.body.username
        )}-${Date.now()}.jpeg`;

        const d1 = file.fieldname === 'profilePic' ? 500 : 1500;
        const d2 = file.fieldname === 'profilePic' ? 500 : 1000;

        resizePic(picPath, toPath, d1, d2);

        req.body[`${file.fieldname}`] = toPath.split('/')[3];
    });

    // if (req.user) {
    //     const user = await User.findById(req.user.id);

    //     files.forEach(file => {
    //         const path = user[file.fieldname];
    //         if (path !== 'default.jgp') {
    //             const picPath = `${file.destination}/${path}`;
    //             fs.unlinkSync(picPath);
    //         }
    //     });
    // }

    next();
};
