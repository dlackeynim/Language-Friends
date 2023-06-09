import './Header.css'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Language Friends</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Study Partners</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Group Class</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Header;
