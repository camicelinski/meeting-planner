import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const ResetStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default ResetStyle
