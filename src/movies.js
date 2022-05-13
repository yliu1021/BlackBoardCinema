import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

export async function getMovies() {
  const docs = await getDocs(collection(db, "movies"));
  let movies = [];
  docs.forEach(snapshot => {
    const movie = snapshot.data();
    movies.push({
      id: snapshot.id,
      ...movie
    });
  });
  return movies
}
