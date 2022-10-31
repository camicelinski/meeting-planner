import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: ${({ theme }) => theme.bgPrimary};    
    --bg-switcher: ${({ theme }) => theme.bgSwitcher};
    --color-shadow-primary: ${({ theme }) => theme.shadowPrimary};
    --color-shadow-secondary: ${({ theme }) => theme.shadowSecondary};
    --color-shadow-switcher: ${({ theme }) => theme.switcherShadow};
    --color-shadow-theme-switcher: ${({ theme }) => theme.themeSwitcherShadow};
    --color-switcher-icon-dark: ${({ theme }) => theme.iconSwitcherActiveDark};
    --color-switcher-icon-light: ${({ theme }) => theme.iconSwitcherActiveLight};
    --radius-primary: 12px;
    --radius-secondary: 8px;
    --text-error: ${({ theme }) => theme.textError};
    --text-highlight: ${({ theme }) => theme.textHighlight};
    --text-primary: ${({ theme }) => theme.textPrimary};    
    --text-user: ${({ theme }) => theme.textUser};
    --title-shadow: ${({ theme }) => theme.titleShadow};
    --transition-style: 0.3s ease-in-out;
  }

  body {
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Karla', sans-serif;
    transition: background-color var(--transition-style);
  }

  button,
  input[type="submit"] {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle
