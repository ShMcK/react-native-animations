import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 35,
    width: 80,
    backgroundColor: 'green',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
  },
  barContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderColor: 'black',
    borderWidth: 1,
    maxHeight: 20,
    width: 200,
  },
  bar: {
    height: 20,
    backgroundColor: 'blue',
  },
  item: {
    marginBottom: 20,
  }
})

export default styles
