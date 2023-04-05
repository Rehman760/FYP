import Alert from 'react-bootstrap/Alert';
import { useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { sendSignInLinkToEmail } from 'firebase/auth';

// ['primary','secondary','success','danger','warning','info','light','dark',]

function BasicExample() {
    const variant = "success";
    const {state} = useLocation();
    // console.log(email);
    const handleEmailVerification = (e)=>{
        e.preventDefault();
        //Ameer Hamza here you to write code to verify email
        const actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be in the authorized domains list in the Firebase Console.
            url: 'https://www.example.com/finishSignUp?cartId=1234',
            // This must be true.
            handleCodeInApp: true,
            iOS: {
              bundleId: 'com.example.ios'
            },
            android: {
              packageName: 'com.example.android',
              installApp: true,
              minimumVersion: '12'
            },
            dynamicLinkDomain: 'example.page.link'
          };

        const auth = getAuth();
        sendSignInLinkToEmail(auth, state.email, actionCodeSettings)
        .then(() => {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', state.email);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });
        alert(state.email);

    }

    return (   
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
          Click <button style={{fontSize:20}}onClick={handleEmailVerification}>here</button> to verify your email
          <h1>Email has been sent to {state.email}</h1>
        </Alert>
    );
}

export default BasicExample;