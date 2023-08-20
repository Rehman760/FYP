import { doc, setDoc, updateDoc, query, onSnapshot, deleteDoc, where, getDoc } from "firebase/firestore";
import { db, storage } from "./FirebaseConfig";
import { collection, getDocs, getCountFromServer } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import SponsoredStudent from "../donor/SponsoredStudents";
// import { getMyEmail } from "../student/StudentNavbarData";

let email = '';

export const saveEmail = (myemail)=>{
    email = myemail;
}

export const savePersonalInfo = async ([selfData, bioData, fatherData, addressData, nationalityData], email) => {
    // const email = getMyEmail();
    const document = doc(db, "students", email);
    const data = { selfData, bioData, fatherData, addressData, nationalityData };
    await setDoc(document, { personalInfo: data }, {merge:true});
    console.log("Data added");
}

export const saveProfileImage = async (image, email) => {
    const imageRef = ref(storage, `images/profiles/${email}`);
    await uploadBytes(imageRef, image).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(`set profile ${err}`);
    });
}

export const getProfileImage = async (email, setUrl) => {
    const imageRef = ref(storage, `images/profiles/${email}`);
    await getDownloadURL(imageRef).then((response) => {
        setUrl(response);
    }).catch((err) => {
        console.log(`get profile ${err}`);
    });

}

export const saveEducationInfo = async (data, email) => {
    // const email = getMyEmail();
    const document = doc(db, 'students', email);
    await updateDoc(document, { educationInfo: data });
    console.log(data);
}

export const saveFamilyInfo = async (data, email) => {
    // const email = getMyEmail();
    const document = doc(db, 'students', email);
    await updateDoc(document, { familyInfo: data });
    console.log(data);
}

export const saveExpenditureInfo = async (data, email) => {
    // const email = getMyEmail();
    const document = doc(db, 'students', email);
    await updateDoc(document, { expenditureInfo: data });
    console.log(data);
}
export const saveOtherInfo = async (data, email) => {
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
    const q = query(collection(db, "students"));
    await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
        const students = [];
        let id= 1;
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const { personalInfo } = doc.data();
            const name = personalInfo?.selfData?.name;
            const { educationInfo } = doc.data();
            const schoolName = educationInfo?.schoolName;
            const gradYear = educationInfo?.graduationYear;
            const student = { id, name, schoolName, gradYear, city:'Larkana', email: doc.id };
            console.log(doc.id, " => ", doc.data());
            id++;
            students.push(student);
        });
        setStudents(students);
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

export const getFormData = async(email, setFormData)=>{
    const docRef = doc(db, "students", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data())
        setFormData(docSnap.data())
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

}

export const saveDonorData = async (donor)=>{
    const document = doc(db, 'donors', email);
    await setDoc(document, donor);
}

export const getProfileData = async (email, setProfile)=>{
    const document = doc(db, 'students', email);
    onSnapshot(document, (document)=>{
        setProfile(document.data());
    })
}
export const saveSponsoredStudent = async(donorEmail, stdEmail, stdDoc)=>{
    stdDoc['sponsoredBy'] = donorEmail;
    // console.log(stdDoc);
    const document = doc(db, 'sponsored', stdEmail);
    await setDoc(document, stdDoc).then((res)=>{
        const delDoc = async(mail)=>{
            await deleteDoc(doc(db, "students", mail));
        }
        delDoc(stdEmail);
        
    }).catch((err)=>console.log(err));
}

export const getStudentsDonated = async(donorEmail, setSponsoredStudent)=>{

    const sponosredRef = collection(db, "sponsored");
    const q = query(sponosredRef, where("sponsoredBy", "==", donorEmail));
    const querySnapshot = await getDocs(q);
    const studentsSponsored = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data();
        const name = data?.personalInfo?.selfData?.name;
        const schoolName = data?.educationInfo?.schoolName;
        const program = data?.educationInfo?.degree +" "+ data?.educationInfo?.fieldOfStudy;
        const student = { name, schoolName, program, status:"approved" };
        studentsSponsored.push(student);
        console.log('call me '+donorEmail);
        if(studentsSponsored.length === 1){
            setSponsoredStudent(studentsSponsored);
        }        
        console.log(doc.id, " : ", data);
    });
}

export const saveProfile = async(data, email, setLoading)=>{
    console.log(data);
    console.log(email);
    setLoading(true);
    if(data?.profileImage !== undefined){
        saveProfileImage(data?.profileImage, email);
    }
    delete data?.profileImage
    const document = doc(db, 'users', email);
    await setDoc(document, data).then((res)=>{
        alert('Data is updated');
        console.log('Data is updated');
    }).catch(err=>console.log(err.message))
    setLoading(false);
}

export const getProfile = async(email, setProfile)=>{
    const document = doc(db, 'users', email);
    await getDoc(document).then((res)=>{
        console.log(res.data());
        setProfile(res.data());
    }).catch((err)=>console.log(err));

    // if (docSnap.exists()) {
    //     return docSnap.data();
    // } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    // }

}
export const loginUser = async(email, setLogin)=>{
    const document = doc(db, 'users', email);
    await getDoc(document).then((res)=>{
        if(res.data() !== undefined){
            setLogin(res.data().userType);
        }
        else{
            setLogin(null);
        }

    }).catch((err)=>{})


}
