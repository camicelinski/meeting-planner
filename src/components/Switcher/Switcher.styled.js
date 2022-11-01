import styled, { css } from 'styled-components'

const themeSwitcherStyles = css`
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1rem;
`

const themeSwitcherLabelStyles = css`
  box-shadow: -4px 4px 15px inset var(--color-shadow-theme-switcher);
  
  ::before,
  ::after {
    font-size: 1.6rem;
    position: absolute;
    top: 50%;
    transition: transform var(--transition-style), color var(--transition-style);
  }
  
  ::before {
    color: var(--color-switcher-icon-light);
    content: '\u263C';
    margin-right: 0.3rem;
    right: 100%;
    transform: translate3d(0, -50%, 0) scale(1.2);
  }
  
  ::after {
    color: var(--text-primary);
    content: '\u263E';
    left: 100%;
    margin-left: 0.3rem;
    transform: translate3d(0, -50%, 0);
  }
`

const themeSwitcherSpanStyles = css`
  background: var(--bg-primary);
  box-shadow: -3px 3px 8px var(--color-shadow-theme-switcher);
`

const themeSwitcherCheckedStyles = css`
  input:checked + label {
    ::before {
      color: var(--text-primary);
      transform: translate3d(0, -50%, 0) scale(1);
    }
    
    ::after {
      color: var(--color-switcher-icon-dark);
      transform: translate3d(0, -50%, 0) scale(1.2);
    }
  }
`

const StyledSwitcher = styled.div`
  display: flex;
  margin-top: 8px;
  margin-right: 15px;
  ${({ name }) => name === 'themeSwitcher' && themeSwitcherStyles}
  
  input {
    height: 0;
    visibility: hidden;
    width: 0;
  }

  label {
    align-items: center;
    background: ${({ isOn }) => (isOn ? 'var(--bg-switcher)' : 'transparent')};
    border-radius: 100px;
    box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary), -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
    cursor: pointer;
    display: flex;
    height: 24px;
    justify-content: space-between;
    position: relative;
    transition: background-color var(--transition-style), box-shadow var(--transition-style);
    width: 50px;
    ${({ name }) => name === 'themeSwitcher' && themeSwitcherLabelStyles}
  }

  span {
    background: ${({ isOn }) => (isOn ? 'var(--bg-primary)' : 'var(--text-primary)')};
    border-radius: 50%;
    box-shadow: 0 0 2px 0 var(--color-shadow-switcher);
    height: 18px;
    left: 4px;
    position: absolute;
    top: 3px;
    transition: var(--transition-style);
    width: 18px;
    ${({ name }) => name === 'themeSwitcher' && themeSwitcherSpanStyles}
  }
  
  input:checked + label span {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }

  ${({ name }) => name === 'themeSwitcher' && themeSwitcherCheckedStyles}
    
  label:active span {
    width: 35px;
  }
`

export default StyledSwitcher
