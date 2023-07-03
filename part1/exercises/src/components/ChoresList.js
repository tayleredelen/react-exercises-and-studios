import classes from './ChoresList.module.css';

export default function ChoresList() {
      const chores = ["Fix React Textbook", "It doesn't ever say to add chores", "Or how to implement the CSS changes we make"];
  return (
    <div>
      <p className={classes.choresText}>The textbook never said to add chores</p>
      <h1 className={classes.choresHeading}>Chores List</h1>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
    </div>
  );
}