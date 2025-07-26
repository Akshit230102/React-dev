import React from "react";
import UserContext from "../Utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
            name: "default",
            id: "default",
        },
    };
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Akshit230102");
    const json = await data.json();
    this.setState({
        userInfo: json,
    });
  }

  render() {
    const {name, id, avatar_url}  = this.state.userInfo;

    return (
      <div className="p-2 m-2 border-1">
        <img src={avatar_url} />
        <h3> Name: {name}</h3>
        <h3> Id: {id}</h3>
        <UserContext.Consumer>
          {({loggedInUser}) => <h3>Username: {loggedInUser}</h3> }
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
