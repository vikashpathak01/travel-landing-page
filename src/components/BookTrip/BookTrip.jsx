import "./BookTrip.css";
import p from "../../assets/power-supply 1.png";

const BookTrip = () => {
  return (
    <div className="book-trip">
      <div className="book-trip-container">
        <p className="book-trip-head">Easy and Fast</p>
        <div className="book-trip-contents">
          <div className="book-trip-title">
            <h2>Book your next trip in 3 easy steps</h2>
            <div className="book-trip-details">
              <div className="book-trip-details-card">
                <div className="details-card-image">
                  <img src={p} alt="" />
                </div>
                <div className="details-card-texts">
                  <h4>Choose Destination</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </div>
              </div>
              <div className="book-trip-details-card">
                <div className="details-card-image">
                  <img src={p} alt="" />
                </div>
                <div className="details-card-texts">
                  <h4>Choose Destination</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </div>
              </div>
              <div className="book-trip-details-card">
                <div className="details-card-image">
                  <img src={p} alt="" />
                </div>
                <div className="details-card-texts">
                  <h4>Choose Destination</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </div>
              </div>
            
            </div>
          </div>

          <div className="book-trip-card">
            <div className="trip-card-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8lmTo0vol2RoHV4AF0Wf370cBhMHiEfX1mVtpKgS1JTiWVz1f6z2jtR5&s=10"
                alt=""
              />
            </div>
            <div className="trip-card-content">
              <h4>Trip To Greece</h4>
              <p>14-29 June| by Robbin joseph</p>
              <div className="trip-buttons">
                <button>a</button>
                <button>a</button>
                <button>a</button>
              </div>
              <p>24 people going</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTrip;
