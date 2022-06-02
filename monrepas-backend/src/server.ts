// import 'dotenv/config';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { db } from '@utils/connectDb';
import redisConnect from '@utils/connectRedis'
import { limiter } from '@middlewares/limiter';
import { categorie,recette,menu } from '@routes/index';
// import {connectFirebase} from '@utils/firebase';

// const firebase= require('@utils/firebase');
var cors = require('cors')

const dotenv = require('dotenv');
dotenv.config();

const app = express();

const corsOptions = {};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(limiter);

// All routes should live here.
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API',
  });
});

app.use('/api/categorie', categorie);
app.use('/api/recette', recette);
app.use('/api/menu', menu);

// listen to port you specified
app.listen(process.env.port, async () => {
  const { connection } = await db();
  console.log(`🚀 Server ready at: http://localhost:${process.env.port}`);
  console.log(`👋 Connected to database successfully : ${connection.name}`);
});
