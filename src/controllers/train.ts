'use strict';

import TrainServices from '../services/train';
import { Request, Response } from 'express';
import { TrainType } from '../types/trainType';

const getAllTrain = async(req: Request, res: Response) => {
  const { city = '' } = req.query;
  const trains = await TrainServices.getAll(city as string);

  res.send(trains);
};

const getOneTrain = async(req: Request, res: Response) => {
  const trainId = +req.params.trainId

  if (!trainId) {
    res.sendStatus(404);

    return;
  }

  const train = await TrainServices.getTrainById(trainId);

  if (!train) {
    res.sendStatus(404);

    return;
  }

  res.send(train);
};

const removeTrain = async(req: Request, res: Response) => {
  const trainId = +req.params.trainId;

  if (!trainId) {
    res.sendStatus(404);

    return;
  }

  const train = await TrainServices.getTrainById(trainId);

  if (!train) {
    res.sendStatus(404);

    return;
  }

  await TrainServices.removeTrainById(trainId);

  res.sendStatus(204)
}

const addTrain = async(req: Request, res: Response) => {
  const body = req.body;

  const {
    trainName,
    fromCity,
    toCity,
    departureTime,
    arrivalTime,
    statusInTime = true,
    price = 10,
    freePlaces = 100,
  } = body;

  if (!trainName || !fromCity || !toCity || !departureTime || !arrivalTime) {
    res.sendStatus(422);

    return;
  }

  const newTrain: TrainType = {
    trainName: trainName.toLocaleUpperCase(),
    fromCity: fromCity.toLocaleUpperCase(),
    toCity: toCity.toLocaleUpperCase(),
    departureTime,
    arrivalTime,
    statusInTime,
    price,
    freePlaces,
  };

  await TrainServices.createTrain(newTrain);

  res.sendStatus(204);
}

const updateTrain = async(req: Request, res: Response) => {
  const trainId = +req.params.trainId;
  const body = req.body;

  if (!trainId || !body) {
    res.sendStatus(404);

    return;
  }

  const train = await TrainServices.getTrainById(trainId);

  if (!train) {
    res.sendStatus(404);

    return;
  }

  await TrainServices.updateTrain(body, trainId);

  res.sendStatus(204);
}

export default {
  getAllTrain,
  getOneTrain,
  removeTrain,
  addTrain,
  updateTrain,
};
