import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NewTask from "./components/NewTask"


function App() {
  const [tasks, setTasks] = useState({inProgress: [], completed: []});

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

  return (
    <div>
      <div id="formSection">
        <NewTask onSubmitHandle={onSubmitHandle} />
      </div>
    </div>
  );
};

export default App;
