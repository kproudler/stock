
export const META_DATA = 'META DATA';
export const TIME_SERIES = 'Time Series (Daily)';

export enum DATA_POINTS {
  OPEN = '1. open',
  HIGH = '2. high',
  LOW = '3. low',
  CLOSE = '4. close',
  VOLUME = '5. volume'
}

export interface IDataDaily {
  [META_DATA]: any;
  [TIME_SERIES]: IDailyTimeSeriesData;
}

export interface IDailyTimeSeriesData {
  [day: string]: ITimeSeriesData;
}

export interface ITimeSeriesData {
  [DATA_POINTS.OPEN]: string;
  [DATA_POINTS.HIGH]: string;
  [DATA_POINTS.LOW]: string;
  [DATA_POINTS.CLOSE]: string;
  [DATA_POINTS.VOLUME]: string;
}