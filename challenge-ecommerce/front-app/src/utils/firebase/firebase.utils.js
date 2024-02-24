import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhJUut_T0_7OZ5vjdwQS_KzQqhd4Mxe80",
  authDomain: "crwn-db-1f235.firebaseapp.com",
  projectId: "crwn-db-1f235",
  storageBucket: "crwn-db-1f235.appspot.com",
  messagingSenderId: "987751716039",
  appId: "1:987751716039:web:e101132a12579cd1245ae2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done!");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

//? CAN CONFIG DIFERENT PROVIDERS (FACEBOOK, GOOGLE, GITHUB, ETC)
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

//? TWO DIFERENT WAYS TO LOGIN WITH GOOGLE (REDIRECT & POPUP)

//---------------------
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
//--------------------

//? THIS PART IS THE SAME FOR REDIRECT OR POPUP

export const db = getFirestore();

export const createUserFromAuth = async (UserAuth, additionalInfo) => {
  const userDocRef = doc(db, "users", UserAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //? SEACHES FOR THE USER IN THE DB IF IT DOESN'T FIND IT THE DOCUMENT IS CREATED
  if (!userSnapshot.exists()) {
    const {displayName, email} = UserAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
