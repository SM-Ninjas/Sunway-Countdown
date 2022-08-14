import { createGlobalStyle } from 'styled-components'
import { themes } from '../context/Theme'

export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        color: ${themes.light.text};
        font-family: 'Roboto', sans-serif;
    }
    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 96px;
        font-weight: 900;
    }
    h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: 800;
    }
    p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 300;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 48px;
        }
        h2 {
            font-size: 18px;
        }
        p {
            font-size: 14px;
        }
    }
`