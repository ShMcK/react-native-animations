import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  searchBarPosition: {
    position: 'absolute',
    bottom: 250,
    margin: width * 0.05,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: height * 0.35,
    backgroundColor: 'white',
    height: 45,
    width: width * 0.90,
    borderRadius: 8,
    paddingLeft: 12,
    paddingRight: 12,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowColor: 'grey',
    shadowRadius: 2,
  },
  searchText: {
    marginLeft: 20,
    fontSize: 24,
    color: 'grey',
  },
  popUpPosition: {
    position: 'absolute',
    bottom: 0 - width / 2,
    borderRadius: 150,
    backgroundColor: 'white',
    height: width,
    width: width - 20,
    margin: width * 0.025,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowColor: 'grey',
    shadowRadius: 2,
  },
  popUpContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popUpContainerBottom: {
    flex: 2,
  },
})

export default styles
