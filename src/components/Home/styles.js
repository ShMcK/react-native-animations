import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'aliceblue'
  },
  items: {
    marginTop: 24,
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: Dimensions.get('window').width
  }
})

export default styles