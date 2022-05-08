import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

import EditTask from "../EditTask/EditTask";
import TaskItem from "./TaskItem";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContainerUI from "../../UI/ContainerUI";
import { styled } from "@mui/system";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const UlComponent = styled("ul")({
  paddingLeft: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
});

const TaskList = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.list.tasks);
  const totalQuantityOfTasks = useSelector((state) => state.list.totalQuantity);

  // const [allTask, setAllTask] = useState(tasks);
  const [editTaskId, setEditTaskId] = useState();
  const [modalDefaultTaskText, setModalDefaultTaskText] = useState("");
  const [modalDefaultImportance, setModalDefaultImportance] = useState("");

  const [isModalShown, setIsModalShown] = useState(false);

  const openModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  const startEditingHandler = (taskText, index, importance, id) => {
    setEditTaskId(id);
    setModalDefaultTaskText(taskText);
    setModalDefaultImportance(importance);
    openModalHandler();
  };

  const removeItemHandler = (id) => {
    dispatch(listActions.removeTaskFromList(id));
  };

  // useEffect(() => {
  //   console.log("somehow, rendering !!");
  //   setAllTask(
  //     tasks.map((task, index) => {
  //       return (
  //         <TaskItem
  //           key={index}
  //           index={index}
  //           id={task.id}
  //           taskText={task.taskText}
  //           dueDate={task.dueDate}
  //           importance={task.importance}
  //           onStartEditing={() =>
  //             startEditingHandler(
  //               task.taskText,
  //               index,
  //               task.importance,
  //               task.id
  //             )
  //           }
  //           onRemoveItem={removeItemHandler.bind(null, task.id)}
  //         />
  //       );
  //     })
  //   );
  // }, [tasks]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    // if (
    //   destination.droppableId === source.droppableId
    //   &&
    //   destination.droppableIndex === source.droppableIndex
    // )
    //   return;

    let add,
      active = tasks;
    if (
      source.droppableId === "TodoList" &&
      destination.droppableId === "TodoList"
    ) {
      // test
      console.log(active);
      dispatch(
        listActions.manipulateTasksOrder({
          add: active[source.index],
          active: active,
          sourceIndex: source.index,
          destinationIndex: destination.index,
        })
      );
      // add = active[source.index];
      // console.log(add);
      // active.splice(source.index, 1);
      // active.splice(destination.index, 0, add);
    }

    const valObj = {
      add: active[source.index],
      active: tasks,
      sourceIndex: source.index,
      destinationIndex: destination.index,
    };

    // setAllTask(active);
  };

  return (
    <ContainerUI>
      <Box
        sx={{
          bgcolor: "background.paper",
          height: "100%",
          minHeight: "300px",
          textAlign: "center",
          borderRadius: "12px",
        }}
        paddingTop={2}
        paddingBottom={2}
      >
        {isModalShown && (
          <EditTask
            onOpen={openModalHandler}
            onClose={closeModalHandler}
            editTaskId={editTaskId}
            defaultTaskText={modalDefaultTaskText}
            defaultImportance={modalDefaultImportance}
          />
        )}
        <DragDropContext onDragEnd={onDragEnd}>
          <ContainerUI>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography
                variant="h5"
                component="h2"
                color="text.primary"
                paddingRight={4}
              >
                Task List
              </Typography>
              <Typography variant="body1" component="span" color="text.primary">
                {totalQuantityOfTasks} tasks left.
              </Typography>
            </Box>
            <UlComponent>
              <Droppable droppableId="TodoList">
                {(provided) => (
                  <div
                    className="todos"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {/* temporary */}
                    {tasks.map((task, index) => {
                      return (
                        <TaskItem
                          key={task.id}
                          index={index}
                          id={task.id}
                          taskText={task.taskText}
                          dueDate={task.dueDate}
                          importance={task.importance}
                          onStartEditing={() =>
                            startEditingHandler(
                              task.taskText,
                              index,
                              task.importance,
                              task.id
                            )
                          }
                          onRemoveItem={removeItemHandler.bind(null, task.id)}
                        />
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </UlComponent>
          </ContainerUI>
        </DragDropContext>
      </Box>
    </ContainerUI>
  );
};

export default TaskList;
