import chevron from "../assets/chevron.svg"
const Mac = () => {
    return(
        <>
        <div className="heroFrame">
            <div className="heroWrap">
                <div className="Text">
                    <h1>MacBook Pro</h1>
                    <p>Mind-blowing.Head-Turning</p>

                    <div className="spaans">
                        <span className="chevy">
                            <a href="#" className="link">Learn More</a>
                            <img src={chevron} alt="select"/>
                        </span>
                        <span className="chevy">
                            <a href="#" className="link">Buy</a>
                            <img src={chevron} alt="select"/>
                        </span>
                        
                      
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}



export default Mac