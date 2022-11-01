import styled from 'styled-components'

const StyledError = styled.div`
  align-items: flex-start;
  color: var(--text-error);
  display: flex;
  font-size: ${({ isCenter }) => (isCenter ? '0.75rem' : '0.85rem')};
  font-weight: 300;
  //height: 2rem;
  justify-content: ${({ isCenter }) => (isCenter ? 'center' : 'flex-start')};
  margin-top: ${({ isCenter }) => (isCenter ? '-1rem' : 0)};
  margin-bottom: 0;
  padding: 5px 10px 0;
  text-align: center;
  transition: color var(--transition-style);
`

export default StyledError