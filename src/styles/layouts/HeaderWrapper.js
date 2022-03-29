import styled from '@emotion/styled';

export default styled.header(props => ({
  minHeight: '9.6875em',
  backgroundColor: props.theme.headerBg,
  backgroundImage: 'url("images/bg-header-mobile.svg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative'
}));