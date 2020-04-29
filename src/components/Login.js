import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  hundleInputSubmit = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  hundleSubmit = e => {
    e.preventDefault();
    const loginUser = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(loginUser);
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h2 style={{ marginBottom: "40px" }}>Login User</h2>
        <form onSubmit={this.hundleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              name="email"
              onChange={this.hundleInputSubmit}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              name="password"
              onChange={this.hundleInputSubmit}
              value={this.state.password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Login User
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
