import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const SingleHero = ({ hero }) => {
	const [editMode, setEditMode] = useState(false);
	const [inputName, setInputName] = useState(hero.name);
  const [inputUniverse, setInputUniverse] = useState(hero.universe)

	const deleteHero = () => {
		// skapa databas, välja collection, hämta rätt document, delete
		firebase.firestore().collection('Superheroes').doc(hero.id).delete()
		.then(() => console.log('removal succeed'))
	}

	const saveChanges = () => {
		setEditMode(false);
		firebase.firestore().collection('Superheroes').doc(hero.id).update({ name: inputName })
    firebase.firestore().collection('Superheroes').doc(hero.id).update({ universe: inputUniverse })
	}

	const editHero = () => {
		setEditMode(true);
	}

	let maybeName = hero.name;
	if( editMode ) {
		maybeName = (
			<input type="text"
				value={inputName}
				onChange={e => setInputName(e.target.value)}
				onBlur={saveChanges} />
		);
	}

  let maybeUniverse = hero.universe;
  if( editMode ) {
    maybeUniverse = (
      <input type="text"
        value={inputUniverse}
        onChange={e => setInputUniverse(e.target.value)}
        onBlur={saveChanges} />
    );
  }

	return (
		<li className="HeroesList">
			{maybeName} - {maybeUniverse}
			<button onClick={editHero}>Edit</button>
			<button onClick={deleteHero}>Delete</button>
		</li>
	)
}

export default SingleHero;
