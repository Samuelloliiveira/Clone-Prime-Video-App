import { StyleSheet } from 'react-native'

export const VIDEO_HEIGHT = 180

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#0D1821",
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "#0D1821"
  },
  movieDetails: {
    paddingLeft: 20,
    paddingRight: 20,
    gap: 10
  },
  cover: {
    width: 328,
    height: VIDEO_HEIGHT,
    borderRadius: 10,
    opacity: 0.5,
  },
  playIconContainer: {
    ...StyleSheet.absoluteFillObject, // Ocupar todo o espaço do contêiner pai
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  boxInfo: {
    flexDirection: "row",
    gap: 10
  },
  textInfo: {
    fontSize: 18,
    color: "#AFBBC6"
  },
  assessment: {
    padding: 20,
    alignItems: "center"
  },
  textAssessment: {
    fontSize: 18,
    color: "#fff"
  },
  stars: {
    marginTop: 5,
    flexDirection: "row",
    gap: 15,
  },
  recommendation: {
    marginLeft: 20,
    marginRight: 20,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
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
})