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
