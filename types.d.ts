import { DocumentData, QuerySnapshot } from 'firebase/firestore';

declare module '@heroicons/*';

export type IResData = {
  success: boolean;
  data?: QuerySnapshot<DocumentData>;
  message?: string;
};

export interface IAlert {
  message: string;
  severity: string;
}

export interface IUser {
  uid: string;
  displayName: string;
  email: string | null;
  photoURL: string;
  phone: string;
  createdAt: string | undefined;
}

export interface IListing {
  _id: string;
  sellerId: string;
  sellerInfo: {
    phone: string;
    email: string;
  };
  category: string;
  currency: string;
  description: string;
  price: string;
  rating: string;
  title: string;
  screenshots: string[] | [];
  impressions: number;
  createdAt: Date;
}
