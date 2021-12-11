import React from 'react'
import { createState } from '@agile-ts/core'

import * as S from './Options.style'

export const SHOW_RING = createState(true)
export const COLOUR = createState('#FFFFFF')
export const RING_SIZE = createState('50')
export const CURSOR_SIZE = createState('10')
export const RING_BORDER = createState('2')

const Option: React.FC = () => {
  const RingRef = React.useRef<HTMLInputElement>(null)
  const CursorRef = React.useRef<HTMLInputElement>(null)
  const RingBorderRef = React.useRef<HTMLInputElement>(null)
  const ColourRef = React.useRef<HTMLInputElement>(null)
  const ShowRingRef = React.useRef<HTMLInputElement>(null)

  return (
    <S.InputContainer>
      <S.Header
        href='https://www.npmjs.com/package/custom-pointer-react'
        target='_blank'
        rel='norefferer'
      >
        custom-pointer-react
      </S.Header>
      <S.Description>🚀 Custom cursors for React</S.Description>
      <S.OptionBox>
        <S.Label>Ring Size</S.Label>
        <S.InputSlider
          min={10}
          step={1}
          max={150}
          defaultValue={50}
          type='range'
          ref={RingRef}
          onChange={() => RING_SIZE.set(RingRef.current!.value)}
        />
      </S.OptionBox>
      <S.OptionBox>
        <S.Label>Cursor Size</S.Label>
        <S.InputSlider
          min={3}
          step={1}
          max={50}
          defaultValue={10}
          type='range'
          ref={CursorRef}
          onChange={() => CURSOR_SIZE.set(CursorRef.current!.value)}
        />
      </S.OptionBox>
      <S.OptionBox>
        <S.Label>Ring Border</S.Label>
        <S.InputSlider
          min={1}
          step={1}
          max={20}
          defaultValue={2}
          type='range'
          ref={RingBorderRef}
          onChange={() => RING_BORDER.set(RingBorderRef.current!.value)}
        />
      </S.OptionBox>
      <S.OptionBox>
        <S.Label>Colour</S.Label>
        <S.ColourPicker
          type='color'
          defaultValue='#FFFFFF'
          ref={ColourRef}
          onChange={() => COLOUR.set(ColourRef.current!.value)}
        />
      </S.OptionBox>
      <S.OptionBox>
        <S.Label>Show Ring</S.Label>
        <S.Checkbox
          type='checkbox'
          defaultChecked={true}
          ref={ShowRingRef}
          onChange={() => SHOW_RING.set(ShowRingRef.current!.checked)}
        />
      </S.OptionBox>
    </S.InputContainer>
  )
}

export default Option
