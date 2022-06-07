import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(!text) {
      alert("lol");
      return;
    }
    onAdd({ text, date, reminder });
    setText("");
    setDate("");
    setReminder(false);
  };
  onSubmit.propTypes = {
    e: PropTypes.object,
  };
  
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task Name</label>
        <input
          type="text" placeholder="Add Task"
          value={text} onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date and Time</label>
        <input
          type="text" placeholder="Add Date and Time"
          value={date} onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      
      <input type="submit" value="Save Task" className="btn btn-block form" />
    </form>
  );
};
AddTask.propTypes = {
  onAdd: PropTypes.func,
};

export default AddTask;
