import { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

import Logo from '../../assets/logo.svg'
import Search from '../../assets/search.svg'
import CaretDown from '../../assets/caret-down.svg'
import Blur from '../../assets/blur.svg'
import User from '../../assets/user.svg'
import Play from '../../assets/play.svg'
import PlayMovie from '../../assets/playMovie.svg'

const coverMovies = [
  {
    videoId: "xVEHTdwArOg",
    movieTitle: "The Boys",
    URL: "https://br.web.img3.acsta.net/pictures/19/07/09/14/34/1532536.jpg?coixp=57&coiyp=52",
    coverVideo: "https://tm.ibxk.com.br/2022/06/21/21135358626270.jpg"
  },
  {
    videoId: "EkOJWulrkO4",
    movieTitle: "Minha Culpa",
    URL: "https://m.media-amazon.com/images/S/pv-target-images/80321dad16d7d9b23b28f9c2c9ffb473b348e0a2bfb88394d1cda14bfa6e7aea._UR2000,3000_SX375_FMwebp_.png",
    coverVideo: "https://cinepop.com.br/wp-content/uploads/2023/06/minha-culpa.poster-scaled.jpg"
  },
  {
    videoId: "LqO9Nt_bq4o",
    movieTitle: "O Pacto",
    URL: "https://m.media-amazon.com/images/S/pv-target-images/57b946b98b63d1fb16f7770f99ea016116ebbff8d8b8d8a94520c2cf08834024._UR2000,3000_SX375_FMwebp_.jpg",
    coverVideo: "https://tm.ibxk.com.br/2023/06/26/26163839570394.jpg?ims=1200x675"
  },
  {
    videoId: "iT5YPWGmh0k",
    movieTitle: "A Guerra do Amanhã",
    URL: "https://m.media-amazon.com/images/S/pv-target-images/bf8178ee6e317b73aced6d79fa8eb22cc2b7b5a3847a7c980216b7ac32fbbb00._UR2000,3000_SX375_FMwebp_.jpg",
    coverVideo: "https://cinepop.com.br/wp-content/uploads/2021/07/GUERRA-DO-AMANHA.jpg"
  },
  {
    videoId: "hgCGeAu8Nao",
    movieTitle: "Observadores",
    URL: "https://m.media-amazon.com/images/S/pv-target-images/51043ee8b36da4455629253b197d839f329916071ce7e4cc7c6bfda35863a5bd._UR2000,3000_SX375_FMwebp_.png",
    coverVideo: "https://i0.wp.com/pocilga.com.br/wp-content/uploads/2021/09/0001-7681960568_20210911_172000_0000.png?fit=1200%2C700"
  },
]

interface Movie {
  videoId: string
  movieTitle: string
  URL: string,
  coverVideo: string
}

export function Home() {
  const [, setActiveIndex] = useState(0)

  const { navigate } = useNavigation()

  const handleIndexChanged = (index: number) => {
    setActiveIndex(index)
  }

  const navigateToDetailsMovie = (movieData: Movie) => {
    const { videoId, movieTitle, URL, coverVideo } = movieData

    navigate('detailsMovie', { videoId, movieTitle, URL, coverVideo })
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.boxTop}>
            <Logo />
            <TouchableOpacity activeOpacity={0.6} >
              <Search color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.myList}>
              <Text style={styles.text} >Minha Lista</Text>
              <User />
            </TouchableOpacity >
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.categories}
          >
            <Text style={styles.text}>Categorias</Text>
            <CaretDown style={styles.caretDown} />
          </TouchableOpacity>
        </View>

        <View>
          <View>
            <Swiper
              style={styles.swiper}
              autoplay={true}
              autoplayTimeout={5}
              showsPagination={true}
              scrollEnabled={false}
              paginationStyle={{ bottom: -20 }}
              onIndexChanged={handleIndexChanged}
              dot={<View style={styles.dot} />}
              activeDot={<View style={styles.activeDot} />}
            >
              {coverMovies.map((item, index) => (
                <Image
                  key={index}
                  source={{ uri: item.URL }}
                  style={styles.cover}
                />
              ))}
            </Swiper>
            <Blur style={styles.blur} />
          </View>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
          >
            <LinearGradient colors={['#1B9CCA', '#116381']} style={styles.linearGradient}>
              <Play />
              <Text style={styles.text}>Assistir</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.continueWatching}>
          <Text style={styles.sectionTitle}>Continuar assistindo...</Text>

          <ScrollView horizontal>
            {coverMovies.map((item) => (
              <TouchableOpacity
                activeOpacity={0.6}
                key={item.videoId}
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

        <View style={styles.amazonOriginals}>
          <Text style={styles.sectionTitle}>Originais da Amazon</Text>

          <ScrollView horizontal>
            {coverMovies.map((item) => (
              <TouchableOpacity
                key={item.videoId}
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
    </SafeAreaView >
  )
}
