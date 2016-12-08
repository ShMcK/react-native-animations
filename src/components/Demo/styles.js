import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width  / 3 - 12.5,
    maxHeight: width / 3 - 12.5,
    backgroundColor: 'powderblue',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    justifyContent: 'center',
    margin: 5,
    shadowColor: 'grey',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: 'darkgrey',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 2,
  },
  inner: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    marginTop: 10,
    opacity: 0.8,
  }
})

export default styles
