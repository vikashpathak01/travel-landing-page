import group1 from "../../assets/Group (1).png";
import "./Services.css"
const Services = () => {
  return (
    <div className="service">
      <div className="service-container">
        <div className="service-title">
          <p className="service-cate">Category</p>
          <p className="service-head">We Offer Best Services</p>
        </div>
        <div className="services-cards">
          <div className="service-card">
            <img src={group1} alt="" />
            <p className="service-card-head">Calculated Weather </p>
            <p className="service-card-des">Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div className="service-card">
            <img src={group1} alt="" />
            <p className="service-card-head">Calculated Weather </p>
            <p className="service-card-des">Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div className="service-card">
            <img src={group1} alt="" />
            <p className="service-card-head">Calculated Weather </p>
            <p className="service-card-des">Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div className="service-card">
            <img src={group1} alt="" />
            <p className="service-card-head">Calculated Weather </p>
            <p className="service-card-des">Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Services;
