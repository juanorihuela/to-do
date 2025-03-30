import "./styles.scss"


function Card({ inProgressList, completedList }) {
    return (
        <div className="cardContainer">
            <h4 className="cardTitle">en progreso</h4>
            <div className="inProgressContent">
                {inProgressList}
            </div>

            <hr />

            <h4 className="cardTitle">completadas</h4>
            <div className="completedContent">
                {completedList}
            </div>
        </div>
    );
};

export default Card;
