import React, { useReducer } from "react";
import { Card, Button, Icon, Image} from "semantic-ui-react";
import styled from 'styled-components'

const PreviewImage = styled(Image)`
    /* &:hover {
        opacity: 0.8
    } */
    height: auto;
`
const PreviewDiv = styled.div`
    flex: none;
    ${PreviewImage}:hover & {
        opacity: 0.8
    }
`

interface Project {
    name:string, 
    description?:string,
    date?:string,
    thumbnail:string
};

function ExtraContentAccordionClosed({ onClick}: {onClick: any}) {
  return (
    <Card.Content extra>
      <Button basic circular icon size="tiny" onClick={onClick}>
        <Icon name="plus circle" />
      </Button>
      Show More
    </Card.Content>
  );
}

function ExtraContentAccordionOpened({ content, onClick}: {content:any, onClick: any}) {
  return (
    <>
      <Card.Content extra>{content}</Card.Content>
      <Card.Content extra>
        <Button basic circular icon size="tiny" onClick={onClick}>
          <Icon name="minus circle" />
        </Button>
        Show Less
      </Card.Content>
    </>
  );
}

function ExtraContentAccordion({ open, content, onToggle }: { open:any, content:any, onToggle:any}) {
  return open === true ? (
    <ExtraContentAccordionOpened content={content} onClick={onToggle} />
  ) : (
    <ExtraContentAccordionClosed onClick={onToggle} />
  );
}

function cardStateReducer(state: any, { type, payload }: { type:any, payload:any}) {
  if (type === "TOGGLE") {
    var index = payload.card;
    var value = state[index];
    return [
      ...state.slice(0, index),
      !value,
      ...state.slice(index + 1, Infinity)
    ];
  }

  return state;
}


function ProjectCard(projects: Array<Project>) {
  const [state, dispatch] = useReducer(cardStateReducer, [
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  function toggleCard(card: any) {
    return function() {
      dispatch({ type: "TOGGLE", payload: { card } });
    };
  }
  const basePath: string = './res/img/'
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <Card.Group itemsPerRow={3}>
        {projects && projects.map((elem, i) => {
        return (
            <>
             <Card>
                <Card.Content>                    
                    <Card.Header>{elem.name}</Card.Header>
                    <Card.Meta>{elem.date}</Card.Meta>
                    <Card.Content>{elem.description}</Card.Content>
                </Card.Content>
                <ExtraContentAccordion
                content={
                    <PreviewDiv>
                        <PreviewImage src={basePath.concat(elem.thumbnail)} />
                    </PreviewDiv>
                }
                onToggle={toggleCard(i)}
                open={state[i]}
                />
            </Card>
            </>
            )
        })};
      </Card.Group>
    </>
  );
}

export default ProjectCard;
