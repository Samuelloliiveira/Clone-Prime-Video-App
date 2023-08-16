import { SafeAreaView, Text } from 'react-native'

import { styles } from './styles'

export function MyPrime() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.text}>Tela de MyPrime</Text>
    </SafeAreaView>
  )
}