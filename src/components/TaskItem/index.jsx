import "./styles.scss"


function TaskItem({ taskData, onSubmitHandle }) {
    return (
        <div key={taskData.id} className="itemContainer">
            <input
                id={taskData.id}
                checked={taskData.status}
                type="checkbox"
                onChange={onSubmitHandle}
            />
            <h4 className={`taskValue ${taskData.status == true ? 'completed' : null}`}>{taskData.task}</h4>
        </div>
    );
};

export default TaskItem;
