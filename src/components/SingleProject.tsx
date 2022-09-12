import React from 'react';
import {Card, Image} from 'semantic-ui-react';

interface Project {
    name:String, 
    description?:String,
    date?:String,
    thumbnail:String
};

class SingleProject extends React.Component<Project, {}> {
    render() {
        return (
            <Card>
                <Image src={this.props.thumbnail} wrapped ui={false} />
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
        );
    }
};

export default SingleProject;