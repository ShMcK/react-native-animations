import Dimensions from 'Dimensions'
import { PixelRatio } from 'react-native'

const Dim = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
}

export default Dim
