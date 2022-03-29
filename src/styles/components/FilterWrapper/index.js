import styled from '@emotion/styled';

export default styled.div(props => ({
  width: '87.2vw',
  margin: '0 auto',
  padding: '1.125em',
  backgroundColor: 'white',
  borderRadius: '.375em',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  left: '50%',
  bottom: '0',
  transform: 'translate(-50%,70%)',

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
    fontWeight: 500
  }
}));