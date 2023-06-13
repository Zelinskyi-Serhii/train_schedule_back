'use strict';

import Train from '../models/train';
import { Op } from 'sequelize';
import { TrainType } from '../types/trainType';

const getAll = (city: string) => {
  return Train.findAll({
    where: {
      [Op.or]: [
        {
          fromCity: {
            [Op.like]: `%${city.toLocaleUpperCase()}%`
          }
        },
        {
          toCity: {
            [Op.like]: `%${city.toLocaleUpperCase()}%`
          }
        }
      ]
    },
    order: [
      ['departureTime', 'ASC'],
    ],
  });
};

const getTrainById = (trainId: number) => {
  return Train.findByPk(trainId);
}

const removeTrainById = (trainId: number) => {
  return Train.destroy({
    where: {
      id: trainId,
    },
  });
};

const createTrain = (body: TrainType) => {
  return Train.create({ ...body })
};

const updateTrain = (body: Partial<TrainType>, trainId: number) => {
  return Train.update({...body}, {
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
