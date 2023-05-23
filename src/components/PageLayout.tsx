import Header from './common/Header';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-layout">
      <Header />
      {/* scroll_header */}
      {/* stickyBtn */}
      {/* footer */}
      {children}
    </div>
  );
};

export default PageLayout;
