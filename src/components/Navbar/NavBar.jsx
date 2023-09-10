import { FaSearch } from 'react-icons/fa';
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="#">
          <img src="../../../public/whole.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <form className="d-flex mx-auto position-relative">
            <input
              style={{ width: '360px' }}
              className="form-control me-2 rounded-pill ps-5"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
            <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-2" />
          </form>
          <ul
            className="navbar-nav me-5 my-2 my-lg-0 navbar-nav-scroll"
            style={{ '--bs-scroll-height': '100px' }}
          >
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Create account. <span className="text-primary">It’s free!</span>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign up
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
