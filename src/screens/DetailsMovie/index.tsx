import { useCallback, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import YoutubeIframe from 'react-native-youtube-iframe'
import * as ScreenOrientation from 'expo-screen-orientation'

import { HeaderMain } from '../../components/HeaderMain'

import PlayMovie from '../../assets/playMovie.svg'
import Star from '../../assets/star.svg'

import { styles, VIDEO_HEIGHT } from './styles'

const coverMovies = [
  {
    videoId: "xVEHTdwArOg",
    movieTitle: "The Boys",
    URL: "https://br.web.img3.acsta.net/pictures/19/07/09/14/34/1532536.jpg?coixp=57&coiyp=52"
  },
  {
    videoId: "EkOJWulrkO4",
    movieTitle: "Minha Culpa",
    URL: "https://m.media-amazon.com/images/S/pv-target-images/80321dad16d7d9b23b28f9c2c9ffb473b348e0a2bfb88394d1cda14bfa6e7aea._UR2000,3000_SX375_FMwebp_.png"
  },
  {
    videoId: "LqO9Nt_bq4o",
    movieTitle: "O Pacto",
    URL: "https://m.media-amazon.com/images/S/pv-target-images/57b946b98b63d1fb16f7770f99ea016116ebbff8d8b8d8a94520c2cf08834024._UR2000,3000_SX375_FMwebp_.jpg"
  },
  {
    videoId: "iT5YPWGmh0k",
    movieTitle: "A Guerra do Amanhã",
    URL: "https://m.media-amazon.com/images/S/pv-target-images/bf8178ee6e317b73aced6d79fa8eb22cc2b7b5a3847a7c980216b7ac32fbbb00._UR2000,3000_SX375_FMwebp_.jpg"
  },
  {
    videoId: "hgCGeAu8Nao",
    movieTitle: "Observadores",
    URL: "https://m.media-amazon.com/images/S/pv-target-images/51043ee8b36da4455629253b197d839f329916071ce7e4cc7c6bfda35863a5bd._UR2000,3000_SX375_FMwebp_.png"
  },
]

interface Params {
  videoId: string
  movieTitle: string
  URL: string
}

interface Movie {
  videoId: string
  movieTitle: string
  URL: string
}

export function DetailsMovie() {
  const [clickVideo, setClickVideo] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const route = useRoute()
  const { videoId, movieTitle, URL } = route.params as Params

  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.goBack()
  }

  const navigateToDetailsMovie = (movieData: Movie) => {
    const { videoId, movieTitle, URL } = movieData

    navigation.navigate('detailsMovie', { videoId, movieTitle, URL })
  }

  const handlePlayVideo = () => {
    setClickVideo(true)
    setIsVideoPlaying(true)
  }

  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    }
  }, [])

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
          {!clickVideo ?
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={handlePlayVideo}
            >
              <Image
                source={{ uri: URL }}
                style={styles.cover}
              // resizeMode="cover"
              />
              <View style={styles.playIconContainer}>
                <PlayMovie />
              </View>
            </TouchableOpacity> :
            <YoutubeIframe
              videoId={videoId}
              height={VIDEO_HEIGHT}
              play={isVideoPlaying}
              onFullScreenChange={onFullScreenChange}
            />
          }

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
                key={item.videoId}
                activeOpacity={0.6}
                style={styles.movieButton}
                onPress={() => {
                  navigateToDetailsMovie(item)
                  setClickVideo(false)
                }}
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