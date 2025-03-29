function Card({ inProgressList, completedList }) {
    return (
        <div>
            <div className="inProgressTask">
                <h4>en progreso</h4>
                {inProgressList}
            </div>
            <hr />
            <div className="completedTask">
                <h4>completadas</h4>
                {completedList}
            </div>
        </div>
    );
};

export default Card;
