import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#333',
    width: 300,
    height: Dimensions.get('window').height * 0.85,
  },
})

export default styles
