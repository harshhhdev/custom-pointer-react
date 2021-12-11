import React from 'react'

import Syntax from 'react-syntax-highlighter'
import { arta } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import copy from 'copy-to-clipboard'

import { styled, keyframes } from '@css/theme.config'

const TooltipAnimation = keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(-60px)',
  },
})

const CodeblockContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  pre: {
    width: '20vw',
    minWidth: 300,
  },
})

const Tooltip = styled('p', {
  color: '$white',
  fontFamily: '$primary',
  position: 'absolute',
  opacity: 0,
  fontSize: '$2',
})

const CopyButton = styled('button', {
  outline: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
  padding: '15px 20px',
  fontSize: '$3',
  background: '$main',
  fontWeight: 700,
  color: '$secondary',
  border: 'none',
  borderRadius: 5,
  transition: '0.1s linear',
  '.animate': {
    animation: `${TooltipAnimation} 0.5s linear`,
  },
})

const preStyle = {
  borderRadius: 6,
  padding: 30,
  fontSize: 18,
  overflowX: '',
  background: '#2b2b2b',
}

const Codeblock: React.FC<{
  ringSize: number
  cursorSize: number
  ringBorder: number
  colour: string
  showRing: boolean
}> = ({ ringSize, cursorSize, ringBorder, colour, showRing }) => {
  const TooltipRef = React.useRef<HTMLParagraphElement>(null)

  React.useEffect(() => {
    TooltipRef.current!.addEventListener('animationend', () => {
      TooltipRef.current!.classList.remove('animate')
    })
  }, [])

  const code = `<Cursor
  showRing={${showRing}}
  color="${colour}"
  ringSize={${ringSize}}
  cursorSize={${cursorSize}}
  ringBorder={${ringBorder}}
/>`

  return (
    <CodeblockContainer>
      <Syntax style={arta} language='tsx' customStyle={preStyle}>
        {code}
      </Syntax>
      <CopyButton
        onClick={() => {
          copy(code)
          TooltipRef.current!.classList.add('animate')
        }}
      >
        Copy <Tooltip ref={TooltipRef}>Copied</Tooltip>
      </CopyButton>
    </CodeblockContainer>
  )
}

export default Codeblock
