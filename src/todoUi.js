import refresh from './assets/images/refresh.jpg'
import enterArrow from './assets/images/arrow.png'
import dots from './assets/images/dots.png'

const todoUI = () => {
	return `
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
			<div class="tasks">
				<div class="task">
					<input type="checkbox" name="checkbox" id="complete" class="checkbox" />
					<span class="item">item-1</span>
				</div>
        <img src= ${dots} alt="refresh" >
			</div>
			<div class="clear"> 
			  <p> Clear all completed </p>
			</div>
      `

}

export default todoUI

