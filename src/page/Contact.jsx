const Contact = () => {
  return (
    <section className="contact jumbotron" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="w-auto p-3">Contact</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <form action="" className="w-auto p-3">
              <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <input
                  type="text"
                  id="nama"
                  className="form-control"
                  placeholder="Masukkan Nama Lengkap"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Masukkan Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="telp">Nomor Telepon</label>
                <input
                  type="tel"
                  id="telp"
                  className="form-control"
                  placeholder="Masukkan Nomor Telepon"
                />
              </div>
              <label htmlFor="">Kategori Pertanyaan</label>
              <select name="" id="" className="form-control">
                <option value="">-- Pilih Kategori --</option>
                <option value="">Web Desing</option>
                <option value="">Web Develompment</option>
              </select>
              <div className="form-group">
                <label htmlFor="">Pesan</label>
                <textarea
                  name=""
                  id=""
                  rows={10}
                  className="form-control"
                  placeholder="Tinggalkan Pesan"
                  defaultValue={""}
                />
              </div>
              <div className="text-center w-auto p-3">
                <button type="button" className="btn btn-outline-dark">
                  <a href="#contact" className="text-decoration-none">
                    Kirim Pesan
                  </a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
