import { styled } from 'styled-components';
import { IcFaq, IcFaqFixedButton, IcTicketingFixedButton, IcUpFixedButton } from '../../asset/icon';
import { useLocation, useNavigate } from 'react-router-dom';

const FixedButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isInquiryPage = location.pathname === '/inquiry';

  const clickFaqButtonHandler = () => {
    navigate('/inquiry');
  };

  return (
    <StFixedButton>
      <div>
        <IcTicketingFixedButton />
        <IcUpFixedButton />
      </div>
      {isInquiryPage ? <IcFaq /> : <StIcFaqFixedButton onClick={clickFaqButtonHandler} />}
    </StFixedButton>
  );
};

export default FixedButton;

const StIcFaqFixedButton = styled(IcFaqFixedButton)`
  cursor: pointer;
`;

const StFixedButton = styled.div`
  position: fixed;
  bottom: 5.9rem;
  right: 22.1rem;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: end;

  width: 37.9rem;
  height: 8.7rem;
`;
