import { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Swiper from 'react-native-swiper'

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
    URL: "https://br.web.img3.acsta.net/pictures/19/07/09/14/34/1532536.jpg?coixp=57&coiyp=52"
  },
  {
    URL: "https://m.media-amazon.com/images/S/pv-target-images/80321dad16d7d9b23b28f9c2c9ffb473b348e0a2bfb88394d1cda14bfa6e7aea._UR2000,3000_SX375_FMwebp_.png"
  },
  {
    URL: "https://m.media-amazon.com/images/S/pv-target-images/57b946b98b63d1fb16f7770f99ea016116ebbff8d8b8d8a94520c2cf08834024._UR2000,3000_SX375_FMwebp_.jpg"
  },
  {
    URL: "https://m.media-amazon.com/images/S/pv-target-images/bf8178ee6e317b73aced6d79fa8eb22cc2b7b5a3847a7c980216b7ac32fbbb00._UR2000,3000_SX375_FMwebp_.jpg"
  },
  {
    URL: "https://m.media-amazon.com/images/S/pv-target-images/51043ee8b36da4455629253b197d839f329916071ce7e4cc7c6bfda35863a5bd._UR2000,3000_SX375_FMwebp_.png"
  },
]

export function Home() {
  const [, setActiveIndex] = useState(0)

  const handleIndexChanged = (index: number) => {
    setActiveIndex(index)
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
            {coverMovies.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.6}
                key={index}
                style={styles.movieContainer}
              >
                <Image
                  source={{ uri: item.URL }}
                  style={styles.movie}
                />
                <PlayMovie
                  style={styles.playIcon}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.amazonOriginals}>
          <Text style={styles.sectionTitle}>Originais da Amazon</Text>

          <ScrollView horizontal>
            {coverMovies.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.6}
                key={index}
                style={styles.movieContainer}
              >
                <Image
                  source={{ uri: item.URL }}
                  style={styles.movie}
                />
                <PlayMovie
                  style={styles.playIcon}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}
