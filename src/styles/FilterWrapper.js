import styled from '@emotion/styled';

export default styled.div(props => ({
  width: '87.2vw',
  margin: '0 auto',
  padding: '1.125em',
  backgroundColor: 'white',
  boxShadow: '0 .5em 1.5em 0 hsla(180, 29%, 50%,0.5)',
  borderRadius: '.375em',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  top: '-2em',

  opacity: props.show ? 1 : 0,
  transition: `opacity ${props.delay}ms ease-in-out`,

  "& > div": {
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '1em'
  },

  "button": {
    background: 'none',
    border: 'none',
    color: props.theme.textColorLight,
    fontSize: '.85rem',
    fontWeight: 500,

    "&:hover": {
      cursor: 'pointer',
      color: props.theme.headerBg,
      textDecoration: 'underline'

    }
  },

  "@media (min-width:1080px)": {
    padding: '1.125em 2.5em'
  }
}));