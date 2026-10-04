import "./Places.css"
import london from "../../assets/london.png"
import europe from "../../assets/europe.jpg"
import rome from "../../assets/rome.jpg"


const Places = () => {
  return (
    <div className='destination'>
      <div className="destination-text">
         <div className="destination-title">
            Top Selling
         </div>
         <h2 className="destination-head">Top Destinations</h2>
      </div>
       <div className='destination-container'>
          <div className='destination-cards'>
              <div className='destination-card'>
                 <div className='destination-picture'>
                  <img src={rome} alt="" />
                 </div>   
                 <div className='card-content'>
                     <div className='card-places'> 
                         <h3 className='place'>Rome, Italty</h3>
                         <p className='price'>$5,42k</p>
                     </div>
                     <div className='trip'>
                        <div>a</div>                        
                        <span>14 Days Trip</span>                        
                     </div>
                 </div>              
              </div>
              <div className='destination-card'>
                 <div className='destination-picture'>
                  <img src={london} alt="" />
                 </div>   
                 <div className='card-content'>
                     <div className='card-places'> 
                         <h3 className='place'>Rome, Italty</h3>
                         <p className='price'>$5,42k</p>
                     </div>
                     <div className='trip'>
                        <div>a</div>                        
                        <span>14 Days Trip</span>                        
                     </div>
                 </div>              
              </div>
              <div className='destination-card'>
                 <div className='destination-picture'>
                  <img src={europe} alt="" />
                 </div>   
                 <div className='card-content'>
                     <div className='card-places'> 
                         <h3 className='place'>Rome, Italty</h3>
                         <p className='price'>$5,42k</p>
                     </div>
                     <div className='trip'>
                        <div>a</div>                        
                        <span>14 Days Trip</span>                        
                     </div>
                 </div>              
              </div>
          </div>

       </div>    
    </div>
  )
}

export default Places