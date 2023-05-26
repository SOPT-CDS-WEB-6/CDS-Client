import Footer from '../common/Footer';
import FixedButton from './common/FixedButton';

import Header from './common/Header';
import StickyHeader from './common/StickyHeader';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-layout">
      <Header />
      <StickyHeader />
      {/* stickyBtn */}
      {children}
      <FixedButton />
      <Footer />
    </div>
  );
};

export default PageLayout;
