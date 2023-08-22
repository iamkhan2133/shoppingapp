import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const Myinfo = () => {
  return (
    <LinearGradient colors={['#FEECF0', '#FCF6F7']} style={styles.linearGradient}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ height: 50, width: 50, backgroundColor: '#fff', borderRadius: 30, marginTop: 50 }}>
            <TouchableOpacity><Image style={{ height: 20, width: 20, marginTop: 13, marginLeft: 12, tintColor: '#F38181' }} source={require("../assets/images/dots-menu.png")} /></TouchableOpacity>

          </View>
          <View style={{ height: 50, width: 50, backgroundColor: '#fff', borderRadius: 30, marginTop: 50 }}>
            <TouchableOpacity><Image style={{ height: 20, width: 20, marginTop: 14, marginLeft: 13 }} source={require("../assets/images/user.png")} /></TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}
export default Myinfo;
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});