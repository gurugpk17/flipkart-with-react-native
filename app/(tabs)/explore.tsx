import Ionicons from '@expo/vector-icons/Ionicons';
import {View,Text, StyleSheet, Image, Platform } from 'react-native';


export default function TabTwoScreen() {
  return (
    <View style={styles.headerImage}>
      <Text >Hello to groceryy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    flex:1,
    color: '#908080',
    alignItems:'center',
    justifyContent:'center',
    // bottom: -90,
    // left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
