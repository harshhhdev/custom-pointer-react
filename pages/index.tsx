import { useAgile } from '@agile-ts/react'
import type { NextPage } from 'next'

import Header from '@components/Head'
import { Cursor } from 'custom-pointer-react'
import Option, {
  RING_SIZE,
  CURSOR_SIZE,
  RING_BORDER,
  COLOUR,
  SHOW_RING,
} from '@components/Options/Options'
import Footer from '@components/Footer'

import globalStyles from '@css/global.style'
import Codeblock from '@components/Code/Code'

const Home: NextPage = () => {
  globalStyles()

  const ringSize = useAgile(RING_SIZE)
  const cursorSize = useAgile(CURSOR_SIZE)
  const ringBorder = useAgile(RING_BORDER)
  const colour = useAgile(COLOUR)
  const showRing = useAgile(SHOW_RING)

  return (
    <>
      <Header />
      <Cursor
        showRing={showRing}
        color={colour}
        ringSize={+ringSize}
        cursorSize={+cursorSize}
        ringBorder={+ringBorder}
      />
      <Option />
      <Codeblock
        showRing={showRing}
        colour={colour}
        ringSize={+ringSize}
        cursorSize={+cursorSize}
        ringBorder={+ringBorder}
      />
      <Footer />
    </>
  )
}

export default Home
