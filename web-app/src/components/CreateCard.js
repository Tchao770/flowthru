
import React from 'react'
import { Button, Card, Typography } from 'antd'

class CreateCard extends React.Component {
    render() {
        return (
            <Card cover={<img alt="example" src="https://www.adventuresnt.com.au/wp-content/uploads/2015/03/banner-placeholder.jpg" />} >
                <Typography.Title level={4}>Home</Typography.Title>
                <p>Home is a place to explore and engage in the communities you are part of. Expand the platform by creating your own events and communities!</p>
                <Button type='primary' block={true}>Create Event</Button>
                <div style={{paddingTop: '12px'}}>
                    <Button block={true}>Create Community</Button>
                </div>
            </Card>
        )
    };
}

export default CreateCard;