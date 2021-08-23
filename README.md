# rn-tcomb-credit-card

Credit card form with tcomb for React native

<p align="center">
    <img src="kapture.gif" width="350" />
</p>

## Install

    yarn add rn-tcomb-credit-card

## Use

```JS
import CreditCardForm from 'rn-tcomb-credit-card';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CreditCardForm ref="form" />

        <TouchableOpacity
          onPress={() =>
            this.refs.form.submit(value => {
              console.log(value);
              /*
              {
                cardHolderName: "Yaşar İçli"
                cardNumber: "5890040000000016" // İyzico Test Kartı
                cvc: "111"
                expireMonth: "01"
                expireYear: "2021"
              }
              */
            })
          }>
          <Text>Gönder</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

```

## Default Options

```JS

{
  stylesheet: {}, // Tcomb default styles
  
  areaViewStyle: {}, // form area styles
  
  // form labels
  labels: {
      cardHolderName: 'Kart Üzerindeki İsim',
      cardNumber: 'Kart Numarası',
      expireMonth: 'Ay',
      expireYear: 'Yıl',
      cvc: 'Güvenlik (CVC) Kodu',
  },
  
  // form errors
  errors: {
      cardHolderNameRequired: 'Adınızı girin.',
      cardNumberRequired: 'Lütfen kredi kartı numaranızı giriniz',
      expireMonthRequired: 'Ay seçin',
      expireYearRequired: 'Yıl seçin',
      cvcRequired: 'Güvenlik kodunu girin.',
      noValidCardNumber: 'Lütfen geçerli bir kart numarası giriniz',
      noValidCvc: 'CVC kodu hatalı',
      noValidHolderName: 'Lütfen geçerli bir isim yazınız'
  },
  
  // handlers
  onChange(value) => {}, //  the event handler to be called when the value changes
}
```

## Call Functions

If you want to post the form and get errors or results, you will need to run the `submit()` function.

```JS

<CreditCardForm ref="form" />

// call submit() to get the values of the form
this.refs.submit((value) => {
    // values form
});

```
