import Cookies from 'js-cookie';
import { IUser } from '../../../types';

export interface IData {}

export const setUserLocal = (data: IData) =>
  Cookies.set('user', JSON.stringify(data));

export const getUserLocal = (): IUser | null => {
  const userCookie = Cookies.get('user');

  if (!userCookie) return null;

  return JSON.parse(userCookie);
};

export const unsetUserLocal = () => Cookies.remove('user');
