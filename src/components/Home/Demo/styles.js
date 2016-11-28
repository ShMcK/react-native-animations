import { StyleSheet } from 'react-native'
import Dimensions from '../../../utils/Dimensions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.size.width / 3,
    maxHeight: Dimensions.size.width / 3,
    backgroundColor: 'powderblue',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
  }
})

export default styles
