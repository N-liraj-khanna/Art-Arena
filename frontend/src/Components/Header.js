function Header() {
  return (
    <div className="header" id="header">
      <section className="container" id="landing">
        <div className="row justify-content-center mx-0">
          <div className="col-lg-6 bg-white rounded p-3">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="playerName"
                placeholder="Name"
                required
              />
              <label for="playerName">Name</label>
            </div>
            <div className="row justify-content-center mx-0">
              <div className="col-6 col-sm-5">
                <img
                  id="avatar"
                  className="img-fluid rounded-circle mb-4 mb-sm-0"
                  src="https://avatars.dicebear.com/4.5/api/avataaars/.svg"
                  alt="Avatar"
                />
              </div>
              <div className="col-sm-7">
                <div className="input-group mb-3">
                  <label className="input-group-text" for="style">
                    Style
                  </label>
                  <select className="form-select" id="style">
                    <option value="Avataaars" selected>
                      Avataaars
                    </option>
                    <option value="Bottts">Bottts</option>
                    <option value="Female">Female</option>
                    <option value="Gridy">Gridy</option>
                    <option value="Human">Human</option>
                    <option value="Identicon">Identicon</option>
                    <option value="Initials">Initials</option>
                    <option value="Jdenticon">Jdenticon</option>
                    <option value="Male">Male</option>
                  </select>
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text form-label" for="bgColor">
                    Background Color
                  </label>
                  <input
                    type="color"
                    className="form-control form-control-color"
                    id="bgColor"
                    value="#FFFFFF"
                    title="Choose your color"
                  />
                </div>
              </div>
              {/* <% if(!roomID) { %> */}
              <button className="btn btn-primary mt-3" id="createRoom">
                Create Private Room
              </button>
              {/* <% } else { %> */}
              <button className="btn btn-primary mt-3" id="playGame">
                Join Room
              </button>
              {/* <% } %> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
