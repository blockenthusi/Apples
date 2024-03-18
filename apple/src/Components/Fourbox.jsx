import chevron from "../assets/chevron.svg"
import logo from "../assets/logo.png"
import logoCard from "../assets/logoCard.png"
import Tradein from "../assets/Tradein.png"
const Box =() => {
    return(
        <>
        <div className="box">
            <div className="box1">
                <div className="boxLeft">
                <div className="heroWrap3">
                <div className="Text3">
                    <h1>iPhone 15</h1>
                    <p>NEW Camera.New design.Newphoria</p>

                    <div className="spaans3">
                        <span className="chevy3">
                            <a href="#" className="link">Learn More</a>
                            <img src={chevron} alt="select"/>
                        </span>
                        <span className="chevy4">
                            <a href="#" className="link">Buy</a>
                            <img src={chevron} alt="select"/>
                        </span>
                        
                      
                    </div>
                    
                </div>
            </div>
                </div>
                <div className="boxRight">
                <div className="heroWrap4">
                <div className="Text4">
                    <h1>Wonder Awaits</h1>
                    <p>Give the gifts they've been <br/>looking forward to all year</p>

                    <div className="spaans4">
                        <span className="chevy4">
                            <a href="#" className="link">Shop</a>
                            <img src={chevron} alt="select"/>
                        </span>
                        {/* <span className="chevy4"> */}
                            {/* <a href="#" className="link">Buy</a> */}
                            {/* <img src={chevron} alt="select"/> */}
                        {/* </span> */}
                        
                      
                    </div>
                    
                </div>
            </div>
                </div>
            </div>
            <div className="box2">
                <div className="boxLeft1">
                <div className="heroWrap5">
                <div className="Text5">
                    {/* <h1>Wonder Awaits</h1> */}
                    <img src={logo}alt="" />
                    <p>Smarter.Brighter.Mightier</p>

                    <div className="spaans5">
                        <span className="chevy5">
                            <a href="#" className="link">Learn More</a>
                            <img src={chevron} alt="select"/>
                        </span>
                        <span className="chevy5">
                            <a href="#" className="link">Buy</a>
                            <img src={chevron} alt="select"/>
                        </span>
                        
                      
                    </div>
                    
                </div>
            </div>
                </div>
                <div className="boxRight1">
                <div className="heroWrap6">
                <div className="Text6">
                    <h1>AirPods Pro</h1>
                    <p>Adaptive Audio.Now Playing</p>

                    <div className="spaans6">
                        <span className="chevy6">
                            <a href="#" className="link">Learn More</a>
                            <img src={chevron} alt="select"/>
                        </span>
                        <span className="chevy6">
                            <a href="#" className="link">Buy</a>
                            <img src={chevron} alt="select"/>
                        </span>
                        
                      
                    </div>
                    
                </div>
            </div>
                </div>
            </div>
            <div className="box3">
                <div className="boxLeft2">
                <div className="heroWrap7">
                <div className="Text7">
                    {/* <h1>Wonder Awaits</h1> */}
                    <img src={logoCard} alt="" />
                    <p>Get up to 3% Daily Cash back <br/>with every purchase</p>

                    <div className="spaans7">
                        <span className="chevy7">
                            <a href="#" className="link">Learn More</a>
                            <img src={chevron} alt="select"/>
                        </span>
                        <span className="chevy7">
                            <a href="#" className="link">Apply Now</a>
                            <img src={chevron} alt="select"/>
                        </span>
                        
                      
                    </div>
                    
                </div>
            </div>
                </div>
                <div className="boxRight2">
                <div className="heroWrap8">
                <div className="Text8">
                    {/* <h1>Wonder Awaits</h1> */}
                    <img src={Tradein}alt="" />
                    <p>Get $200 - $650 in credit when you <br/>trade in iPhone 11  or higher</p>

                    <div className="spaans8">
                        <span className="chevy8">
                            <a href="#" className="link">See what your phone is worth</a>
                            <img src={chevron} alt="select"/>
                        </span>
                        {/* <span className="chevy8"> */}
                            {/* <a href="#" className="link">Buy</a> */}
                            {/* <img src={chevron} alt="select"/> */}
                        {/* </span> */}
                        
                      
                    </div>
                    
                </div>
            </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Box