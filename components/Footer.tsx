import React from 'react'
import { styled } from '@css/theme.config'

import * as Icons from 'react-feather'

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: '#b4b4b4',
  margin: '150px 0 50px 0',
  width: '100vw',
  fontWeight: 600,
  '@iPhonePlus': {
    flexDirection: 'column',
  },
})

const FooterWrapper = styled('div', {
  display: 'flex',
  variants: {
    container: {
      true: {
        marginTop: 20,
      },
    },
  },
})

const FooterText = styled('p', {
  fontSize: '$3',
  margin: '0 10px',
  '@iPhoneSE': {
    fontSize: '$2',
  },
})

const FooterLink = styled('a', {
  color: '$white1',
  textDecoration: 'none',
  '&:hover': {
    color: '$main',
  },
  variants: {
    text: {
      true: {
        margin: 0,
      },
    },
  },
  margin: '0 7px',
})

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <FooterWrapper container>
        <FooterLink
          href='https://github.com/harshhhdev/custom-pointer-react'
          target='_blank'
          rel='noreferrer'
          text
        >
          <Icons.Code />
        </FooterLink>
        <FooterText>with</FooterText>
        <Icons.Heart />
        <FooterText>
          and{' '}
          <FooterLink
            href='https://nextjs.org'
            target='_blank'
            rel='noreferrer'
            text
          >
            Next.js
          </FooterLink>
        </FooterText>
      </FooterWrapper>
      <FooterWrapper container>
        <FooterText>
          © 2021{' '}
          <FooterLink
            href='https://harshhhdev.github.io/'
            target='_blank'
            rel='noreferrer'
            text
          >
            Harsh Singh
          </FooterLink>
        </FooterText>
        <FooterWrapper>
          <FooterLink href='https://github.com/harshhhdev/' target='_blank'>
            <Icons.GitHub />
          </FooterLink>
          <FooterLink
            href='https://twitter.com/harshhhdev/'
            target='_blank'
            rel='noreferrer'
          >
            <Icons.Twitter />
          </FooterLink>
          <FooterLink
            href='https://dribbble.com/harshhhdev/'
            target='_blank'
            rel='noreferrer'
          >
            <Icons.Dribbble />
          </FooterLink>
        </FooterWrapper>
      </FooterWrapper>
    </Wrapper>
  )
}

export default Footer
