import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'loginform': {
    'minHeight': [{ 'unit': 'vh', 'value': 70 }],
    'width': [{ 'unit': 'px', 'value': 500 }],
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'center',
    'fontSize': [{ 'unit': 'px', 'value': NaN }]
  },
  'wrapper': {
    'backgroundColor': 'aliceblue',
    'color': 'midnightblue',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'darkslategrey' }],
    'position': 'relative'
  },
  'ptext': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 27 }],
    'fontFamily': ''Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif',
    'fontWeight': 'bold',
    'color': 'midnightblue'
  },
  'bottom1': {
    'marginBottom': [{ 'unit': 'vh', 'value': 3 }]
  },
  'bottom2': {
    'marginBottom': [{ 'unit': 'vh', 'value': 1 }]
  },
  'vertical-center': {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'center',
    'minHeight': [{ 'unit': 'vh', 'value': 90 }]
  },
  'signin-up': {
    'marginTop': [{ 'unit': '%V', 'value': 0.4 }],
    'position': 'absolute'
  },
  'text-navlink': {
    'color': 'brown'
  },
  'bar': {
  }
});
