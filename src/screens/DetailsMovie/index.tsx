import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { HeaderMain } from '../../components/HeaderMain'

import PlayMovie from '../../assets/playMovie.svg'
import Star from '../../assets/star.svg'

import { styles } from './styles'

const coverMovies = [
  {
    id: 1,
    movieTitle: "The Boys",
    URL: "https://br.web.img3.acsta.net/pictures/19/07/09/14/34/1532536.jpg?coixp=57&coiyp=52"
  },
  {
    id: 2,
    movieTitle: "Minha Culpa",
    URL: "https://m.media-amazon.com/images/S/pv-target-images/80321dad16d7d9b23b28f9c2c9ffb473b348e0a2bfb88394d1cda14bfa6e7aea._UR2000,3000_SX375_FMwebp_.png"
  },
  {
    id: 3,
    movieTitle: "O Pacto",
    URL: "https://m.media-amazon.com/images/S/pv-target-images/57b946b98b63d1fb16f7770f99ea016116ebbff8d8b8d8a94520c2cf08834024._UR2000,3000_SX375_FMwebp_.jpg"
  },
  {
    id: 4,
    movieTitle: "A Guerra do Amanhã",
    URL: "https://m.media-amazon.com/images/S/pv-target-images/bf8178ee6e317b73aced6d79fa8eb22cc2b7b5a3847a7c980216b7ac32fbbb00._UR2000,3000_SX375_FMwebp_.jpg"
  },
  {
    id: 5,
    movieTitle: "Observadores",
    URL: "https://m.media-amazon.com/images/S/pv-target-images/51043ee8b36da4455629253b197d839f329916071ce7e4cc7c6bfda35863a5bd._UR2000,3000_SX375_FMwebp_.png"
  },
]

interface Params {
  id: number
  movieTitle: string
  URL: string
}

interface Movie {
  id: number
  movieTitle: string
  URL: string
}

export function DetailsMovie() {
  const route = useRoute()
  const { id, movieTitle, URL } = route.params as Params

  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.goBack()
  }

  const navigateToDetailsMovie = (movieData: Movie) => {
    const { id, movieTitle, URL } = movieData

    navigation.navigate('detailsMovie', { id, movieTitle, URL })
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <HeaderMain />
        <View style={styles.navigation}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={handleGoBack}
          >
            <Text style={styles.text}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.text}>Sair</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.movieDetails}>
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              source={{ uri: URL }}
              style={styles.cover}
            // resizeMode="cover"
            />
            <View style={styles.playIconContainer}>
              <PlayMovie />
            </View>
          </TouchableOpacity>

          <Text style={styles.title}>{movieTitle}</Text>

          <View style={styles.boxInfo}>
            <Text style={styles.textInfo}>2022</Text>
            <Text style={styles.textInfo}>3 Temporada</Text>
          </View>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fuga sunt, non unde minus aut ab repudiandae recusandae officia magnam placeat.
          </Text>
        </View>

        <View style={styles.assessment}>
          <Text style={styles.textAssessment}>Avaliação de amigos</Text>
          <View style={styles.stars}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </View>
        </View>

        <View style={styles.recommendation}>
          <Text style={styles.sectionTitle}>Recomendação de amigos</Text>

          <ScrollView horizontal>
            {coverMovies.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.6}
                style={styles.movieButton}
                onPress={() => navigateToDetailsMovie(item)}
              >
                <Image
                  source={{ uri: item.URL }}
                  style={styles.movie}
                />
                <View style={styles.playIconContainer}>
                  <PlayMovie />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}