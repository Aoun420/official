import React from 'react'
import './style.css'
import './Header.css'
import Header from './Header'


function Footer(){
    return(
        // <div className='footer'>
     <div className='container '>
         <div className='row footer'>
             <div className='col-md-12 bgimg'>
         
                   
         <div className='row '>
             <div className='col-md-12 '>
                 
                   
               
                  
               
                 <div className='col-md-3 newmrgn1'>
                 <img src="/images/logo.png" width="100px" height="70px"/>
                 </div>
                 <div className='col-md-5 bld white  newmrgn'>
                    <p>2020 All Rights Reserved</p>
                </div>
                <div className='col-md-4 white bld'>
                    <div className='row'>
                        <div className='col-md-12 mrgn3'>
                            <div className='col-md-2'>
                        <img src='/images/phone.png' width='30px' height='30px'></img>
                        </div>
                        <div className='col-md-4'>
                            <p className='white bld '>+9212123234545</p>

                        </div>
                    </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-md-12'>
                        <div className='col-md-2 newmrgn2'>
                        <img src='/images/carbon.png' width='35px' height='35px'></img>
                        </div>
                        <div className='col-md-8'>
                            <p className='white bld'>lorem ipsum dolor sit amet ,consectetur adipiscing elit.Natoque nisi </p>
                        </div>
                    </div>
                    </div>

                </div>

                
                 </div>
                 </div>
         </div>
         
         </div>
         </div>
    )
}
export default Footer