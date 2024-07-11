import { Status } from './types';
import { Privacy } from './types';

const buildResult = (str: string) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const validateStatus = (str: string) => {
  if (!Status[str]) {
    return null;
  }
  
  return buildResult(Status[str]);
};

export const validatePrivacy = (str: string) => {
  if (!Privacy[str]) {
    return null;
  }

  return buildResult(Privacy[str]);
};
