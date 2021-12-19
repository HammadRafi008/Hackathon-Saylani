import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadString,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC3VYepx9hFi8bbEycQT2Xuy8Q-uYUrLTk",
  authDomain: "saylani-hackathon-bede8.firebaseapp.com",
  projectId: "saylani-hackathon-bede8",
  storageBucket: "saylani-hackathon-bede8.appspot.com",
  messagingSenderId: "64823035415",
  appId: "1:64823035415:web:98e42a8728c8fe35bbfe52"
});

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  onSnapshot,
  storage,
  ref,
  uploadBytes,
  uploadString,
  uploadBytesResumable,
  getDownloadURL,
};
