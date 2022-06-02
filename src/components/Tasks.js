import PropTypes from 'prop-types';
import Task from './Task'

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map(
        (task) => (
          <Task task={task} key={task.id} />
        )
      )}
    </div>
  );
};
Tasks.propTypes = {
  tasks: PropTypes.array,
};

export default Tasks;
