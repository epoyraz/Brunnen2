import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity
} from 'react-native';

export default class Detail extends Component {
  constructor() {
    super()
    this.state = {
        screenWidth: Dimensions.get("window").width,
    };
}

elementClicked= (item) => {
  this.props.navigation.navigate('Map', {info : item})
}

  render() {
    const imageHeight = Math.floor(this.state.screenWidth);
    const { navigation } = this.props;
    var item = navigation.getParam('info', 'NO-ID');
    console.log(item);

    return (
      
<ScrollView>
      <View style={styles.rowview}>
        <Image style={{width: 100 + '%', height: imageHeight }} source={{ uri: "https://www.zb.uzh.ch/Medien/spezialsammlungen/Turicensia/Ausstellungen/HirsebreiHueppenHosechnoepf/Quiz-Bilder/frage_14_froschauerbrunnen.jpg" }}></Image>
        <View style={styles.buttonView}>
        <Button
          onPress={() => this.elementClicked(item)}
          title='zur Karte'
          color= '#FF9100'
          />
          </View>
        <View style={styles.borderview}>
        <Text numberOfLines={2} style={styles.nameText}>{item.properties.bezeichnung ? item.properties.bezeichnung : 'Brunnen'}</Text>
        <View style={styles.columnview}>
        <Text style={styles.baujahrText}>{item.properties.historisches_baujahr ? item.properties.historisches_baujahr : 'Baujahr unbekannt'}</Text>
        <Text style={[styles.wasserText, item.properties.wasserart_txt == 'Verteilnetz' ? styles.verteilernetzText : styles.quellwasserText]}>
                {item.properties.wasserart_txt}
              </Text>
        <Text style={styles.abstandText}>{item.geometry.distance}m</Text>
        </View>
        <Text style={styles.artikelText}>{item.properties.text ? item.properties.text : 'Dieser Brunnen enthält leider keine weiteren Informationen.'}</Text>
        </View>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  itemText: {
    flex: 1,
  },
  abstandText: {
    color: '#9E9E9E',
    fontFamily: 'fira-sans-light',
    fontSize: 20,
  },
  nameText: {
    fontFamily: 'fira-sans-bold',
    fontSize: 30,
    color: '#313131',
    alignSelf: 'center',
  },
  artikelText: {
    fontFamily: 'fira-sans-regular',
    fontSize: 20,
    color: '#313131',
    marginTop: 15,
    marginLeft: 5 +'%',
    marginRight: 5 +'%'
  },
  baujahrText: {
    fontFamily: 'fira-sans-light',
    fontSize: 20,
    color: '#313131'

  },
  wasserText: {
    fontFamily: 'fira-sans-light',
    fontSize: 20,
  },
  verteilernetzText: {
    color: '#FF9100'
  },
  quellwasserText: {
    color: '#199BFF'
  },
  rowview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  columnview: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft: 5 +'%',
    marginRight: 5 +'%'
  },
  borderview: {
    // borderTopWidth: 2,
    // borderTopColor: '#FF9100'
  },
  buttonView: {
    marginBottom: 5,
  },
});