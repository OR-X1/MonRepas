import express from 'express';
// const multer = require('multer');

import { createRecette,getRecettes,updateRecette,deleteRecette,getOneRecette } from '@controllers/recette.controller';

const router = express.Router();
// Setting up multer as a middleware to grab photo uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage }).single('file');

router.post('/add', createRecette);
router.get('/getAll', getRecettes);
router.get('/get/:id', getOneRecette);
router.patch('/update/:id', updateRecette);
router.delete('/delete/:id', deleteRecette);

export { router };