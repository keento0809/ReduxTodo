import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listActions } from "../../../store/list-slice";

import EditTask from "../EditTask/EditTask";
import TaskItem from "./TaskItem";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContainerUI from "../../UI/ContainerUI";
import { styled } from "@mui/system";

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

  const [allTask, setAllTask] = useState(tasks);
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

  useEffect(() => {
    setAllTask(
      tasks.map((task, index) => {
        return (
          <TaskItem
            key={index}
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
      })
    );
  }, [tasks]);

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
          <UlComponent>{allTask}</UlComponent>
        </ContainerUI>
      </Box>
    </ContainerUI>
  );
};

export default TaskList;
