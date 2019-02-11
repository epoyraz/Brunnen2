import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';

export default class InfoStack extends Component {

  constructor() {
    super()
    this.state = {
        screenWidth: Dimensions.get("window").width
    };
}

  render() {
    const imageHeight = Math.floor(this.state.screenWidth);

    return (
      <Text>Hi</Text>
    )}
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
    color: '#FF9100'
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
    borderTopWidth: 2,
    borderTopColor: '#FF9100'
  },
});