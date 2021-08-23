# rn-tcomb-credit-card
Credit card form with tcomb for React native


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

