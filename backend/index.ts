import express from 'express';import dotenv from 'dotenv';import multer from 'multer';import cors from 'cors';import { randomUUID } from 'crypto';import sharp from 'sharp';import { unlinkSync, readFileSync, existsSync } from 'fs';import './core/db';dotenv.config({  path: './.env',});import { passport } from './core/passport';const PORT = 3001;const app = express();const uploader = multer({  storage: multer.diskStorage({    destination(_, __, cb) {      cb(null, 'data/avatars');    },    filename(_, file: Express.Multer.File, cb: (error: (Error | null), filename: string) => void) {      cb(null, `${file.fieldname}-${randomUUID()}.${file.mimetype.split('/').pop()}`);    },  })});app.use(cors());app.use(passport.initialize());app.post('/upload', uploader.single('photo'), (req, res) => {  const filePath = req.file?.path ?? '';  const newFileName = req.file?.filename.replace('.png', '.jpeg');  sharp(filePath)    .resize(150, 150)    .toFormat('jpeg')    .toFile(filePath.replace('.png', '.jpeg'), (err) => {      if (err) throw new Error('can`t format file during upload');      unlinkSync(filePath);      res.json({        url: `/data/avatars/${newFileName}`      });    });});app.get('/data/avatars/:fileName', (req, res) => {  const path = `data/avatars/${req.params.fileName}`;  if (existsSync(path)) {    const file = readFileSync(path);    res.send(file);    return;  }  // TODO: find valid response for this case  res.send();});app.get('/auth/github', passport.authenticate('github'));app.get(  '/auth/github/callback',  passport.authenticate('github', { failureRedirect: '/login' }),  (req, res) => {    res.send(      `<script>window.opener.postMessage('${JSON.stringify(        req?.user      )}', '*');window.close()</script>`    );  });app.listen(PORT, () => {  console.log(`server running on port ${PORT}`);});