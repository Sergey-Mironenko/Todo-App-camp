import * as React from 'react';

import { labelStyles, phoneLabelStyles, tabletLabelStyles,
  inputStyles, phoneInputStyles, tabletInputStyles, rowInputStyles, errorInputStyles,
  containerStyles, rowContainerStyles } from './field.styles';
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
      containerStyles,
      { [rowContainerStyles]: row },
    )}>
      <label
        htmlFor={name}
        className={classNames(
          labelStyles,
          { [phoneLabelStyles]: onPhone},
          { [tabletLabelStyles]: onTablet && !onPhone},
        )}
      >
        {label ? label : `${name[0].toUpperCase()}${name.slice(1)}:`}
      </label>

     {name === 'text' ? (
      <textarea
        className={classNames(
          inputStyles,
          { [rowInputStyles]: row },
          { [phoneInputStyles]: onPhone },
          { [tabletInputStyles]: onTablet && !onPhone },
          { [errorInputStyles]: errors[name] ? true : false },
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
          inputStyles,
          { [rowInputStyles]: row },
          { [phoneInputStyles]: onPhone },
          { [tabletInputStyles]: onTablet && !onPhone },
          { [errorInputStyles]: errors[name] ? true : false },
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
