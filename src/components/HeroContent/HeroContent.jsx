import "./HeroContent.css";

import hero from "../../assets/Traveller 1.png";
import poly from "../../assets/Polygon 1.png";
const HeroContent = () => {
  return (
    <div className="hero-content">
      <div className="hero-content-container">
        <div className="hero-contents">
          <p className="hero-contents-para">
            Best Destinations around the world
          </p>
          <div className="hero-contents-title">
            Travel, enjoy and live a new and full life
          </div>
          <p className="hero-contents-descriptions">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="hero-button-container">
            <button className="find-button">Find out more</button>
            <button className="demo-button-container">
              <div className="image-container">
                 <img src={poly} alt="" />
              </div>
              <div className="demo-button">Play Demo</div>{" "}
            </button>
          </div>
        </div>
        <div className="heroImage">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
