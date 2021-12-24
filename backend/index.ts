import express from 'express';import dotenv from 'dotenv';import multer from 'multer';import cors from 'cors';import './core/db';dotenv.config({  path: './.env',});import { passport } from './core/passport';const PORT = 3001;const app = express();const uploader = multer({ dest: './data/avatars' });app.use(cors());app.use(passport.initialize());app.post('/upload', uploader.single('photo'), (req, res) => {  res.json(req?.file);});app.get('/auth/github', passport.authenticate('github'));app.get(  '/auth/github/callback',  passport.authenticate('github', { failureRedirect: '/login' }),  (req, res) => {    res.send(      `<script>window.opener.postMessage('${JSON.stringify(        req?.user      )}', '*');window.close()</script>`    );  });app.listen(PORT, () => {  console.log(`server running on port ${PORT}`);});