import Head from 'next/head'
import React from 'react'

const Header: React.FC = () => {
  return (
    <Head>
      <title>custom-pointer-react</title>
      <meta property='og:title' content='custom-pointer-react' />
      <meta property='twitter:title' content='custom-pointer-react' />
      <meta name='description' content='🚀 Custom cursors for React' />
      <meta property='og:description' content='🚀 Custom cursors for React' />
      <meta
        property='twitter:description'
        content='🚀 Custom cursors for React'
      />
      <meta property='og:type' content='website' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='theme-color' content='#01DC83' />
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>'
      />
      <meta
        property='og:image'
        content='https://github.com/harshhhdev/custom-pointer-react/blob/master/public/Banner.jpg?raw=true'
      />
      <meta
        property='twitter:image'
        content='https://github.com/harshhhdev/custom-pointer-react/blob/master/public/Banner.jpg?raw=true'
      />
    </Head>
  )
}

export default Header
