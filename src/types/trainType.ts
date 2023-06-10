export interface TrainType {
  trainName: string,
  fromCity: string,
  toCity: string,
  departureTime: Date,
  arrivalTime: Date,
  statusInTime: boolean,
  price: number,
  freePlaces: number,
};
