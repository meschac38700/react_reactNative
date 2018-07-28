//import ReactDOM from 'react-dom';

class TP extends React.Component
{
	constructor( props )
	{
		super( props );
		this.state = {
			count: 0
		};
		console.log(this.props);
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment()
	{
		this.setState({
			count: this.state.count + 1
		});
	}

	decrement()
	{
		this.state.count > 0 && this.setState({count: this.state.count-1})
		/*if( this.state.count > 0 )
		{
			this.setState({
				count: this.state.count - 1
			});			
		}*/
	}

	render(){
		return (
			<div>
				<h1 style={ {color:this.props.color} } >Je connais {this.state.count} langages de programmation</h1>
				<button onClick={this.increment}> J'ai appris un nouveau langage< /button>
				<button onClick={this.decrement}> J'ai oublié un langage </button>
			</div>
		);
	};

}

class App extends React.Component
{
	render()
	{
		return (
			<div>
				<TP color="red"/>
				<TP color="green"/>
				<TP color="blue"/>
			</div>
		);
	}
}
ReactDOM.render(<App/>, document.getElementById('root'))