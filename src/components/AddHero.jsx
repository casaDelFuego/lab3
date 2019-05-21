import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


class AddHero extends React.Component {
	state = {
		heroName: '',
    universe: ''
	}
	handleChangeNameInput = e => {
		this.setState( Object.assign({},this.state,{ heroName: e.target.value }));
	}

  handleChangeUniverseInput = e => {
    this.setState( Object.assign({},this.state,{ universe: e.target.value }));
  }

	handleClickAdd = e => {
		let obj = { name: this.state.heroName, universe: this.state.universe };
		const collectionRef = firebase.firestore().collection('Superheroes');
		collectionRef.add(obj)
		.then(() => {
			console.log('Added hero!');

		})
		.catch(error => {
			console.log('Could not add hero!');
		})
	}
	render() {
		return (
			<div>
			Add a hero: <br/>
			<input placeholder="name" type="text" value={this.state.heroName}
			 	onChange={this.handleChangeNameInput} />
      <input placeholder="universe" type="text" value={this.state.universe}
          onChange={this.handleChangeUniverseInput} />
			<button onClick={this.handleClickAdd}>Add</button>
			</div>
		)
	}
}

export default AddHero;
