import { StyleSheet } from 'react-native'
import Dimensions from '../../utils/Dimensions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    padding: 5,
  },
  items: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: Dimensions.size.width
  }
})

export default styles