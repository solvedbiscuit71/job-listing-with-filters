import styled from '@emotion/styled';

export default styled.div(props => ({
  minHeight: '9.6875em',
  backgroundColor: props.theme.headerBg,
  backgroundImage: 'url("images/bg-header-mobile.svg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  "@media (min-width:1080px)": {
    backgroundImage: 'url("images/bg-header-desktop.svg")'
  }
}));