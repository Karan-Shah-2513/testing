import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import pdf from "./2020400048-Karan-Shah-TEIT-C-Expt2.pdf"
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
var firebaseConfig = {
    apiKey: "AIzaSyCslMNF1XlXLyblNIp_VNUmXTFlQXFSLQQ",
    authDomain: "admission-portal-76c75.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://admission-portal-76c75.firebaseio.com",
    projectId: "admission-portal-76c75",
    storageBucket: "admission-portal-76c75.appspot.com",
  
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    measurementId: "G-MEASUREMENT_ID",
  };

function put()
{
    const app = initializeApp(firebaseConfig);
    
    
    // Initialize Cloud Storage and get a reference to the service
    const storage = getStorage(app);
    storage.put(pdf);
}
export default function Upload(){
    
    return <button onClick={put}>Upload</button>;

}
// Initialize Firebase