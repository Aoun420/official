import React from 'react'
import './style.css'
import './Header.css'
import Header from './Header'
import Footer from './Footer'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function Videos(){
    return(
        <div className='container'>
            
            
            <div className='row'>
                <div className='col-md-12'>
            
                <div className='bgpics'>
                <Header/>
                <div className='row'>
                    <div className='col-md-offset-9 col-md-3 '>
                        <div className='bgpicture brder'/>
                    </div>
                    </div>
                    <div className='text-center row '>
                        <div className='col-md-8 col-md-offset-2'>
                            <div className=' backblack'>
                        <div className='row tp'>
                <div className='col-md-12'>
                    <div className='col-md-1'>
                    <img src='/images/mute1.png'/>
                        <img src='/images/mute.png'/>
                        <p className='white'>MUTE</p>
                    </div>
                    <div className='col-md-2'>
                        <img src='/images/stopVideo.png'/>
                        <p className='white'>STOP VIDEO</p>
                    </div>
                    <div className='col-md-1 '>
                        <img src='/images/invite.png'/>
                        <p className='white'>INVITE</p>
                    </div>
                    <div className='col-md-1 mrgnlft'>
                        <img src='/images/group.png'/>
                        <p className='white'>GROUP</p>
                    </div>
                    <div className='col-md-2 mrgnlft'>
                        <img src='/images/screenShort.png'/>
                        <p className='white'>SCREEN SHOT</p>
                    </div>
                    <div className='col-md-1 '>
                        <img src='/images/chat.png'/>
                        <p className='white'>CHAT</p>
                    </div>
                    <div className='col-md-2'>
                        <img src='/images/fullScreen.png'/>
                        <p className='white'>FULL SCREEN</p>
                    </div>
                    <div className='col-md-1 '>
                    <div className='row'>
                        <img src='/images/dot.png'/>
                        <img src='/images/dot.png'/>
                        <img src='/images/dot.png'/>
                        </div>
                        <p className='white'>MORE</p>
                    </div>
                    </div>
                    </div>
                    </div>
                        </div>
                        
                    </div>
                    </div>
            </div>
                </div>
            <Footer/>
        </div>
        
    )

}
export default Videos