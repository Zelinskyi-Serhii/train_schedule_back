'use strict';

import Train from '../models/train';
import { TrainType } from '../types/trainType';

const getAll = () => {
  return Train.findAll({
    order: [
      ['id', 'ASC'],
    ],
  });
};

const getTrainById = (trainId: number) => {
  return Train.findByPk(trainId);
}

const removeTrainById = (trainId: number) => {
  Train.destroy({
    where: {
      id: trainId,
    },
  });
};

const createTrain = (body: TrainType) => {
  Train.create({ ...body })
};

const updateTrain = (body: Partial<TrainType>, trainId: number) => {
  Train.update({...body}, {
    where: {
      id: trainId,
    },
  });
};


export default {
  getAll,
  getTrainById,
  removeTrainById,
  createTrain,
  updateTrain,
}
