import React from 'react';
import { Button, Card, Typography } from 'antd';

function Profile() {
    return (
        <Card cover={<img alt="example" src="https://www.adventuresnt.com.au/wp-content/uploads/2015/03/banner-placeholder.jpg" />} >
            <Typography.Title level={4}>User Name</Typography.Title>
            <p>Brief about of user</p>
            <Button type='primary' block={true}>Edit profile</Button>
        </Card>
    );
}
export default Profile;