import React from "react";

class UserPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "DEFAULT NAME",
        };
    }
    render() {
        return (
            <h4>User: {this.props.username}</h4>
            );
    }
}



export default UserPanel;
