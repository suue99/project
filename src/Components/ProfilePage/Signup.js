import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} 

from 'mdb-react-ui-kit'; 

function Signup() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
        <h1 className="text-uppercase text-center mb-2">Welcome!</h1>
          <h3 className=" text-center mb-5">Create an account</h3>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Confirm your password' size='lg' id='form4' type='password'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to all ' /> <Link to = '/Faq'> Terms and Conditions </Link>
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          <div className="mt-3">
                  <p className="mb-0  text-center">
                    Already have an account?{" "}
                    <Link to="/Login" className="text-primary fw-bold">
                      Login
                    </Link>
                  </p>
                </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup