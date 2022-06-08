import { useState } from 'react';
import PropTypes from 'prop-types';

function getDate() {
  let dateNow = new Date().toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit", hour12: false,
    minute: "2-digit",
    second: "2-digit",
  }).replaceAll(" ", "").replaceAll(",", "").replaceAll("/", "").replaceAll(":", "");
  dateNow = [[4, 4], [0, 2], [2, 2], [8, 2], [10, 2], [12, 2]].map((x) => Number(dateNow.substr(...x)));
  return dateNow;
}

const AddTask = ({ onAdd }) => {
  let [year, month, day, hour, minute, second] = getDate();
  console.log(year, month, day, hour, minute, second);
  
  const defaults = {
    text: "",
    date: "lol",
    reminder: false,
  }
  const [text, setText] = useState(defaults.text);
  const [date, setDate] = useState(defaults.date);
  const [reminder, setReminder] = useState(defaults.reminder);
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(!text) {
      alert("oof");
      return;
    }
    onAdd({ text, date, reminder });
    setText(defaults.text);
    setDate(defaults.date);
    setReminder(defaults.reminder);
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
        <div className="form-control sel">
          <div>
            Year:&nbsp;&nbsp;
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="yeet">yeet</option>
              <option value="lol">lol</option>
            </select>
          </div>
          <div>
            Month:&nbsp;&nbsp;
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="yeet">yeet</option>
              <option value="lol">lol</option>
            </select>
          </div>
          <div>
            Day:&nbsp;&nbsp;
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="yeet">yeet</option>
              <option value="lol">lol</option>
            </select>
          </div>
          <div>
            Hour:&nbsp;&nbsp;
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="yeet">yeet</option>
              <option value="lol">lol</option>
            </select>
          </div>
          <div>
            Minute:&nbsp;&nbsp;
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="yeet">yeet</option>
              <option value="lol">lol</option>
            </select>
          </div>
          <div>
            Second:&nbsp;&nbsp;
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="yeet">yeet</option>
              <option value="lol">lol</option>
            </select>
          </div>
        </div>
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
