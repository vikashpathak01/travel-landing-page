import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-container">
        <h3>
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h3>
        <div className="input-container">
          <input type="text" placeholder="Your email" className="text"/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
