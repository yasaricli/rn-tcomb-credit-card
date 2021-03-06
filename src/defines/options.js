import React, {Component} from 'react';
import {View, Text} from 'react-native';

// styles
import Styles from '../styles/sheet';
import Boost from '../styles/boost';

export default ({stylesheet, labels, errors, helpers }) => {
  return {
    stylesheet,
    
    template({inputs}) {
      return (
        <View style={Styles.templateView}>
          <View style={Styles.templateLineView}>
            <View style={Styles.templateLineInput}>
              {inputs.cardHolderName}
            </View>
          </View>

          <View style={Styles.templateLineView}>
            <View style={Styles.templateLineInput}>{inputs.cardNumber}</View>
          </View>

          <View style={Styles.templateLineView}>
            <View style={[Styles.templateLineMiddleInput, Boost.mr3]}>
              {inputs.expireMonth}
            </View>

            <View style={[Styles.templateLineMiddleInput, Boost.mr3]}>
              {inputs.expireYear}
            </View>
            <View style={[Styles.templateLineInput, Boost.ml30]}>
              {inputs.cvc}
            </View>
          </View>
        </View>
      );
    },

    fields: {
      cardHolderName: {
        label: labels.cardHolderName,
        autoFocus: true,
        help: helpers.cardHolderNameHelper
      },

      cardNumber: {
        label: labels.cardNumber,
        placeholder: '---- ---- ---- ----',
        help: helpers.cardNumberhelper
      },

      expireMonth: {
        label: labels.expireMonth,
        error: errors.expireMonthRequired,
        order: 'asc',
        help: helpers.expireMonthHelper
      },

      expireYear: {
        label: labels.expireYear,
        error: errors.expireYearRequired,
        order: 'asc',
        help: helpers.expireYearHelper
      },

      cvc: {
        label: labels.cvc,
        help: helpers.cvcHelper
      },
    },
  };
};
