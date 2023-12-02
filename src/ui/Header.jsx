import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 9rem;
  background-color: var(--color-grey-50);
  padding: 0 4.8rem;
  border-bottom: 1px solid var(--color-grey-300);
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
