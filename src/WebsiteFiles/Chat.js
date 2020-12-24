import React from 'react'
import './style.css'
import './Header.css'
import Header from './Header'
import Footer from './Footer'


function Chat(){
    return(
        <div className='container'>
            
            <div className='row'>
                <div className='col-md-12'>
                <Header/>
                    <div className='col-md-4 lft'>
                        <div className='row '>
                            <div className='col-md-12 '>
                                <div className='col-md-1 '>
                                <img  src='/images/search.png' width='25px' height='20px'></img>
                                </div>
                                <p className='col-md-1 txtklr'>Search</p>
                            </div>

                        </div>
                        <div className='col-md-12'>
                            <div className='bgray'>
                               <p className='txtwhite'>Chat</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}
export default Chat