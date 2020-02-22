import React, { FunctionComponent, useState, useEffect } from 'react';
import { ajax } from 'rxjs/ajax';
import { Line } from 'react-chartjs-2';
import { timeSeriesDailyAPI as api } from '../../api-endpoints/alpha-vantage.endpoint';
import { processDailyTimeSeriesData } from '../../processors/alpha-vantage.processor';

export const Home: FunctionComponent = () => {
  const [data, setData] = useState();

  useEffect(() => {
    ajax.getJSON(api).subscribe(setData);
  }, []);

  return (
    <div>
      <h2>Trendy Tendies</h2>
      <Line data={processDailyTimeSeriesData(data)}></Line>
    </div>
  );
};
