import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

export default function Board({darkMode}) {
    const [completed, setCompleted] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                setCompleted(json.filter((task) => task.completed));
                setIncomplete(json.filter((task) => !task.completed));
            })
            .catch((error) => {
                console.error("Error fetching todos:", error);
            });
    }, []);

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination || source.droppableId === destination.droppableId) return;
        const allTasks = [...incomplete, ...completed];
        const task = findItemById(draggableId, allTasks);
        if (!task) return;
        deletePreviousState(source.droppableId, draggableId);
        setNewState(destination.droppableId, task);
    };

    function deletePreviousState(sourceDroppableId, taskId) {
        switch (sourceDroppableId) {
            case "1":
                setIncomplete(prev => removeItemById(taskId, prev));
                break;
            case "2":
                setCompleted(prev => removeItemById(taskId, prev));
                break;
        }
    }

    function setNewState(destinationDroppableId, task) {
        let updatedTask;
        switch (destinationDroppableId) {
            case "1":  
                updatedTask = { ...task, completed: false };
                setIncomplete(prev => [updatedTask, ...prev]);
                break;
            case "2": 
                updatedTask = { ...task, completed: true };
                setCompleted(prev => [updatedTask, ...prev]);
                break;
        }
    }

    function findItemById(id, array) {
        return array.find((item) => String(item.id) === String(id));
    }

    function removeItemById(id, array) {
        return array.filter((item) => String(item.id) !== String(id));
    }
    if (!isClient) {
        return null;
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                    gap: "10px",
                    padding: "20px"
                }}
            >
                <Column darkMode={darkMode} title={"TO DO"} tasks={incomplete} id="1" />
                <Column darkMode={darkMode} title={"DONE"} tasks={completed} id="2" />
            </div>
        </DragDropContext>
    );
}