const About = () => {
  return (
    <div className="prof">
      <div className="about">
        <h2>ABOUT</h2>
        <p>I'm a creative multitasking developer</p>
      </div>
      <div className="about2" id="ABOUT">
        <div className="a1">
          <h3>About Me</h3>
          <p>
            I am an allround web developer. I am a junior programmer with good
            knowledge of front-end techniques. Vitae sapien pellentesque
            habitant morbi tristique senectus et. Aenean sed adipiscing diam
            donec adipiscing tristique risus.{" "}
          </p>
          <p className="link">
            Image by{" "}
            <a className="lin" href="#">
              FreePik
            </a>
          </p>
        </div>

        <div className="a2">
          <div className="gam">
            <img
              src={require("../profile.png")}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="a1">
        <h3>Details</h3>
        <p>
          <b>Name:</b>
          <br></br>
          Joel Legifani Manisali
          <br></br>
          <b>Age:</b>
          <br></br>
          18 years
          <br></br>
          <b>Location:</b>
          <br></br>
          Disana
        </p>
        <div className="sosmed">
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
export default About
