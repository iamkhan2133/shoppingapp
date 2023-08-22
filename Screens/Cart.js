import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const Cart = ({ navigation, route }) => {

  const data = [


    {
      id: '1',
      size: 'XL'
    },
    {
      id: '1',
      size: 'L'
    },
    {
      id: '1',
      size: 'XL'
    },
    {
      id: '1',
      size: 'XL'
    }
  ]

  const { items } = route.params
  useEffect(() => {
    console.log('.....items........', items)
  }, [])
  return (
    <LinearGradient colors={['#FEECF0', '#FCF6F7']} style={styles.linearGradient}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ height: 50, width: 50, backgroundColor: '#fff', borderRadius: 30, marginTop: 10 }}>
            <TouchableOpacity><Image style={{ height: 20, width: 20, marginTop: 13, marginLeft: 12, tintColor: '#F38181' }} source={require("../assets/images/dots-menu.png")} /></TouchableOpacity>
          </View>
          <View style={{ height: 50, width: 50, backgroundColor: '#fff', borderRadius: 30, marginTop: 10 }}>
            <TouchableOpacity><Image style={{ height: 20, width: 20, marginTop: 14, marginLeft: 13 }} source={require("../assets/images/user.png")} /></TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{ justifyContent: 'space-around', marginTop: 8 }}>
          <Image source={{ uri: (items.image) }} style={{ height: 400, width: 400 }} />
          <Text style={{ color: '#000', width: 200, fontWeight: 'bold', margin: 10 }}>{items.title}</Text>
          <Text style={{ color: 'lightgray', margin: 10, color: '#000' }}>RS.{items.price}</Text>
        </View>
        <Text style={{ color: '#000', marginTop: 20, fontSize: 30 }}>Size</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
          <TouchableOpacity style={{ backgroundColor: '#fff', height: 40, width: 40, borderRadius: 20 }}><Text style={{ color: '#000', alignSelf: 'center', marginTop: 9 }}>XL</Text></TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#fff', height: 40, width: 40, borderRadius: 20 }}><Text style={{ color: '#000', alignSelf: 'center', marginTop: 9 }}>L</Text></TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#fff', height: 40, width: 40, borderRadius: 20 }}><Text style={{ color: '#000', alignSelf: 'center', marginTop: 9 }}>M</Text></TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#fff', height: 40, width: 40, borderRadius: 20 }}><Text style={{ color: '#000', alignSelf: 'center', marginTop: 9 }}>S</Text></TouchableOpacity>
        </View>
        <Text style={{ color: '#000', marginTop: 20, fontSize: 30 }}>Colors</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }} >
          <TouchableOpacity style={{ backgroundColor: '#F28293', height: 40, width: 40, borderRadius: 20 }}><Text style={{ color: '#F28293', alignSelf: 'center', marginTop: 5 }}>XL</Text></TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#97CBE2', height: 40, width: 40, borderRadius: 20 }}><Text style={{ color: '#97CBE2', alignSelf: 'center', marginTop: 5 }}>L</Text></TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#D77F4E', height: 40, width: 40, borderRadius: 20 }}><Text style={{ color: '#D77F4E', alignSelf: 'center', marginTop: 5 }}>M</Text></TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ backgroundColor: '#C85959', height: 70, width: '100%', marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Buying', { products: items })}><Text style={{ c: '#fff', alignSelf: 'center', fontWeight: 'bold', fontSize: 30, margin: 20 }}>ADD TO Cart</Text></TouchableOpacity>
      </View>

    </LinearGradient>
  )
}
export default Cart; var styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
});