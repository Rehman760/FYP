import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import { collection, getDocs } from 'firebase/firestore';
// import { getMyEmail } from "../student/StudentNavbarData";

const email = 'hamza@iba-suk.edu.pk';

export const savePersonalInfo= async([selfData, bioData,fatherData, addressData, nationalityData])=>{
    // const email = getMyEmail();
    const document = doc(db, "students", email);
    const data = {selfData, bioData, fatherData, addressData, nationalityData};
    await setDoc(document, {personalInfo:data});
    console.log("Data added");
}

export const saveEducationInfo = async(data)=>{
    // const email = getMyEmail();
    const document = doc(db, 'students', email);
    await updateDoc(document, {educationInfo:data});
    console.log(data);
}

export const saveFamilyInfo = async(data)=>{
    // const email = getMyEmail();
    const document = doc(db, 'students', email);
    await updateDoc(document, {familyInfo:data});
    console.log(data);
}

export const saveExpenditureInfo = async(data)=>{
    // const email = getMyEmail();
    const document = doc(db, 'students', email);
    await updateDoc(document, {expenditureInfo:data});
    console.log(data);
}
export const saveOtherInfo = async(data)=>{
    // const email = getMyEmail();
    const document = doc(db, 'students', email);
    await updateDoc(document, {otherInfo:data});
    console.log(data);
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