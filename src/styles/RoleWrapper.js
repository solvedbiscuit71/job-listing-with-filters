import styled from '@emotion/styled';

export default styled.div(props => ({
  '.bullet': {
    display: 'inline-block',
    width: '.25em',
    height: '.25em',
    borderRadius: '50%',
    backgroundColor: props.theme.textColorLight
  },

  display: 'flex',
  alignItems: 'center',
  gap: '.5em',

  '& > div': {
    color: props.theme.textColorLight,
    fontSize: '.85rem'
  }
}));