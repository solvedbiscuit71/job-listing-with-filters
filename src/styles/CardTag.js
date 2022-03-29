import styled from '@emotion/styled';

const getBackground = (props) => {
  switch (props.modifier) {
    case 'primary':
      return props.theme.headerBg
    case 'secondary': 
      return props.theme.featuredBg
  }
}

export default styled.div(props => ({
  padding: '.375em .75em',
  color: 'white',
  textTransform: 'uppercase',
  fontSize: '.75rem',
  backgroundColor: props.modifier ? getBackground(props) : props.theme.headerBg,
  borderRadius: '1.5em',
  width: 'fit-content',

  "span": {
    position: 'relative',
    top: '.15em'
  }
}));