import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'grey',
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
  },
})

export default styles
