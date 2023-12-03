import styled from 'styled-components';
import Logo from './Logo';
import { MainNavCustomer } from './MainNav';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 9rem;
  background-color: var(--color-grey-50);
  padding: 0 4.8rem;
  border-bottom: 1px solid var(--color-grey-300);
`;

const StyledHeaderCustomer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9rem;
  background-color: var(--color-grey-50);
  padding: 0 4.8rem;
  border-bottom: 1px solid var(--color-grey-300);
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export function HeaderCustomer() {
  return (
    <StyledHeaderCustomer>
      <Logo />
      <MainNavCustomer />
      Book Now
    </StyledHeaderCustomer>
  );
}

export default Header;
