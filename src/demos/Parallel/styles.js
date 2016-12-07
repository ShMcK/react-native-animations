import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'black'
  },
  button: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 35,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white'
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
  }
})

export default styles
