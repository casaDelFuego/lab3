import React from 'react';
import SingleHero from './SingleHero';

const HeroesList = props => {
	let list = null;
	if( props.list ) {
		list = props.list.map(hero => (
      <SingleHero key={hero.id} hero={hero} />
		));
	}
	return (
		<div>
			<h1>Superheroes</h1>
			<ul className="HeroesList"> {list} </ul>
		</div>
	)
};

export default HeroesList;
