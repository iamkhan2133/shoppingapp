import React, { useState, useEffect } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, StyleSheet, Button, FlatList } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
const Home = ({ navigation }) => {
  useEffect(() => {
    networkCall()
    getCategory()
  }, [])
  const [search, setSearch] = useState('')
  const [Product, setProducts] = useState([])
  const [categories, setCategories] = useState([])



  const networkCall = async () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => [setProducts(json),
      console.log('====== Api Data =====>', json)])
  }

  const getCategory = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => [console.log(json), setCategories(json)])
  }

  // const addProduct = () => {
  //   try {
  //     fetch('https://fakestoreapi.com/products', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         name: 'Test'
  //       }
  //       )
  //     })
  //       .then(res => res.json())
  //       .then(json => console.log('++++++++>', json))
  //   } catch (error) {
  //     console.log('======= Error', error)
  //   }

  // }

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#FEECF0', '#FCF6F7']} style={styles.linearGradient}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ height: 50, width: 50, backgroundColor: '#fff', borderRadius: 30, marginTop: 10 }}>
            <TouchableOpacity><Image style={{ height: 20, width: 20, marginTop: 13, marginLeft: 12, tintColor: '#F38181' }} source={require("../assets/images/dots-menu.png")} /></TouchableOpacity>
          </View>
          <View style={{ height: 50, width: 50, backgroundColor: '#fff', borderRadius: 30, marginTop: 10 }}>
            <TouchableOpacity><Image style={{ height: 20, width: 20, marginTop: 14, marginLeft: 13 }} source={require("../assets/images/user.png")} /></TouchableOpacity>
          </View>
        </View>

        <Text style={{ fontSize: 30, fontWeight: 300, color: '#000', marginLeft: 20, marginTop: 10 }}>Match your style</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, marginBottom: 10, backgroundColor: '#fff', alignSelf: 'center', width: "97%", borderRadius: 20 }}>
          <TouchableOpacity
            style={{ borderRadius: 50, marginRight: 10, alignItems: 'center', marginTop: 15 }}
            onPress={() => navigation.navigate('home')}><Icon name='search1' size={20} color={'black'} />
          </TouchableOpacity>
          <TextInput
            style={{ backgroundColor: 'white', borderRadius: 20, color: '#000', width: '85%' }}
            value={search}
            onChangeText={setSearch}
            placeholder="Search dress"
            placeholderTextColor={'grey'} />
        </View>
        <FlatList
          data={categories}
          horizontal={true}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ backgroundColor: '#F38181', width: 85, borderRadius: 10, height: 30, margin: 10,marginBottom:12 }} ><Text style={{ paddingVertical: 5, alignSelf: 'center' }}>{item}</Text></TouchableOpacity>
            )
          }}
        />
        <FlatList
          data={Product}
          numColumns={2}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) =>
            <TouchableOpacity on onPress={() => navigation.navigate('Cart', { items: item })}>
              <View style={{ margin: 10 }} >
                <Image source={{ uri: (item.image) }} style={{ height: 250, width: 160, borderRadius: 30 }} />
              </View>
              <Text numberOfLines={1} style={{ color: '#000', fontSize: 13, width: 90, marginLeft: 20 }}>{item.title}</Text>
              <Text style={{ color: 'darkgray', marginLeft: 19 }} >{item.price}</Text>
            </TouchableOpacity>
          }
        />
      </LinearGradient>
    </View>
  )
}
export default Home;
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
});