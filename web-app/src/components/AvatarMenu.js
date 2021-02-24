
import React from 'react'
import { Dropdown, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';

// Must have a separate component in order to avoid errors regarding Menu.hover properties
function ProfileLink(props) {
    return (
        <Link to="/profile">
            <Menu.Item {...props} key="profile">Profile</Menu.Item>
        </Link>
    );
}

function PageMenu(props) {
    return (
        <Menu {...props}>
            <Menu.ItemGroup title={props.username}>
                <ProfileLink />
                <Menu.Item key="events">User Settings</Menu.Item>
                <Menu.Item key="logout">Log Out</Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    );
}

class ContentSelect extends React.Component {
    render() {
        return (
            <Dropdown overlay={PageMenu(this.props)}>
                <Avatar style={{ cursor: 'pointer' }} size="large" icon={this.props.userIcon} />
            </Dropdown>
        )
    };
}

export default ContentSelect;