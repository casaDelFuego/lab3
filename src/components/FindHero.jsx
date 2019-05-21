import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const FindHero = () => {
	const [doc, setDoc] = useState(null);
	const [inputId, setInputId] = useState('');

	const fetchDoc = () => {
		console.log('doc with id=' + inputId);
		firebase.firestore().collection('Superheroes').doc(inputId).get()
		.then(doc => {
			// Vi kan komma åt id genom doc.id
			if( doc.exists )
				setDoc(doc.data());
			else
				setDoc(null);
		})
		.catch(error => { console.log('error during fetching') })
	}

	let content = 'no docs!';
	if( doc ) {
		content = `Found doc: ${doc.name} - ${doc.universe}`;
	}
	return (
		<div>
			<input type="text"
			 	placeholder="document id"
				value={inputId}
				onChange={e => setInputId(e.target.value)} />
			<button onClick={fetchDoc}>Fetch</button>
			<p> {content} </p>
		</div>
	)
};

export default FindHero;
