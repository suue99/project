import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';

const Signup = () => {
  const navigate = useNavigate();

  const [fieldValue, setFieldValue] = useState({
    firstname: '',
    lastname: '',
  });

  const onChange = (e) => {
    setFieldValue({ ...fieldValue, [e.target.name]: e.target.value });
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Successfully signed up
      const user = userCredential.user;
      console.log(user);
      navigate('/', { state: { welcomeMessage: `Hello, ${fieldValue.firstname}` } });
    } catch (error) {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  return (
    <MDBContainer fluid className='p-4'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            One step closer <br />
            <span className="text-primary">to a better life</span>
          </h1>
          
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
                  onChange={(e) => setEmail(e.target.value)}
                />

                <MDBInput wrapperClass='mb-4'
                  label='Password'
                  id='passwordInput'
                  type='password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <MDBBtn className='w-100 mb-4' size='md' type='submit'>sign up</MDBBtn>

                <p>Already have an account? <Link to = '/login'>Log In</Link></p>
              </Form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;
