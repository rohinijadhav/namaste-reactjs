import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/" + this.props.id);
    const json = await data.json();
    console.log("GitHub User Data:", json);
    this.setState(json);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate - UserClass Component");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount - UserClass Component");
  }

  render = () => {
    console.log("Rendering UserClass Component");
    const { avatar_url, bio, location, name } = this.state || {};

    return (
      <div className="user-card">
        <img className="user-img" src={avatar_url} alt="user-img" />
        <h1>Name: {name}</h1>
        <h2>Address: {location}</h2>
        <h2>Bio: {bio}</h2>
        <button
          onClick={() => {
            this.setState({ name: "Rohi", bio: "Updated Bio" });
            console.log("Button clicked");
          }}
        >
          update
        </button>
      </div>
    );
  };
}

export default UserClass;
