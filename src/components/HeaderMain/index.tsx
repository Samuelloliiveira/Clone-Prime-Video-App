import { View } from 'react-native'

import { styles } from './styles'

import Logo from '../../assets/logo.svg'

export function HeaderMain() {
  return (
    <View style={styles.background}>
      <Logo />
    </View>
  )
}