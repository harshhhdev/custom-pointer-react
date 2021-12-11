import { styled } from '@css/theme.config'

export const Header = styled('a', {
  fontSize: '$6',
  color: '$secondary',
  textDecoration: 'none',
  fontWeight: 700,
  textAlign: 'center',
})

export const Description = styled('p', {
  fontSize: '$3',
  color: '$secondary',
  margin: '20px 0 100px 0',
  textAlign: 'center',
})

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 50,
})

export const InputSlider = styled('input', {
  appearance: 'none',
  width: '20vw',
  minWidth: 300,
  height: 7,
  outline: 'none',
  background: '#81EFC0',
  borderRadius: 10,
  '&::-webkit-slider-thumb': {
    appearance: 'none',
    width: 20,
    height: 20,
    borderRadius: 100,
    background: '$main',
    transition: '0.1s linear',
  },
  '&::-webkit-slider-thumb:hover': {
    transform: 'scale(1.2)',
  },
})

export const ColourPicker = styled('input', {
  background: 'none',
  borderRadius: '100%',
  height: 30,
  width: '20vw',
  minWidth: 300,
  border: 'none',
  outline: 'none',
  appearance: 'none',
  transition: '0.1s linear',
  '&:hover': {
    transform: 'scale(1, 1.3)',
  },
  '&::-webkit-color-swatch-wrapper': {
    padding: 0,
  },
  '&::-webkit-color-swatch': {
    border: 'none',
    borderRadius: 5,
  },
})

export const Checkbox = styled('input', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 30,
  outline: 'none',
  background: '$bg',
  appearance: 'none',
  margin: 0,
  border: '3px solid $main',
  borderRadius: 5,
  '&::before': {
    content: '',
    width: 15,
    height: 15,
    borderRadius: 15,
    transform: 'scale(0)',
    transition: '0.2s transform ease-in-out',
    background: '$main',
    margin: 0,
  },
  '&:checked::before': {
    transform: 'scale(1)',
  },
})

export const OptionBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 50,
  variants: {
    top: {
      true: {
        marginTop: 100,
      },
    },
  },
})

export const Label = styled('p', {
  color: '$secondary',
  fontSize: '$4',
  marginBottom: 30,
  fontWeight: 700,
})
