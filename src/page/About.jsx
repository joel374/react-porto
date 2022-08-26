const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center w-auto p-3">About</h1>
            <p className="text-center w-auto p-3">
              I'm a creative multitasking developer
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-sm-3">
            <h3 className="text-center w-auto p-3">About Me</h3>
            <p className="text-left">
              I am an allround web developer. I am a junior programmer with good
              knowledge of front-end techniques. Vitae sapien pellentesque
              habitant morbi tristique senectus et. Aenean sed adipiscing diam
              donec adipiscing tristique risus.
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <img src={require("../profile.png")} alt="" className="img-fluid" />
          </div>
          <div className="col-sm-3">
            <h3 className="text-center w-auto p-3">Details</h3>
            <p>
              <b>Name:</b>
              <br />
              Joel Legifani Manisali
              <br />
              <b>Age:</b>
              <br />
              18 years
              <br />
              <b>Location:</b>
              <br />
              Disana
            </p>
            <div className="sosmed">
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-1" />
        </div>
      </div>
    </section>
  )
}
export default About
