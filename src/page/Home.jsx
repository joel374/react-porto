const Home = () => {
  return (
    <div className="jumbotron">
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-4">
          <img src={require("../cat.png")} alt="" className="img-fluid" />
        </div>
        <div className="col-sm-6 text-left">
          <div className="w-75 p-3" />
          <div className="w-auto p-3">
            <h3>HELLO!</h3>
          </div>
          <div className="w-auto p-3">
            <h1 className="helo">
              I'm Joel Legifani, a student web Develompment.
            </h1>
          </div>
          <div className="w-auto p-3">
            <p>
              IMAGE FROM
              <a href="www.freepik.com" className="text-decoration-none">
                <b>PNGTREE</b>
              </a>
            </p>
          </div>
          <div className="w-auto p-3">
            <button
              type="button"
              className="btn btn-outline-dark"
              style={{ borderRadius: 0 }}
            >
              <a
                href="#about"
                className="text-decoration-none"
                onClick={() => props.setCurrentPage("about")}
              >
                READ MORE
              </a>
            </button>
          </div>
          <div className="grid w-75 p-3" />
        </div>
      </div>
    </div>
  )
}
export default Home
