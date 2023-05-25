import PageLayout from '../components/PageLayout';
import AdBox from '../components/home/AdBox';
import EventBox from '../components/home/EventBox';
import MainPromotionBox from '../components/home/MainPromotionBox';
import MovieChartBox from '../components/home/MovieChartBox';
import NoticeBox from '../components/home/NoticeBox';
import ProductBox from '../components/home/ProdcutBox';
import SpecialBox from '../components/home/SpecialBox';

const Home = () => {
  return (
    <PageLayout>
      <MainPromotionBox />
      <MovieChartBox />
      <EventBox />
      <SpecialBox />
      <ProductBox />
      <NoticeBox />
      <AdBox />
    </PageLayout>
  );
};

export default Home;
