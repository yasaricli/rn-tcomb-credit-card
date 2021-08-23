import React, {Component} from 'react';
import {View} from 'react-native';
import t from 'tcomb-form-native';

// defines
import Options from './defines/options';
import Struct from './defines/struct';

// styles
import Styles from './styles/sheet';

const Form = t.form.Form;

const LABELS = {
  cardHolderName: 'Kart Üzerindeki İsim',
  cardNumber: 'Kart Numarası',
  expireMonth: 'Ay',
  expireYear: 'Yıl',
  cvc: 'Güvenlik (CVC) Kodu',
};

const ERRORS = {
  cardHolderNameRequired: 'Adınızı girin.',
  cardNumberRequired: 'Lütfen kredi kartı numaranızı giriniz',
  expireMonthRequired: 'Ay seçin',
  expireYearRequired: 'Yıl seçin',
  cvcRequired: 'Güvenlik kodunu girin.',
  noValidCardNumber: 'Lütfen geçerli bir kart numarası giriniz',
  noValidCvc: 'CVC kodu hatalı',
  noValidHolderName: 'Lütfen geçerli bir isim yazınız'
};

export default class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  componentDidMount() {
    const {initialValue} = this.props;

    if (initialValue) {
      this.setState({
        value: initialValue,
      });
    }
  }

  onChange(value) {
    const {onChange} = this.props;

    // change value
    this.setState({value}, () => {
      
      // onchange pass data callback
      onChange && onChange(value);
    });
  }

  submit(callback) {
    const value = this.refs.form.getValue();

    return callback(value);
  }

  render() {
    const {stylesheet, areaViewStyle = {}, labels = {}, errors = {}} = this.props;
    const arg = {

      // default styles
      stylesheet,

      labels: {
        ...LABELS,
        ...labels,
      },

      errors: {
        ...ERRORS,
        ...errors,
      },
    };

    return (
      <View style={[Styles.areaView, areaViewStyle]}>
        <Form
          ref="form"
          value={this.state.value}
          type={Struct(arg)}
          options={Options(arg)}
          onChange={this.onChange.bind(this)}
        />
      </View>
    );
  }
}
