import * as AV from '../interfaces/alpha-vantage.interface';

const colors = ['#003f5c', '#7a5195', '#ef5675', '#ffa600'];

export function processDailyTimeSeriesData(AVData: AV.IDataDaily) {
  if (!AVData) {
    return {};
  }

  const labels = Object.keys(AVData[AV.TIME_SERIES]).reverse();
  const data = Object.values(AVData[AV.TIME_SERIES]).reduce((acc: any, day: AV.ITimeSeriesData) => {
    Object.entries(day).forEach(([point, value]) => {
      acc[point] = acc[point] || [];
      acc[point].unshift(value);
    });

    return acc;
  }, {});

  return ({
    labels,
    datasets: Object.entries(data).map(mapToDataSet)
  });
}

function mapToDataSet([label, data]: [string, any], index: number) {
  return {
    data,
    label,
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: colors[index],
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: colors[index],
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: colors[index],
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
  }
}