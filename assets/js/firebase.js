// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAyXyYHnIPPLw_y1s1dLax6nYewmVuoChg",
  authDomain: "projeto-pizzaria-caracas.firebaseapp.com",
  projectId: "projeto-pizzaria-caracas",
  storageBucket: "projeto-pizzaria-caracas.firebasestorage.app",
  messagingSenderId: "549987597167",
  appId: "1:549987597167:web:fea031540c451b9c50869a",
  measurementId: "G-3T95VY3DZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const uploadImage = async (image, name) => {
    const storage = getStorage(app);

    const mountainsRef = ref(storage, `pizza/${name}.jpg`);
    
    await uploadBytes(mountainsRef, image)

    return await getDownloadURL(mountainsRef)   
}

export {
  uploadImage
}