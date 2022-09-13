import React from 'react';
import {Segment, Card, Icon} from 'semantic-ui-react';
interface Project {
    name:String, 
    description?:String,
    date?:String,
    thumbnail:String
};

const extra = (
    <a href='localhost:5000'>
      <Icon name='user' />
      16 Friends
    </a>
  )

class SingleProject extends React.Component<Project, {}> {
    render() {
        return (
            <Segment raised inverted>
                <Card
                extra={extra}
                > 
                    <Card.Content>
                        <Card.Header as='h2'
                            inverted>{this.props.name}</Card.Header>
                        {this.props.date && (
                        <Card.Meta>
                            <span className='date'>{this.props.date}</span>
                        </Card.Meta>)}
                        <Card.Description>
                            {
                            this.props.description && 
                            (<span className='description'>{this.props.description}</span>)
                            }
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Segment>
        );
    }
};

export default SingleProject;