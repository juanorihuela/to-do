import { useState } from "react";

import NewTask from "./components/NewTask"


function App() {
  const [inProgress, setInProgress] = useState([]);

  const onSubmitEvent = (values) => {
    setInProgress([...inProgress, values]);
  };

  return (
    <div>
      <div id="formSection">
        <NewTask onSubmitEvent={onSubmitEvent} />
      </div>
    </div>
  )
};

export default App
