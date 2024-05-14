import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

 function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ background: 'transparent'}}>

      <div className='text-center text-white p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:  Jointly+ <br/>
        images from www.freepik.com
      </div>
    </MDBFooter>
  );
}


export default Footer