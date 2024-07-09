export const validateTitle = (str: string) => {
  if (!str || str.length < 1) {
    return 'Title is equired'
  } else if (!(/^[a-zA-ZА-Яа-яЁё]*$/.test(str))) {
    return 'Letters only'
  } else if (str.length > 12) {
    return 'Too long'
  }

  return true;
};

export const validateText = (str: string) => {
  if (!str || str.length < 1) {
    return 'Text is required'
  } else if (!(/^(?![\d+_@.-]+$)[a-zA-Z0-9.-]*$/.test(str))) {
    return 'Letters only'
  } else if (str.length > 200) {
    return 'Too long'
  }

  return true;
};

export const validateName = (str: string) => {
  if (!str || str.length < 1) {
    return 'Name is required'
  }

  if (!(/^[a-zA-ZА-Яа-яЁё]*$/.test(str))) {
    return 'Name is not valid'
  }

  if (str.length > 14) {
    return 'Name is too long'
  }

  return true;
};

export const validateEmail = (str: string) => {
  if (!str || str.length < 1) {
    return 'Email is required'
  }

  if (!(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(str.toLowerCase()))) {
    return 'Email is not valid';
  }

  return true;
};

export const validatePassword = (str: string) => {
  if (!str || str.length < 1) {
    return 'Password is required'
  }

  if (str.length < 8 || str.length > 20) {
    return 'Password must be 8 - 20 symbols'
  }

  if (!(/[a-z]/.test(str.toLowerCase()))) {
    return 'Password must contain a letter';
  }

  if (!(/[A-Z]/.test(str))) {
    return 'Password must contain at least one big letter';
  }

  if (!(/[0-9]/.test(str))) {
    return 'Password must contain a number';
  }

  return true;
};
