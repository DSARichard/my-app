import PropTypes from 'prop-types';

const Tasks = ({ tasks }) => {
  return (
    <span>
      {tasks.map(
        (task) => (
          <span key={task.id}>{task.text}</span>
        )
      )}
    </span>
  );
};
Tasks.propTypes = {
  tasks: PropTypes.object,
};

export default Tasks;
