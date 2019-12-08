import {OPTION_SELECT_FIELD} from '../constants';
export const isRequired = value => !value && 'Este campo es requerido';

export const isRequiredSelect = value =>
  (!value || value === OPTION_SELECT_FIELD) &&
  value !== 0 &&
  'Este campo es requerido';

export const isRequiredPhone = value => {
  if (value) {
    return value.length <= 2 && 'Este campo es requerido';
  } else return 'Este campo es requerido';
};

export const isNumber = value =>
  isNaN(Number(value)) && 'Este campo debe ser numerico';

export const toNumber = value => value && Number(value);

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Debe ser un campo alfanumerico'
    : undefined;

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Numero invalido  de telefono debe tener al menos 10 digitos'
    : undefined;
