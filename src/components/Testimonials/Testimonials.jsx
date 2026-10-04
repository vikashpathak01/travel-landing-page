import "./Testimonials.css";
import v from "../../assets/v.png"

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-texts">
          <div className="texts">
            <p>Testimonials</p>
            <h2>What people say about Us.</h2>
          </div>
          <div className="texts-buttons">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-card-text card-index">
            <p>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <div className="testimonial-card-name">
              <h5>Mike taylor</h5>
              <p>Lahore, Pakistan</p>
            </div>

            <div className="circle">
                <img src={v} alt="" />
            </div>

          </div>
            <div className="testimonial-card-text card-second">
            <p>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <div className="testimonial-card-name">
              <h5>Vikash Pathak</h5>
              <p>Bihar, India</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
