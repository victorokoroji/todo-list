import refresh from './assets/images/refresh.jpg';
import enterArrow from './assets/images/arrow.png';

const todoUI = () => `
<div class="title">
<h3>Today's To Do</h3>
<img src= ${refresh} alt="refresh" >
</div>
<div class="form-element">
<input
type="text"
id="description"
name="description"
class="input"
placeholder="Add to your list..."
/>
<img src=${enterArrow} class="enter" alt="enter" >
</div>
<div class="todo-container">
</div>
<div class="clear"> 
<p> Clear all completed </p>
</div>
`;

export default todoUI;
