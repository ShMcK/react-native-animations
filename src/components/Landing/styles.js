import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    paddingTop: 25,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  items: {
    flex: 7,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    backgroundColor: 'powderblue',
  }
})

export default styles