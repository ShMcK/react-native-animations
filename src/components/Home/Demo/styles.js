import { StyleSheet } from 'react-native'
import Dimensions from '../../../utils/Dimensions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.size.width  / 3 - 12.5,
    maxHeight: Dimensions.size.width / 3 - 12.5,
    backgroundColor: 'powderblue',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 5,
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
})

export default styles
