import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: Dimensions.get('window').height * 0.75,
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: 'grey',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'white'
  },
  button: {
    height: 45,
    width: Dimensions.get('window').width * 0.75,
    borderRadius: 22,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: 'yellow',
  },
  searchBarInput: {
    borderWidth: 1, 
    borderColor: 'gray', 
    height: 30, 
    width: Dimensions.get('window').width * 0.5, 
  },
  directions: {
    color: 'white',
    fontSize: 24,
  },
  title: {
    fontSize: 32,
  }
})

export default styles
