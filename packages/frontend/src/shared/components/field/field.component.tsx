import * as React from 'react';

import { labelStyles, inputStyles, containerStyles } from './field.styles';
import classNames from 'classnames';

type Props = {
  name: string,
  type: string,
  errors: any,
  validate?: (str: string) => string | boolean,
  register: any,
  clearErrors: any,
  setMessages: any,
  messages: string[],
  required?: boolean,
  onPhone?: boolean,
  onTablet?: boolean,
  row?: boolean,
  label?: string,
}

const FormField: React.FunctionComponent<Props> = ({
  name,
  type,
  errors,
  validate,
  register,
  clearErrors,
  setMessages,
  messages,
  required = true,
  onPhone = false,
  onTablet = false,
  row = false,
  label = '',
}) => {
  return (
    <div className={classNames(
      containerStyles(row)
    )}>
      <label
        htmlFor={name}
        className={classNames(
          labelStyles(onPhone, onTablet && !onPhone)
        )}
      >
        {label ? label : `${name[0].toUpperCase()}${name.slice(1)}:`}
      </label>

     {name === 'text' ? (
      <textarea
        className={classNames(
          inputStyles(row, onPhone, onTablet && !onPhone, errors[name] ? true : false)
        )}
        type={type}
        {...register(name, { required, validate})}
        onChange={() => {
          clearErrors(name);
          setMessages(messages.filter(message => !(message.toLowerCase().includes(name))));
        }}
      />
     ) : (
      <input
        className={classNames(
          inputStyles(row, onPhone, onTablet && !onPhone, errors[name] ? true : false)
        )}
        type={type}
        {...register(name, { required, validate})}
        onChange={() => {
          clearErrors(name);
          setMessages(messages.filter(message => !(message.toLowerCase().includes(name))));
        }}
      />
     )} 
    </div>      
  );
};

export default FormField;
