import { StyleSheet } from "react-native"


export default StyleSheet.create({
  //page take full screen
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
  },
  menuTitle: {
    marginVertical: 10,
    fontSize: 18,
    letterSpacing: 0.7
  },
  subtitle: {
    fontSize: 15,
    color: '#525252',
  },
  container: {
    margin: 10,
  }
})