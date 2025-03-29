function TaskItem({ taskData, onSubmitHandle }) {
    return (
        <div key={taskData.id}>
            <input
                id={taskData.id}
                checked={taskData.status}
                type="checkbox"
                onChange={onSubmitHandle}
            />
            <h4>{taskData.task}</h4>
        </div>
    );
};

export default TaskItem;
