import styled from '@emotion/styled';

export default styled.div(props => ({
  backgroundColor: 'white',
  borderRadius: '.375em',
  padding: '1.5em',
  position: 'relative',

  '&::after': {
    content: props.featured ? '""' : null,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '.3125em',
    height: '100%',
    backgroundColor: props.theme.headerBg,
    borderTopLeftRadius: '.375em',
    borderBottomLeftRadius: '.375em'
  },

  '& > img:first-of-type': {
    width: '4em',
    height: '4em',

    position: 'absolute',
    top: '-2em',
    left: '1.5em'
  },

  '& > .company': {
    display: 'flex',
    gap: '.5em',
    alignItems: 'center',
    marginTop: '1.5em',

    'h1': {
      fontSize: '.85rem',
      color: props.theme.headerBg,
      margin: 0,
      marginRight: '.5em'
    }
  },

  '& > .role': {
    margin: '1em 0',
    'h2': {
      fontSize: '1rem',
      margin: 0
    },
    
    '> div': {
      padding: '1em 0',
      borderBottom: `1px solid ${props.theme.textColorLight}`
    }
  },

  '& > .skills': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '1em'
  }
}));