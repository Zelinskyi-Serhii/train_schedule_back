'use strict';

import express from 'express';
import TrainController from '../controllers/train'

export const router = express.Router();

router.get('/', TrainController.getAllTrain);
router.get('/:trainId', TrainController.getOneTrain);
router.delete('/:trainId', TrainController.removeTrain);
router.post('/', TrainController.addTrain);
router.patch('/:trainId', TrainController.updateTrain);


