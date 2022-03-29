import styled from '@emotion/styled';

export default styled.div(props => ({
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: props.theme.tagBg,
  borderRadius: '.375em',
  width: 'fit-content',

  "& > div": {
    fontSize: ".85rem",
    color: props.theme.headerBg,
    padding: ".375em .4em",
    borderRadius: '.375em',
    display: 'flex',
    alignItems: 'center'
  },

  "& > div:last-of-type": {
    backgroundColor: props.theme.headerBg,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }
}));