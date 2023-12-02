import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  height: 9rem;

  font-family: 'Noto Serif Display', serif;
  font-size: 4.2rem;
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-grey-300);
`;

// const Img = styled.img`
//   height: 9.6rem;
//   width: auto;
// `;

function Logo() {
  return <StyledLogo>The Moxy</StyledLogo>;
}

export default Logo;
