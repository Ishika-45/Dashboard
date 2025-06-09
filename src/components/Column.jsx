import React from "react";
import styled from "styled-components";
import Card from "./Card";
import "./scroll.css";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  border-radius: 16px;
  width: 300px;
  height: 600px;
  overflow-y: scroll;
  border: 1px solid gray;
`;

const Title = styled.h3`
  padding: 8px;
  background-color: lightblue;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const TaskList = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.$isDraggingOver ? "#d3f9d8" : "#f4f5f7",
  },
}))`
  padding: 3px;
  transition: background-color 0.2s ease;
  flex-grow: 1;
  min-height: 100px;
`;

export default function Column({ title, tasks, id, darkMode }) {
  return (
    <Container className={`${darkMode ? "bg-zinc-700 text-white" : "bg-gray-50"}`}>
      <Title>{title}</Title>
      <Droppable 
        droppableId={id} 
        isDropDisabled={false}
        isCombineEnabled={false}
        ignoreContainerClipping={false}
      >
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            $isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks && tasks.length > 0 ? (
              tasks.map((task, index) => (
                <Card key={task.id} index={index} task={task} />
              ))
            ) : (
              <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                No tasks
              </div>
            )}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}