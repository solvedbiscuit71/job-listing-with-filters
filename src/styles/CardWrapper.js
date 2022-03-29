import styled from '@emotion/styled';

export default styled.div(props => ({
  backgroundColor: 'white',
  borderRadius: '.375em',
  boxShadow: '0 .5em 1.5em 0 hsla(180, 29%, 50%,0.5)',
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

  '.company': {
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

  '.role': {
    margin: '1em 0',
    'h2': {
      fontSize: '1rem',
      margin: 0,

      '&:hover': {
        cursor: 'pointer',
        color: props.theme.headerBg
      }
    },
    
    '> div': {
      padding: '1em 0',
      borderBottom: `1px solid ${props.theme.textColorLight}`
    }
  },

  '.skills': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '1em'
  },

  '@media (min-width: 1080px)': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '9.375em',
    paddingRight: '2.5em',

    '& > img:first-of-type': {
      width: '5.5em',
      height: '5.5em',
      top: '50%',
      left: '2.5em',
      transform: 'translateY(-50%)'
    },

    '.company': {
      margin: 0
    },

    '.role': {
      margin: '.75em 0 0',

      '> div': {
        padding: '.75em 0',
        borderBottom: 'none'
      }
    }
  },
}));