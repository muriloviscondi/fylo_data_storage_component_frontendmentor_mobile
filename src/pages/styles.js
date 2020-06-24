import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 5,
  },

  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  content: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentArquives: {
    width: 300,
    borderRadius: 12,
    borderTopRightRadius: 100,
    backgroundColor: 'hsl(228, 56%, 26%)',
    padding: 30,
  },

  Icons: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },

  contentIcons: {
    padding: 15,
    marginRight: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12, 18, 44)',
  },

  contentDataStorage: {
    width: 300,
    height: 135,
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: 'hsl(228, 56%, 26%)',
    padding: 30,
  },

  contentDescription: {
    flexDirection: 'row',
  },

  description: {
    color: '#fff',
    fontFamily: 'Raleway_400Regular',
  },

  descriptionWeight: {
    color: '#fff',
    fontFamily: 'Raleway_700Bold',
  },

  contentSlider: {
    marginTop: 10,
    marginBottom: 20,
  },

  contentDescriptionData: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  descriptionData: {
    color: '#fff',
    fontFamily: 'Raleway_700Bold',
  },

  contentDescriptionDataUsed: {
    width: 150,
    height: 75,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    position: 'relative',
    top: '-5%',
    left: '50%',
  },

  descriptionDataUsed: {
    fontSize: 36,
    fontFamily: 'Raleway_700Bold',
  },

  descriptionDataUsedComplement: {
    color: '#777',
    fontFamily: 'Raleway_400Regular',
  }

});