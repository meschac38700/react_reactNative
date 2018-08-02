
const ROUTES = {
	home : "/",
	completeTasks: "/complete-tasks",
	incompleteTasks: "/incomplete-tasks"
}
const TaskList = (props) => 
			<div>
				<h1>{props.title}</h1>
				{  props.tasks.map( ( task, index) => <Task key={task.id} task = {task}/>
				)};
			</div>

const Task = (props) =>
		<article >
			<h3>#{props.task.id} - {props.task.description} { props.task.complete?'✔' : '❌'} </h3>
		</article>

const NotFound = () => <h1>Page Not Found</h1>

class TaskApp extends React.Component
{
	constructor( props )
	{
		super( props )
		this.state = {
			tasks : [
				{
					id : 1,
					description: "Go to bed",
					complete: false
				},
				{
					id : 2,
					description: "Go to the cinema",
					complete: true
				},
				{
					id : 3,
					description: "eat something a cake before go bed",
					complete: false
				}
			]
		}

		this.getAllTasks = this.getAllTasks.bind(this);
		this.getCompleteTasks = this.getCompleteTasks.bind(this);
		this.getIncompleteTasks = this.getIncompleteTasks.bind(this);
	}

	/**
	*	router
	*/
	renderRoute()
	{
		if( window.location.pathname.toLowerCase() == ROUTES.completeTasks)
		{
			return <TaskList tasks={this.getCompleteTasks()} title="Complete Tasks"/>
		}
		else if( window.location.pathname.toLowerCase() == ROUTES.incompleteTasks )
		{
			return 	<TaskList tasks={this.getIncompleteTasks()} title="Incomplete Tacks"/>
		}
		else if( window.location.pathname == ROUTES.home) 
		{
				return <TaskList tasks={this.getAllTasks()} title="All Title"/>
		}
		else
		{
			return <NotFound/>
		}

		return <h1>HEllo</h1> 
	}

	render()
	{
		
		return (
			<div>
				<ul>
					<li><a href={ROUTES.home}>All tasks</a></li>	
					<li><a href={ROUTES.completeTasks}>Complete tasks</a></li>	
					<li><a href={ROUTES.incompleteTasks}>Incomplete tasks</a></li>	
				</ul>
				{this.renderRoute()}
			</div>
			
		);
	};

	getAllTasks()
	{
		return this.state.tasks;
	}

	getCompleteTasks()
	{
		return this.state.tasks.filter( task => task.complete );
	}

	getIncompleteTasks()
	{
		return this.state.tasks.filter( task => !task.complete);
	}
}
ReactDOM.render(<TaskApp/>, document.getElementById('root'));