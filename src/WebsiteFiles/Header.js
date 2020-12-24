import React from 'react'
import './style.css'
import './Header.css'
import Videos from './Videos'
import {Link} from "react-router-dom"

function Header(){

    // const handleClick=()=>{
    //     window.open("/Videos")
    // }

    return(
        
        <div className='container'>

<div className=' row cntr bgklr newheader'>
    <div className='col-md-12 '>
            <div className='col-md-3 klr'>
                
                <img src="/images/logo.png" width="100px" height="60px"/>
                
            </div>
            <div className='col-md-7 top' >
                <h6 className='klr col-md-2'>Home</h6>
                
                {/* <button className='col-md-3 klr btn'>Forex Demo</button> */}
                
                <Link to="/videos">Forex Demo</Link>
                
                
                
                <button className='btn klr col-md-2'>Community</button>
            </div>
            <div className="col-md-2 top">
                <div className='row'>
                    <div className='col-md-12'>
                    <div className='col-md-2'>
                <img src='/images/icon.png' width='30px' height='20px'/>
                </div>
                <button className='btn col-md-3 klr'>Login</button>
                <div className='col-md-1'>
                <img src='/images/line.png' width='10px' height='20px'></img>
                </div>
                <button className='btn col-md-2 klr'>SignUp</button>
                </div>
                </div>
            </div>
            </div>
            </div>
            
        </div>
        
    )

}
export default Header