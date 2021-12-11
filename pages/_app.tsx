import type { AppProps } from 'next/app'

import { MouseContextProvider } from 'custom-pointer-react'

function CustomPointerReact({ Component, pageProps }: AppProps) {
  return (
    <MouseContextProvider>
      <Component {...pageProps} />
    </MouseContextProvider>
  )
}

export default CustomPointerReact
