import express from 'express';
// const multer = require('multer');

import { createMenu,getMenus,updateMenu,deleteMenu,getOneMenu } from '@controllers/Menu.controller';

const router = express.Router();
// Setting up multer as a middleware to grab photo uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage }).single('file');

router.post('/add', createMenu);
router.get('/getAll', getMenus);
router.get('/get/:id', getOneMenu);
router.patch('/update/:id', updateMenu);
router.delete('/delete/:id', deleteMenu);

export { router };