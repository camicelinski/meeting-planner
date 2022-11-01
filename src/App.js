import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ResetStyle, GlobalStyle, themeStyle } from './styled'

import useToggle from './hooks/useToggle'
import Calendar from './components/Calendar/index'

const App = () => {    
  const [isDarkMode, toggleTheme] = useToggle()
    
        return (
            <>
                <ResetStyle />
                <ThemeProvider theme={isDarkMode ? themeStyle.dark : themeStyle.light}>
                    <GlobalStyle />
                    <Calendar
                        toggleTheme={toggleTheme}
                        isDarkMode={isDarkMode}
                    />
                </ThemeProvider>    
            </>
        )
    
}

export default App