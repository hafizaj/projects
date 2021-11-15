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
            <Card inverted>
                    <Image src={this.props.thumbnail} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{this.props.name}</Card.Header>
                        {this.props.date && (
                        <Card.Meta>
                            <span className='date'>{this.props.date}</span>
                        </Card.Meta>)}
                        <Card.Description>
                            {
                            this.props.description && 
                            (<span className='date'>{this.props.date}</span>)
                            }
                        </Card.Description>
                        </Card.Content>
                </Card>
        );
    }
};

export default SingleProject;