import { doc, setDoc, updateDoc, query, onSnapshot, deleteDoc, where, getDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db, storage } from "./FirebaseConfig";
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes} from "firebase/storage";
import { update } from "react-spring";
// import { getMyEmail } from "../student/StudentNavbarData";

let email = '';

export const saveEmail = (myemail)=>{
    email = myemail;
}

export const savePersonalInfo = async ([selfData, bioData, fatherData, addressData, nationalityData], email) => {
    // const email = getMyEmail();
    const document = doc(db, "students", email);
    const data = { selfData, bioData, fatherData, addressData, nationalityData };
    await setDoc(document, { personalInfo: data, isSponsored:false }, {merge:true});
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

export const setStudentStatus = async(status, studentEmail)=>{
    const document = doc(db, 'students', studentEmail);
    await updateDoc(document, { allowed: status }).then(()=>{
        if(status)
            alert('Student is allowed');
        else{
            alert('Student is disallowed');
        }
    });
}

export const showStudentsToDonor = async(setStudents)=>{
    const q = query(collection(db, "students"), where("isSponsored", "==", false), where('allowed', '==', true));
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
            const city = personalInfo?.addressData?.city;
            const student = { id, name, schoolName, gradYear, city, email: doc.id};
            
            students.push(student);
        });
        console.log(students);
        setStudents(students);
    });


}

export const getAllStudents = async (universityName, setStudents) => {
    const q = query(collection(db, "students"), where("isSponsored", "==", false), where("educationInfo.schoolName", "==", universityName));
    await getDocs(q);
    onSnapshot(q, (querySnapshot) => {
        const students = [];
        let id= 1;
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let status = doc.data()?.allowed;
            if(status){
                status = 'Allowed'
            }
            else if(status===false)
                status = 'Disallowed';
            else
                status = 'Select';
            
            const { personalInfo } = doc.data();
            const name = personalInfo?.selfData?.name;
            const { educationInfo } = doc.data();
            const schoolName = educationInfo?.schoolName;
            const gradYear = educationInfo?.graduationYear;
            const city = personalInfo?.addressData?.city;
            const student = { id, name, schoolName, gradYear, city, email: doc.id, status};

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

export const saveDonorData = async (donorEmail, donorData, setAlert)=>{
    //Update user profile
    const document = doc(db, 'users', donorEmail);
    await updateDoc(document, { otherInfo: donorData }).then(()=>{
        setAlert(true);
    });
    // console.log(data);
}

export const getProfileData = async (email, setProfile)=>{
    const document = doc(db, 'students', email);
    onSnapshot(document, (document)=>{
        setProfile(document.data());
    })
}
export const saveSponsoredStudent = async(stdEmail, data)=>{
    // console.log(stdDoc);
    const document = doc(db, 'students', stdEmail);
    await updateDoc(document, data).then((res)=>{
        console.log('Student is sponsored');
        console.log(res);
    }).catch((err)=>console.log(err.message));
}

export const getStudentsDonated = async(donorEmail, setSponsoredStudent)=>{

    const sponosredRef = collection(db, "students");
    const q = query(sponosredRef, where("isSponsored", "==", true));
    const querySnapshot = await getDocs(q);
    const studentsSponsored = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data();
        const name = data?.personalInfo?.selfData?.name;
        const schoolName = data?.educationInfo?.schoolName;
        const program = data?.educationInfo?.degree +" "+ data?.educationInfo?.fieldOfStudy;
        const student = { name, schoolName, program, status:"approved" };
        if(data?.donors[0].donorEmail === donorEmail){
            console.log('call me '+donorEmail);
            console.log(doc.id, " : ", data);
            studentsSponsored.push(student);
        }
        
    });
    setSponsoredStudent(studentsSponsored);
    
    // console.log(studentsSponsored);
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
            setLogin(res.data());
        }
        else{
            setLogin(null);
        }

    }).catch((err)=>{})


}

export const setStdNotification = async(stdEmail, data)=>{
    const document = doc(db, 'notifications', stdEmail);
    await setDoc(document, data);
}

export const getStdNotifcations = async(stdEmail, setNotifications)=>{
    const document = doc(db, 'notifications', stdEmail);
    await getDoc(document).then((res)=>{
        if(res.data() !== undefined){
            console.log(res.data());
            setNotifications(res.data()?.messages);
        }
        else{
            setNotifications(null);
        }

    }).catch((err)=>{})

}
// add a new message/notification in the notifications collections array firestore
export const addNewMessage = async(stdEmail, message, deletetext)=>{
    const deleteMessage = async(email, message)=>{
        const docRef = doc(db, 'notifications', email);
        await updateDoc(docRef, {
            messages: arrayRemove(message)
        }); 
    }
    deleteMessage(stdEmail, deletetext);
    const document = doc(db, 'notifications', stdEmail);
    //Using arrayUnion
    await updateDoc(document, {
        messages: arrayUnion(message)
    });
}

export const setPayment = async(stdEmail, data)=>{
    const document = doc(db, 'Payments', stdEmail);
    await setDoc(document, data);
}

export const getPayments = async(stdEmail, setPayments)=>{
    const document = doc(db, 'Payments', stdEmail);
    await getDoc(document).then((res)=>{
        if(res.data() !== undefined){
            console.log(res.data());
            setPayments(res.data()?.messages);
        }
        else{
            setPayments(null);
        }

    }).catch((err)=>{})

}
// add a new message/notification in the notifications collections array firestore
export const addNewPayment = async(stdEmail, payment)=>{
    const document = doc(db, 'Payments', stdEmail);
    //Using arrayUnion
    await updateDoc(document, {
        payments: arrayUnion(payment)
    });
}


export const getDonorsStudents = async(universityName, setDonors, setStudents, setPrograms)=>{
    const sponsoredStdsRef = collection(db, "students")
    const q = query(sponsoredStdsRef, where("educationInfo.schoolName", "==", universityName), where('isSponsored', '==', true));
    const querySnapshot = await getDocs(q);
    const students = [];
    const donors = [];
    const programs = [];
    let id = 1;
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const email = doc.id;
        const data = doc.data();
        const donor = getDonor(data, id);
        const student = getStudent(data,email, id);
        const program = getProgram(data, id);
        donors.push(donor);
        students.push(student);
        programs.push(program);
        id++;
    })
    setDonors(donors);
    setStudents(students);
    setPrograms(programs);
}

function getDonor(data, id){
    const name = data?.donors[0].donorName;
    const email = data?.donors[0].donorEmail;
    const amount = data?.donors[0].amount;
    return {id, email, amount, name}
}
function getStudent(data, email, id){
    const name = data?.personalInfo?.selfData?.name;
    const program = data?.educationInfo?.degree +" "+ data?.educationInfo?.fieldOfStudy;
    return {id, email, name, program}
}
function getProgram(data, id){
    const name = data?.educationInfo?.degree +" "+ data?.educationInfo?.fieldOfStudy;
    return {id, name, description:'[Description]'}
}


