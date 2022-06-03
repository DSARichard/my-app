import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

function zfill(val, zeros) {
  return ("0".repeat(zeros - 1) + val).slice(-zeros);
}

const Task = ({ task, onDelete, onToggle }) => {
  const time = task.time;
  return (
    <div onDoubleClick={() => onToggle(task.id)} className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text}
        <FaTimes style={{ color: "#D83B01", cursor: "pointer", }} onClick={() => onDelete(task.id)} />
      </h3>
      {zfill(time.month + 1, 2)}/{zfill(time.day + 1, 2)}/{time.year + 2000}&nbsp;
      {zfill(time.hour%12 === 0 ? 12 : time.hour%12, 2)}:{zfill(time.minute, 2)}:{zfill(time.second, 2)}&nbsp;
      {time.hour < 12 ? "AM" : "PM"}
    </div>
  );
};
Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
