import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    fontFamily: ''Montserrat', sans-serif'
  },
  welcome: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: [{ unit: 'vw', value: 100 }],
    height: [{ unit: 'vh', value: 100 }]
  },
  welcome_text: {
    fontSize: [{ unit: 'rem', value: 13 }],
    color: '#151515',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }],
    WebkitTextFillColor: 'transparent',
    background: '-webkit-linear-gradient(transparent, transparent),repeat',
    background: '-o-linear-gradient(transparent, transparent)',
    WebkitBackgroundClip: 'text',
    textAlign: 'center'
  },
  'welcome_text:after': {
    content: ''__________'',
    display: 'block',
    marginTop: [{ unit: 'px', value: -240 }]
  },
  main: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: [{ unit: 'vw', value: 100 }],
    height: [{ unit: 'vh', value: 100 }]
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: [{ unit: 'vw', value: 100 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  li: {
    width: [{ unit: 'vw', value: NaN }],
    height: [{ unit: 'vh', value: NaN }],
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: [{ unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }, { unit: '%V', value: 0.01 }, { unit: '%H', value: 0.01 }],
    listStyle: 'none',
    boxShadow: [{ unit: 'px', value: 5 }, { unit: 'px', value: 6 }, { unit: 'px', value: 4 }, { unit: 'px', value: 1 }, { unit: 'string', value: '#9E9E9E' }],
    fontWeight: 'bold',
    color: 'white',
    fontStretch: 'extra-condensed',
    transition: 'transform 0.3s ease-in'
  },
  'li:hover': {
    transform: 'scale(1.05)'
  },
  load_more: {
    display: 'block',
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    padding: [{ unit: 'px', value: 14 }, { unit: 'px', value: 14 }, { unit: 'px', value: 14 }, { unit: 'px', value: 14 }],
    border: [{ unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#151515' }],
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: [{ unit: 'rem', value: 1 }]
  }
});
