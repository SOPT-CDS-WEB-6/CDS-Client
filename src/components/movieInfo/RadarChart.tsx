import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale } from 'chart.js/auto';
import type { ChartOptions } from 'chart.js';
import { styled } from 'styled-components';
import { radarData } from '../../constants/movieInfo';
import useGetRadarInfo from '../../libs/hooks/useGetRadarInfo';

ChartJS.register(RadialLinearScale);

const chartOptions: ChartOptions<'radar'> & ChartOptions = {
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
          size: 20,
          weight: '700',
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

const RadarChart = () => {
  return (
    <>
      <StRadarWrapper>
        <Radar data={radarData} options={chartOptions} />
      </StRadarWrapper>
    </>
  );
};

const StRadarWrapper = styled.figure`
  display: flex;
  flex-direction: column;

  width: 48.4rem;
  height: 40.2rem;
`;

export default RadarChart;
