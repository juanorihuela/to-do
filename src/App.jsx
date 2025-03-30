import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import NewTask from "./components/NewTask"
import Card from "./components/Card"
import TaskItem from "./components/TaskItem"

import "./styles.scss"


function App() {
  const [tasks, setTasks] = useState({ inProgress: [], completed: [] });
  const [inProgressItems, setInProgressItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  const onSubmitHandle = (values) => {
    const taskValues = {
      id: uuidv4(),
      task: values.newTask,
      status: false
    }

    // hacemos un 'callback' para obtener los valores previos del estado
    setTasks((prev) => ({
      ...prev, // propagamos los valores previos
      inProgress: [ // sobreescribimos los valores de 'inProgress' con la lista actualizada
        ...prev.inProgress, taskValues
      ]
    }));
  };

  const onChangeHandle = (event) => {
    const taskId = event.target.id;

    if (event.target.checked) {
      const taskToComplete = tasks.inProgress.find(task => task.id === taskId);

      setTasks((prev) => ({
        inProgress: tasks.inProgress.filter(task => task.id !== taskId),
        completed: [...prev.completed, {...taskToComplete, status: true}]
      }));
    } else {
      const taskToComplete = tasks.completed.find(task => task.id === taskId);

      setTasks((prev) => ({
        inProgress: [...prev.inProgress, {...taskToComplete, status: false}],
        completed: tasks.completed.filter(task => task.id !== taskId)
      }));
    }
  };

  useEffect(() => {
    const inProgressItems = tasks.inProgress.map((task) => (
      <TaskItem key={task.id} taskData={task} onSubmitHandle={onChangeHandle} />
    ));
    setInProgressItems(inProgressItems);

    const completedItems = tasks.completed.map((task) => (
      <TaskItem key={task.id} taskData={task} onSubmitHandle={onChangeHandle} />
    ));
    setCompletedItems(completedItems);
  }, [tasks]);

  return (
    <div>
      <div id="formSection">
        <NewTask onSubmitHandle={onSubmitHandle} />
      </div>

      <div id="tasksSection">
        <Card
          inProgressList={inProgressItems}
          completedList={completedItems}
        />
      </div>
    </div>
  );
};

export default App;
