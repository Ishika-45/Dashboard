import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'

const Container = styled.div`
    border-radius: 10px;
    box-shadow: 5px 5px 5px 2px grey;
    padding: 8px;
    color: #000;
    margin-bottom: 8px;
    min-height: 120px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: ${(props) => bgcolorChange(props)};
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const TextContent = styled.div``;

function bgcolorChange(props) {
  return props.isDragging
    ? "lightgreen"
    : props.isDraggable
      ? props.isBacklog
        ? "#F2D7D5"
        : "#DCDCDC"
      : props.isBacklog
        ? "#F2D7D5"
        : "#EAFAFC";
}

export default function Task({ task, index }) {
  
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index} >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}>

          <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
            <span>
              <small>
                #{task.id}
                {" "}
              </small>
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "center", padding: 2 }}>
            <TextContent>{task.title}</TextContent>
          </div>

          {provided.placeholder}

        </Container>
      )}
    </Draggable>
  );
}
