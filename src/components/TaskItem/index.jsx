function TaskItem({ taskData }) {
    return (
        <div key={taskData.newTask}>
            <input type="checkbox" checked={taskData.status} />
            <h4>{taskData.newTask}</h4>
        </div>
    );
};

export default TaskItem;
