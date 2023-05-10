import { doc, setDoc, updateDoc, query, onSnapshot } from "firebase/firestore";
import { db, storage } from "./FirebaseConfig";
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { getMyEmail } from "../student/StudentNavbarData";

const email = 'sajjad@muet.edu.pk';

export const savePersonalInfo = async ([selfData, bioData, fatherData, addressData, nationalityData]) => {
    // const email = getMyEmail();
    const document = doc(db, "students", email);
    const data = { selfData, bioData, fatherData, addressData, nationalityData };
    await setDoc(document, { personalInfo: data });
    console.log("Data added");
}

export const saveProfileImage = async (image) => {
    const imageRef = ref(storage, `images/profiles/${email}`);
    await uploadBytes(imageRef, image).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(`set profile ${err}`);
    });
}

export const getProfileImage = async (setUrl) => {
    const imageRef = ref(storage, `images/profiles/${email}`);
    await getDownloadURL(imageRef).then((response) => {
        setUrl(response);
    }).catch((err) => {
        console.log(`get profile ${err}`);
    });

}

export const saveEducationInfo = async (data) => {
    // const email = getMyEmail();
    const document = doc(db, 'students', email);
    await updateDoc(document, { educationInfo: data });
    console.log(data);
}

export const saveFamilyInfo = async (data) => {
    // const email = getMyEmail();
    const document = doc(db, 'students', email);
    await updateDoc(document, { familyInfo: data });
    console.log(data);
}

export const saveExpenditureInfo = async (data) => {
    // const email = getMyEmail();
    const document = doc(db, 'students', email);
    await updateDoc(document, { expenditureInfo: data });
    console.log(data);
}
export const saveOtherInfo = async (data) => {
    // const email = getMyEmail();
    const document = doc(db, 'students', email);
    await updateDoc(document, { otherInfo: data });
    console.log(data);
}

export const getOpportunities = async () => {
    const oppCollectionRef = collection(db, "Opportunities");
    const querySnapshot = await getDocs(oppCollectionRef);
    const oppsList = [];
    querySnapshot.forEach((doc) => {
        var data = doc.data();
        oppsList.push(data);
    });
    return oppsList;
}

export const getAllStudents = async (setStudents) => {
    console.log('Started');
    const q = query(collection(db, "students"));
    
    const querySnapshot = await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
        const students = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const email = doc.id;
            const { personalInfo } = doc.data();
            const name = personalInfo?.selfData?.name;
            const fatherName = personalInfo?.fatherData?.fatherName;
            const { educationInfo } = doc.data();
            const schoolName = educationInfo?.schoolName;
            const gradYear = educationInfo?.graduationYear;
            const student = { email, name, fatherName, schoolName, gradYear };
            getImage(email, function(imageUrl){
                student['imageUrl'] = imageUrl;
                students.push(student);
                if(students.length === 4){
                    setStudents(students);
                }
            })  
            
            // console.log(doc.id, " => ", doc.data());
        });

        
    });
}

export const getImage = async (email, setUrl) => {
    const imageRef = ref(storage, `images/profiles/${email}`);
    await getDownloadURL(imageRef).then((response) => {
        setUrl(response);
    }).catch((err) => {
        console.log(`get profile ${err}`);
    });

}