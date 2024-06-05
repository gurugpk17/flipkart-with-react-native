import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Products from '@/components/products.json';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
  const Options = ["Sort By", "Filter", "Compare", "Brand", "Price", "Processor", "Category"];
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
   <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.titleContainer}>
      <Image source={require('@/assets/images/left-arrow.png')} style={styles.Logo} />
      <View style={styles.inputContainer}>
        <Image source={require('@/assets/images/search.png')} style={styles.SearchLogo} />
        <TextInput style={[styles.input, isFocused && styles.inputFocused]} 
        onFocus={handleFocus}
        onBlur={handleBlur} placeholder="laptops" />
        <Image source={require('@/assets/images/mic.png')} style={styles.MicLogo} />
        <Image source={require('@/assets/images/camera.png')} style={styles.CamLogo} />
      </View>
      <Image source={require('@/assets/images/cart.png')} style={styles.CartLogo} />
    </View>
    <View style={styles.optionsBodyContainer}>
      {Options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => console.log({option,index}+' clicked')}>
          <View style={styles.optionsContainer}>
            <Text>{option}</Text>
            <FontAwesome name="angle-down" style={styles.fontawe} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.otherOptions}>
      <TouchableOpacity onPress={() => console.log('12th Gen')}>
        <View style={styles.otherOptionsContainer}>
          <Image source={require('@/assets/images/gen.png')} style={styles.optionsLogo} />
          <View>
            <Text>12th</Text>
            <Text>Gen</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Top Rated')}>
        <View style={styles.otherOptionsContainer}>
          <Image source={require('@/assets/images/rate.png')} style={styles.optionsLogo} />
          <View>
            <Text>Top</Text>
            <Text>Rated</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Core i5')}>
        <View style={styles.otherOptionsContainer}>
          <Image source={require('@/assets/images/gen.png')} style={styles.optionsLogo} />
          <View>
            <Text>Core</Text>
            <Text>i5</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View> 
    <View style={styles.grabeContainer}>
      <Image source={require('@/assets/images/laptop.png')} style={styles.laptopPng} />
      <View style={styles.InsideText}>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Grabe or Gone!</Text>
        <Text style={{ color: '#8A8A8A' }}>Sponsored by Lenovo</Text>
      </View>
      <FontAwesome name="angle-right" style={styles.fontaweRight} />
    </View>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {Products.map((product, index) => (
          <View key={index} style={styles.productsBody}>
            <View style={styles.productsContainer}>
              <Image source={{ uri: product.imgUrl }} style={styles.productImage} />
            </View>
            <View style={styles.productDetails}>
              <Text>{product.title}</Text>
              <Text style={{ textDecorationLine: 'line-through' }}>50000</Text>
              <Text>{product.price}</Text>
              <Text>
                <FontAwesome name='star' style={{ color: 'gold', paddingRight: 5 }} />
                {product.rating}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContent: {
    padding: 20,
  },
  titleContainer: {
    backgroundColor: '#D2E3FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  optionsBodyContainer: {
    backgroundColor: 'white',
    paddingLeft: 10,
    flexDirection: 'row',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingRight: 20,
  },
  optionsContainer: {
    top: 10,
    height: 40,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
  },
  fontawe: {
    fontWeight: '600',
    color: 'black',
    fontSize: 15,
    paddingLeft: 5,
  },
  Logo: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: 18,
    left: 15,
  },
  MicLogo: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 10,
    right: 65,
  },
  CamLogo: {
    height: 21,
    width: 21,
    position: 'absolute',
    top: 10,
    right: 25,
  },
  SearchLogo: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  CartLogo: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: 18,
    right: 25,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#7FA0E3',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    marginLeft: '6%',
    marginRight:'5%',
    // paddingHorizontal: 10,
  },
  inputFocused: {
    borderColor: 'blue', // Change to your desired color
    borderWidth: 2,
  },
  otherOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 18,
    padding: 12,
    backgroundColor: 'white',
  },
  otherOptionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  optionsLogo: {
    height: 30,
    width: 30,
  },
  laptopPng: {
    height: 100,
    width: 150,
  },
  grabeContainer: {
    height: 150,
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    flexDirection: 'row',
  },
  InsideText: {
    gap: 5,
    marginLeft: '10%',
  },
  fontaweRight: {
    fontSize: 30,
    marginLeft: 'auto',
    marginRight: '5%',
  },
  productsBody: {
    marginTop: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  productsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  productImage: {
    height: 100,
    width: 150,
  },
  productDetails: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
});