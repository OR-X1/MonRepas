import express from 'express';
import { addCategorie, getCategories } from '@controllers/categorie.controller';

const router = express.Router();

router.post('/add', addCategorie);
router.get('/getAll', getCategories);

export { router };
