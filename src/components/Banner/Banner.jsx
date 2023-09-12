import { useContext } from 'react';
import './Banner.css';
import { AuthContext } from '../../Context/AuthProvider';
const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mx-auto position-relative" style={{ maxWidth: '1440px' }}>
      <img
        src="../../../public/banner.png"
        className="img-fluid banImg"
        alt="..."
      ></img>
      <div className="text-white position-absolute bottom-0 start-0 bannerHeading">
        <h1>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
      <div className="position-absolute top-0 end-0 pt-5 pe-5 d-sm-block d-md-none">
        {user ? (
          <button
            type="button"
            className="btn btn-outline-secondary text-white"
          >
            Leave Group
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline-secondary text-white"
          >
            Join Group
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
