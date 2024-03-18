import {AiOutlineClose} from 'react-icons/ai'
import {FaApple} from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'
import {PiBagSimpleThin} from 'react-icons/pi'
import {BsMenuDown} from 'react-icons/bs'
import {GiCancel} from 'react-icons/gi'
import { useState } from 'react'



const Header = ({show, setShow}) => {


    // const [show, setShow] = useState(false)
    return(
        <>
        <div className="header">
            <div className="headerFrame">
                <div className="topHeader">
                    <div className="leftie">
                        <p>Choose another country or region to see content specific to your location.</p>
                    </div>
                    <div className="rightie">
                       <div className="niger">

                       <select>
                            <option value="Nigeria">Nigeria</option>
                        </select>
                        </div> 

                         <button className='cont'>Continue</button>
                         <AiOutlineClose  style={{fontSize: "20px", color: "white"}}/>
                         
                    </div>
                </div>
             
            </div>
             <div className='butwrap'>
             <div className="butHeader">
                    
                    
                    <FaApple className='apple' style={{fontSize: "20px", color: "white"}}/>
                    <p>store</p>
                    <p>Mac</p>
                    <p>ipad</p>
                    <p>iphone</p>
                    <p>Watch</p>
                    <p>Vision</p>
                    <p>AirPods</p>
                    <p>Tv & Homes</p>
                    <p>Entertainment</p>
                    <p>Accessories</p>
                    <p>Support</p>
                    <BiSearch className="search" style={{fontSize: "18px", color: "white"}}/>
                    <PiBagSimpleThin className="bag" style={{fontSize: "18px"}}/>
                </div>
             </div>
        
            <div className="burger" onClick={()=> setShow(!show)}>
        {
            show === false? <BsMenuDown/>: <GiCancel/>
        }
      </div>
        </div>
        </>
    )
}



export default Header