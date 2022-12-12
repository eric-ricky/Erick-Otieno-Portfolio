import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDERID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { auth };

export const getFirebaseClient = async () => {
  const firebaseAuth = await import('firebase/auth');
  const firebaseStorage = await import('firebase/storage');
  const firebaseFirestore = await import('firebase/firestore');

  const db = firebaseFirestore.getFirestore(app);
  const storage = firebaseStorage.getStorage(app);
  const provider = new firebaseAuth.GoogleAuthProvider();
  const onAuthStateChanged = firebaseAuth.onAuthStateChanged;
  const signInWithPopup = firebaseAuth.signInWithPopup;
  const signInWithCredential = firebaseAuth.signInWithCredential;
  const GoogleAuthProvider = firebaseAuth.GoogleAuthProvider;
  const signOut = firebaseAuth.signOut;
  const serverTimestamp = firebaseFirestore.serverTimestamp;
  const doc = firebaseFirestore.doc;
  const collection = firebaseFirestore.collection;
  const query = firebaseFirestore.query;
  const limit = firebaseFirestore.limit;
  const orderBy = firebaseFirestore.orderBy;
  const startAfter = firebaseFirestore.startAfter;
  const where = firebaseFirestore.where;
  const getDoc = firebaseFirestore.getDoc;
  const getDocs = firebaseFirestore.getDocs;
  const setDoc = firebaseFirestore.setDoc;
  const addDoc = firebaseFirestore.addDoc;
  const updateDoc = firebaseFirestore.updateDoc;
  const deleteDoc = firebaseFirestore.deleteDoc;
  const getDownloadURL = firebaseStorage.getDownloadURL;
  const ref = firebaseStorage.ref;
  const uploadBytesResumable = firebaseStorage.uploadBytesResumable;
  const deleteObject = firebaseStorage.deleteObject;

  return {
    db,
    provider,
    storage,
    onAuthStateChanged,
    signInWithPopup,
    signInWithCredential,
    GoogleAuthProvider,
    signOut,
    serverTimestamp,

    doc,
    collection,
    query,
    limit,
    orderBy,
    startAfter,
    where,
    getDoc,
    getDocs,
    setDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    getDownloadURL,
    ref,
    uploadBytesResumable,
    deleteObject,
  };

  // const db = getFirestore(app);
  // const auth = getAuth(app);
  // const provider = new GoogleAuthProvider();
  // const storage = getStorage(app);
};
