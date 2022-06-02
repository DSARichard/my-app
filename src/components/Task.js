import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

function zfill(val, zeros) {
  return ("0".repeat(zeros - 1) + val).slice(-zeros);
}

const Task = ({ task, onDelete }) => {
  const time = task.time;
  return (
    <div className="task">
      <h3>
        {task.text}
        <FaTimes style={{ color: "red", cursor: "pointer", }} onClick={() => onDelete(task.id)} />
      </h3>
      {zfill(time.month + 1, 2)}/{zfill(time.day + 1, 2)}/{time.year + 2000} {zfill((time.hour%12 === 0) ? 12 : time.hour%12, 2)}:{zfill(time.minute, 2)}:{zfill(time.second, 2)} {(time.hour < 12) ? "AM" : "PM"}
    </div>
  );
};
Task.propTypes = {
  task: PropTypes.array,
};

export default Task;
