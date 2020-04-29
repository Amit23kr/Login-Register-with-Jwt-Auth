import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h2 style={{ marginBottom: "40px" }}>I'm in my home Dude..</h2>
        <img
          src="https://i.pinimg.com/originals/62/54/62/6254622b581e846a058c64ccf5aacd87.jpg"
          alt="icon"
        />
      </div>
    );
  }
}

export default Home;
