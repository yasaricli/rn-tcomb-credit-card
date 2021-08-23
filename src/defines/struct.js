import t from 'tcomb-form-native';
import moment from 'moment';
import valid from 'card-validator';

const initialDate = moment().startOf('year');

const dateOf = (length, name, format) => {
  return Array.from({length}, (e, i) => {
    return moment(initialDate).add(i, name).format(format);
  });
};

const validationError = (field, noValid, required) => {
  return (field.getValidationErrorMessage = value => {
    if (value) {
      return noValid;
    }
    return required;
  });
};

// fields
const Month = t.enums.of(dateOf(12, 'months', 'MM'));
const Year = t.enums.of(dateOf(79, 'years', 'YYYY'));

const HolderName = t.refinement(t.String, s => {
  return valid.cardholderName(s).isValid;
});

const CardNumber = t.refinement(t.String, s => {
  return valid.number(s).isValid;
});

const Cvc = t.refinement(t.String, s => {
  return valid.cvv(s).isValid;
});

export default ({errors}) => {

  // set errors
  validationError(HolderName, errors.noValidHolderName, errors.cardHolderNameRequired);
  validationError(CardNumber, errors.noValidCardNumber, errors.cardNumberRequired);
  validationError(Cvc, errors.noValidCvc, errors.cvcRequired);

  return t.struct({
    cardHolderName: HolderName,
    cardNumber: CardNumber,
    expireMonth: Month,
    expireYear: Year,
    cvc: Cvc,
  });
};
