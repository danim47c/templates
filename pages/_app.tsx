import { Provider } from "jotai"
import { AppProps } from "next/app"
import { FC } from "react"

import "../styles/globals.css"
import "../styles/font.css"

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
)

export default App
