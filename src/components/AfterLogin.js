import Alert from 'react-bootstrap/Alert';

// ['primary','secondary','success','danger','warning','info','light','dark',]

function BasicExample() {
    const variant = "success";
    // console.log(email);
    function handleEmailVerification(){
        alert('Ameer Hamza here you to right code to verify email');
    }

    return (   
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
          Click <button style={{fontSize:20}}onClick={handleEmailVerification}>here</button> to verify your email
        </Alert>
    );
}

export default BasicExample;