import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Form } from 'react-bootstrap';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
 
  MDBValidationItem,
}
from 'mdb-react-ui-kit';


function Signup() {
  const [fieldValue, setFieldValue] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm: '',
  });

  const onChange = (e) => {
    setFieldValue({ ...fieldValue, [e.target.name]: e.target.value });
  };

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); 

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(checkEmail(e.target.value));
  };

  const checkEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);

  const manageChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(checkPassword(e.target.value));
  };

  const checkPassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return password.length >= 6 && uppercaseRegex.test(password) && specialCharRegex.test(password);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/', { state: { welcomeMessage: `Hello, ${fieldValue.firstname}` } });
  };

  return (
    <MDBContainer fluid className='p-4'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>
          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
              <Form onSubmit={handleSubmit}>
                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' 
                      value={fieldValue.firstname}
                      name='firstname'
                      onChange={onChange}
                      id='firstnameInput'
                      required
                      label='First name'
                      type='text'
                    />
                  </MDBCol>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' 
                      value={fieldValue.lastname}
                      name='lastname'
                      onChange={onChange}
                      id='lastnameInput'
                      required
                      label='Last name'
                      type='text'
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput wrapperClass='mb-4'
                  label='Email'
                  id='emailInput'
                  type='email'
                  value={email}
                  required
                  onChange={handleChange}
                  className={!isValidEmail ? 'is-invalid' : ''}
                />
                {!isValidEmail && (
                  <div className='invalid-feedback'>Please enter a valid email address.</div>
                )}
                
                <MDBInput wrapperClass='mb-4'
                  label='Password'
                  id='passwordInput'
                  type='password'
                  required
                  value={password}
                  onChange={manageChange}
                  className={!isValidPassword ? 'is-invalid' : ''}
                />
                {!isValidPassword && (
                  <div className='invalid-feedback'>Password must be at least 6 characters long and contain at least one uppercase letter and one special character.</div>
                )}
                <MDBValidationItem className='col-12' feedback='You must agree before submitting.' invalid>
                  <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
                </MDBValidationItem>
                <MDBValidationItem className='col-12' invalid={!isValidEmail || !isValidPassword}>
                  <MDBBtn className='w-100 mb-4' size='md' type='submit'>sign up</MDBBtn>
                </MDBValidationItem>
              </Form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
