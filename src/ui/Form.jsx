import styled, { css } from 'styled-components';

const Form = styled.form`
  ${(props) =>
    props.type !== 'modal' &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-50);
      border: 1px solid var(--color-grey-300);
      border-radius: none;
    `}

  ${(props) =>
    props.type === 'modal' &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

export default Form;
