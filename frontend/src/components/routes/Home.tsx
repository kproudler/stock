import React, { FunctionComponent, useState, useEffect } from 'react';
import { ajax } from 'rxjs/ajax';
import { Line } from 'react-chartjs-2';
import * as AV from '../../interfaces/alpha-vantage.interface';
import { timeSeriesDailyAPI as api } from '../../api-endpoints/alpha-vantage.endpoint';

export const Home: FunctionComponent = () => {
  const [data, setData] = useState();
  const [chartData, setChartData] = useState({ datasets: [], labels: [] });

  useEffect(() => {
    ajax.getJSON(api).subscribe(setData);
  }, []);

  useEffect(() => {
    if (data) {
      setChartData(getChartData(data))
    }
  }, [data])

  return (
    <div>
      <h2>Trendy Tendies</h2>
      <Line data={chartData}></Line>
    </div>
  );
};

function getChartData(AVData: AV.IDataDaily): any {
  const labels = Object.keys(AVData[AV.TIME_SERIES]);
  const data = Object.values(AVData[AV.TIME_SERIES]).map((day) => day[AV.DATA_POINTS.OPEN])

  return {
    labels,
    datasets: [
      {
        data,
        label: AV.TIME_SERIES,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)'
      }
    ],
    backgroundColor: 'rgba(255, 99, 132, 0.2)'
  }
}
