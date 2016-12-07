import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    backgroundColor: '#333',
    marginHorizontal: 5,
  },
  listItem: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 35,
    borderRadius: 8,
    margin: 20,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 8,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
})

export default styles
