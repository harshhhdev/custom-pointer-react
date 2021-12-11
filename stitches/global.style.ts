import { globalCss } from './theme.config'

const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    fontFamily: '$main',
    cursor: 'none !important',
  },
  html: {
    overflowX: 'hidden',
  },
  'div, button': {
    userSelect: 'none',
  },
  body: {
    background: '$bg',
    color: '$secondary',
    overflowX: 'hidden',
  },
  '::selection': {
    background: '$secondary',
    color: '#000',
  },
  img: {
    userSelect: 'none',
  },
  'body::-webkit-scrollbar': {
    width: 5,
  },
  'body::-webkit-scrollbar-track': {
    background: 'none',
  },
  'body::-webkit-scrollbar-thumb': {
    background: '$main',
  },
  'code, span': {
    fontFamily: 'Fira Code, monospace !important',
  },
})

export default globalStyle
