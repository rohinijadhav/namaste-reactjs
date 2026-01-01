import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//   return (
//     <div className="about-page">
//       <h1>About</h1>
//       <p>This is Namaste React Live Course</p>
//       {/* <User name = "Rohini (Function)"/> */}
//       <UserClass name = "Rohini (class)" countClass = {10}/>
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor - About Component", props);
  }

  componentDidMount() {
    console.log("componentDidMount - About Component");
  }

  render() {
    console.log("Rendering About Component");
    return (
      <div className="about-page">
        <h1>About</h1>
        <p>This is Namaste React Live Course</p>
        {/* <User name = "Rohini (Function)"/> */}
        <UserClass id="rohinijadhav" />
        {/* <UserClass name="Rohini (class 2)" />
        <UserClass name="Rohini (class 3)" /> */}
      </div>
    );
  }
}

export default About;
