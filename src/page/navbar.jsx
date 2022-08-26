const NavBar = (props) => {
  return (
    <nav
      className="navbar navbar-dark bg-dark navbar-fixed-top"
      style={{ color: "white" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand">Joel Legifani M</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active"
              aria-current="page"
              href="#home"
              onClick={() => props.setCurrentPage("home")}
            >
              Home
            </a>
            <a
              className="nav-link"
              href="#about"
              onClick={() => props.setCurrentPage("about")}
            >
              About
            </a>
            <a
              className="nav-link"
              href="#contact"
              onClick={() => props.setCurrentPage("contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
