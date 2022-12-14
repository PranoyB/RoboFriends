import React from 'react';

class ErrorBoundary extends React.Component{
	constructor(props){
		super();
		this.state = {
			hasError: false
		}

	}

	componentDidCatch(error, info){
		this.setState({ hasError: true})
	}


	render(){
		if (this.state.hasError === 1){
			return <h1> Ooops. That is not good! </h1>
		}
		return this.props.children
	}

}



export default ErrorBoundary;