'use strict';

import express from 'express';
import { initDb } from './utils/db';
import cors from 'cors';
import { router } from './routes/train';


const PORT = process.env.PORT || 4152;
export const app = express();

app.use(cors())
app.use(express.json());
app.use('/trains', router)

initDb();

app.listen({port: PORT});
