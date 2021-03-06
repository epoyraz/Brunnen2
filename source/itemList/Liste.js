import React, { Component } from "react"
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

var data = require('../../data/brunnen.json');

export default class Liste extends Component {

  elementClicked= () => {
    console.log( 'blub ')
    this.props.navigation.push('detail')
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          </View>
          <FlatList
            data={data.features}
            showsVerticalScrollIndicator={false}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            renderItem={({ item }) => 
            
            <View style={styles.container}>
            <TouchableOpacity onPress={() => this.elementClicked()}>
                <View style={styles.flatview}>         
                  <Image style={styles.itemImage}
                    source={{ uri: "https://www.suedtirolerland.it/images/cms/100x100/1309185237D_IMG_6024_Brunnen_dreiQuellen.JPG" }}>
                  </Image>
                  <View style={styles.itemText} >
                    <Text numberOfLines={2} style={styles.nameText}>{item.properties.bezeichnung ? item.properties.bezeichnung : 'Brunnen'}</Text>
                    <Text style={styles.baujahrText}>{item.properties.historisches_baujahr ? item.properties.historisches_baujahr : 'Baujahr unbekannt'}</Text>
                    <Text style={[styles.wasserText, item.properties.wasserart_txt == 'Verteilnetz' ? styles.verteilernetzText : styles.quellwasserText]}>
                      {item.properties.wasserart_txt}
                    </Text>
                  </View>
                  <Text style={styles.abstandText}>{item.geometry.distance} m</Text>
                </View>
                </TouchableOpacity>
            </View>
            }
            keyExtractor={item => item.properties.objectid.toString()} />
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
  },
  itemImage: {
    width: 100,
    height: 100,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  itemText: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10
  },
  iImage: {
    width: 30,
    height: 30,
    tintColor: '#313131',
    marginRight: 10,
    maxWidth: 10
  },
  abstandText: {
    color: '#9E9E9E',
    fontFamily: 'fira-sans-light',
    fontSize: 15,
    marginRight: 15,
    marginTop: 50
  },
  nameText: {
    fontFamily: 'fira-sans-bold',
    fontSize: 18,
    color: '#313131'

  },
  baujahrText: {
    fontFamily: 'fira-sans-light',
    fontSize: 15,
    color: '#313131'

  },
  wasserText: {
    fontFamily: 'fira-sans-light',
    fontSize: 15,

  },
  verteilernetzText: {
    color: '#FF9100'
  },
  quellwasserText: {
    color: '#199BFF'
  },
  tempNav: {
    width: 100 + '%',
    height: 74,
    backgroundColor: '#6ACCFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flatview: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 6,
    borderWidth: 0.75,
    borderColor: '#FF8000',
    marginTop: 15,
    marginLeft: 5 + '%',
    marginRight: 5 + '%'
  },
});
