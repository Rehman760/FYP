import { doc, setDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import { collection, getDocs } from 'firebase/firestore';

export const savePersonalInfo= async([selfData, bioData,fatherData, addressData, nationalityData])=>{
    const email = sessionStorage.getItem("email");
    const document = doc(db, "personalData", email);
    await setDoc(document, {selfData, bioData, fatherData});
    console.log("Data added");    
}

export const getOpportunities = async()=>{
    const oppCollectionRef = collection(db, "Opportunities");
    const querySnapshot = await getDocs(oppCollectionRef);
    const oppsList = [] ;
    querySnapshot.forEach((doc) => {
        var data = doc.data();
        oppsList.push(data);
    });
    return oppsList;
}