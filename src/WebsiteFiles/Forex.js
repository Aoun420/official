import React from 'react'
import './style.css'
import './Header.css'
import Header from './Header'
import ViewMore from './ViewMore'
import Footer from './Footer'
import {BrowserRouter as Router,Switch, Route,Link,Redirect} from 'react-router-dom'

function Forex(){


    return(
        <div className='container'>
             <Header/>
<Link to="/forex"></Link>
            <div className="row">
           
            <div className='col-md-12'>
                
        <img src='/images/forex.PNG' width='100%' height='800'/>

        <div className='carousel-caption text-center centered'>
        <h1 className='textfont'><b><label className='red'>FOR</label><label className='txtblue'>EX</label></b></h1>
        <h1>Loreum ipsum dolor sit amet , consectetur adipiscing elit ut aliquam purus
        sit amet luctus venenatis,</h1>
        <div className='margin'>
        <ViewMore />
        </div>
        </div>
        </div>
        
        </div>
        <div className='shadow margin '>
        
        <h1 className='clr'>About Our <label className='red'>FOR</label><label className='txtblue'>EX</label>  Company</h1>
        <h4 className='clr margin'>lorem ipsum dolor sit amet ,consectetur adipiscing elit.Natoque nisi, ultrices amet sed hendrerit.Ultrices commodo non lectus arcu,
        ,magnis lobortis Risus sed libero proin id.porta dignissium pellentesque donec elementum arcu amet lorem.Non morbi saggittis viverra lobortis habitasse sem aliquam
        Nulla porttitor euismod dictumst sagittis ac enim congue vitae.In senectus egetas at ac ut tortor sit.Sit non orci vestibulum mi.Turpis sit sit id viverra</h4>
        <div className='margin'>
        <ViewMore />
        </div>

        </div>
        <div className='row  newpdng'>
            <div className='col-md-12 '>
            <div className='col-md-4'>
                <div className='card mrgnlft'>
                    <img  className='pic'  src='/images/4.PNG' width='100%' height='190px'/>
                    <h3>Online Video</h3>
                    <p className='pdng bld'>lorem ipsum dolor sit amet ,consectetur adipiscing elit.Natoque nisi, ultrices amet sed hendrerit.Ultrices commodo non lectus arcu,
        ,magnis lobortis Risus sed libero proin id.porta dignissium </p>
        <div className='pdng'>
        <ViewMore ></ViewMore></div>
        </div>
                </div>
                <div className='col-md-4'>
                <div className='card mrgnlft'>
                    <img  className='pic'  src='/images/3.PNG' width='100%' height='190px'/>
                    <h3>Online Group Chat</h3>
                    <p className='pdng bld'>lorem ipsum dolor sit amet ,consectetur adipiscing elit.Natoque nisi, ultrices amet sed hendrerit.Ultrices commodo non lectus arcu,
        ,magnis lobortis Risus sed libero proin id.porta dignissium </p>
        <div className='pdng'>
        <ViewMore ></ViewMore></div>
        </div>
                </div>    
                <div className='col-md-4'>
                <div className='card mrgnlft'>
                    <img  className='pic'  src='/images/6.PNG' width='100%' height='190px'/>
                    <h3>Watch Demo</h3>
                    <p className='pdng bld'>lorem ipsum dolor sit amet ,consectetur adipiscing elit.Natoque nisi, ultrices amet sed hendrerit.Ultrices commodo non lectus arcu,
        ,magnis lobortis Risus sed libero proin id.porta dignissium </p>
        <div className='pdng'>
        <ViewMore ></ViewMore></div>
        </div>
                </div>    
            </div>
        </div>
        
        <Footer/>
        
        </div>  
        
    )
}

export default Forex