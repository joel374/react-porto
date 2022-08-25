const Home = () => {
  return (
    <div>
      <div className="jumbotron text-center row" id="HOME">
        <div className="grid col-sm-5 col-sm-offset-1">
          <img src={require("../cat.png")} alt="" style={{ width: "100%" }} />
        </div>
        <div className="grid col-sm-5">
          <div className="kotakkanan">
            <ul>
              <li className="hel">HELLO!</li>
              <li>
                <h1> I’m Joel Legifani, a web Develompment.</h1>
              </li>
              <li className="im">
                <p>
                  IMAGE FROM
                  <a className="lin" href="www.freepik.com">
                    <b>FREEPIK</b>
                  </a>
                </p>
              </li>
              <li>
                <a href className="read">
                  READ MORE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
