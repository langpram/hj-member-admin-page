import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDrNlLEx0jDqS3iyVyiX6ewxpwpdG8L9_8',
  authDomain: 'hjkarpet-member.firebaseapp.com',
  projectId: 'hjkarpet-member',
  storageBucket: 'hjkarpet-member.firebasestorage.app',
  messagingSenderId: '609849959523',
  appId: '1:609849959523:web:0d562cfb1ef6dd15bd0456',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const adminEmail = 'admin@hjkarpet.com';
export const auth = getAuth(app);
export const firestore = getFirestore(app);
