import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) =>{
	return(
		<div>
			<p>{props.part} {props.num}</p>
		</div>
	)
}
const Content = (props) =>{
	return(
		<div>
		  <Part part={props.part1} num={props.num1}/>
	      <Part part={props.part2} num={props.num2}/>
	      <Part part={props.part3} num={props.num3}/>
			
		</div>
	)
}
const Header = (props) =>{
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
}
const Total = (props) =>{
	return(
		<>
			<p>Number of exercises {props.num1 + props.num2 + props.num3}</p>
		</>
	)
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1 ={part1} part2={part2} part3={part3} num1={exercises1} num2={exercises2} num3={exercises3}/>
      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

