import logo1 from "../../assets/image 27.png"
import logo2 from "../../assets/image 28.png"
import logo3 from "../../assets/image 29.png"
import logo4 from "../../assets/image 30.png"
import logo5 from "../../assets/image 31.png"
import "./CompanyNames.css"

const CompanyNames = () => {
  return (
    <div className="companyNames">
         <div className="company-picture-container">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
         </div>
    
    </div>
  )
}

export default CompanyNames