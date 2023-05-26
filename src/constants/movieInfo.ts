import type { ChartOptions } from 'chart.js';

export const chartOptions: ChartOptions<'radar'> & ChartOptions = {
  elements: {
    //데이터 속성.
    line: {
      borderWidth: 2,
      borderColor: 'rgba(255,191,0,0.5)',
    },
  },
  scales: {
    r: {
      ticks: {
        stepSize: 2.5,
        display: false,
      },
      grid: {
        color: 'black',
      },
      //라벨 속성 지정.
      pointLabels: {
        font: {
          size: 25,
          weight: '500',
        },
        color: 'black',
      },
      angleLines: {
        display: false,
      },
      suggestedMin: 0,
      suggestedMax: 10,
    },
  },
  //위에 생기는 데이터 속성 label 타이틀을 지워줍니다.
  plugins: {
    legend: {
      display: false,
    },
  },
  //기본 값은 가운데에서 펴져나가는 애니메이션 형태입니다.
  animation: {
    duration: 0,
  },
};
