import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#0D1821",
  },
  text: {
    fontSize: 15,
    color: "#fff",
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 60,
    zIndex: 2,
    paddingLeft: 20,
    paddingRight: 20,
    gap: 10
  },
  boxTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  myList: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  categories: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 5,
  },
  caretDown: {
    marginTop: 3
  },
  swiper: {
    height: 490,
  },
  cover: {
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  dot: {
    backgroundColor: "#666666",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#F6F6F6",
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  blur: {
    position: 'absolute',
    bottom: 0,
  },
  button: {
    bottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  linearGradient: {
    width: "100%",
    height: 42,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  continueWatching: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  movieButton: {
    position: 'relative',
    marginRight: 15
  },
  movie: {
    width: 114.88,
    height: 154.45,
    borderRadius: 10
  },
  playIconContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amazonOriginals: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  }
})