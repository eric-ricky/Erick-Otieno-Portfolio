import { DocumentData, DocumentReference, setDoc } from 'firebase/firestore';
import Router from 'next/router';
import { IUser } from '../../../types';

export const createUser = async (
  ref: DocumentReference<DocumentData>,
  payload: IUser
) => {
  console.log('creating new user...');

  await setDoc(ref, payload, { merge: true });

  Router.reload();
};
