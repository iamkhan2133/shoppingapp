import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const Buying = ({ navigation, route }) => {



  const { products } = route.params
  useEffect(() => {
    console.log('.....products........', products)
  }, [])

  return (
    <LinearGradient colors={['#FCF6F7', '#FEECF0']} style={styles.linearGradient}>
      <View  >
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 19 }}>
          <View style={{ marginRight: 50 }} >
            <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: '#fff', borderRadius: 30 }} onPress={() => navigation.navigate('Cart')}><Image style={{ height: 25, width: 25, alignSelf: 'center', marginTop: 10 }} source={require("../assets/images/back.png")} /></TouchableOpacity>
          </View>
          <View >
            <Text style={{ fontSize: 30, color: '#000', }}>MY CART</Text>
          </View>
          <View style={{ height: 50, width: 50, backgroundColor: '#fff', borderRadius: 30, marginLeft: 35 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Myinfo')}><Image style={{ height: 20, width: 20, marginTop: 14, marginLeft: 16 }} source={require("../assets/images/user.png")} /></TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Image source={{ uri: (products.image) }} style={{ height: 130, width: 100, borderRadius: 20, marginLeft: 10 }} />
          <View style={{ justifyContent: 'flex-start', marginRight: 60, marginLeft: 5 }} >
            <View>
              <Text style={{ color: '#000', width: 190, marginTop: 19, fontWeight: "bold" }}>{products.title}</Text>
            </View>
            <View>
              <Text style={{ color: 'lightgray', color: '#000' }}>RS.{products.price}</Text><TouchableOpacity><Image style={{ height: 20, width: 20, tintColor: 'red', alignSelf: 'flex-end' }} source={require("../assets/images/dustbin.png")} /></TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    </LinearGradient>
  )
}
export default Buying;
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
});