import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import CreditCardForm from 'rn-tcomb-credit-card';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CreditCardForm ref="form" />

        <TouchableOpacity
          onPress={() =>
            this.refs.form.submit(value => {
              console.log(value);
            })
          }>
          <Text>Gönder</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
