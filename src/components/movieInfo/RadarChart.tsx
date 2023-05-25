import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale } from 'chart.js/auto';
import { styled } from 'styled-components';
import useGetRadarInfo from '../../libs/hooks/useGetRadarInfo';
import { chartOptions } from '../../constants/movieInfo';

ChartJS.register(RadialLinearScale);

const RadarChart = () => {
  const { charmingPointInfo, emotionPointInfo, isError, isLoading } = useGetRadarInfo(1);

  if (isError) {
    //404페이지 만들어서 넣을 예정
    console.log('error');
  }

  if (!isError && !isLoading) {
    const chartDataList = [
      {
        labels: Object.keys(charmingPointInfo),
        datasets: [
          {
            label: '매력 포인트',
            data: Object.values(charmingPointInfo),
            backgroundColor: 'rgba(255, 108, 61, 0.2)',
          },
        ],
      },
      {
        labels: Object.keys(emotionPointInfo),
        datasets: [
          {
            label: '감정 포인트',
            data: Object.values(emotionPointInfo),
            backgroundColor: 'rgba(255, 108, 61, 0.2)',
          },
        ],
      },
    ];

    return (
      <StRadarSection>
        {chartDataList.map((data, idx) => (
          <StRadarWrapper key={idx}>
            <figcaption>{data.datasets[0].label}</figcaption>
            <Radar data={data} options={chartOptions} />
          </StRadarWrapper>
        ))}
      </StRadarSection>
    );
  }

  return null;
};

const StRadarSection = styled.section`
  display: flex;
`;

const StRadarWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 48.4rem;
  height: 40.2rem;
  margin: 0;
  padding-top: 5rem;

  border: 0.1rem solid lightgray;

  > figcaption {
    position: absolute;
    left: 3.9rem;
    top: 4.7rem;

    align-self: flex-start;

    ${({ theme }) => theme.fonts.Body1};
  }
`;

export default RadarChart;
