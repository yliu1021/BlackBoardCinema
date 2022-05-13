import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfyff0YYmcX8kF5hpeDbirqUoefqP49AI",
  authDomain: "blackboardcinema-b3f96.firebaseapp.com",
  projectId: "blackboardcinema-b3f96",
  storageBucket: "blackboardcinema-b3f96.appspot.com",
  messagingSenderId: "264791832766",
  appId: "1:264791832766:web:42882c7bb23cedac28c6ef"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const ratingsCollection = collection(db, "ratings");

export function subscribeRatings(callback) {
  const unsubscribe = onSnapshot(ratingsCollection, (collectionSnapshot) => {
    const ratings = [];
    collectionSnapshot.forEach(docSnapshot => {
      const rating = docSnapshot.data();
      ratings.push({
        id: docSnapshot.id,
        ...rating
      });
    });
    callback(ratings);
  });
  return unsubscribe;
}

export async function sendRating(rating) {
  await addDoc(ratingsCollection, rating);
}
