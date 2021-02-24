
import React from 'react'
import { Dropdown, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';


const MenuItemExtracted = props => {
    return <Menu {...props}>{props.children} </Menu>
}

function PageMenu(props) {
    return (
        <Menu {...props}>
            <Menu.ItemGroup  title={props.username}>
                <Link to="/profile">
                    <Menu.Item  key="profile">Profile</Menu.Item>
                </Link>
                <Menu.Item  key="events">User Settings</Menu.Item>
                <Menu.Item  key="logout">Log Out</Menu.Item>
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