import Footer from '../common/Footer';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-layout">
      {/* header */}
      {/* scroll_header */}
      {/* stickyBtn */}
      <Footer />
      {children}
    </div>
  );
};

export default PageLayout;
