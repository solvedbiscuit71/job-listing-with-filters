import styled from '@emotion/styled';

export default styled.div(props => ({
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: props.theme.tagBg,
  borderRadius: '.375em',
  color: props.theme.headerBg,
  width: 'fit-content',

  "& > div": {
    fontSize: ".85rem",
    padding: ".375em .4em",
    borderRadius: '.375em',
    display: 'flex',
    alignItems: 'center'
  },

  "& > div:last-of-type": {
    backgroundColor: props.theme.headerBg,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  padding: props.noClose ? '.375em .4em' : null
}));