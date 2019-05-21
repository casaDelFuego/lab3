import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import './App.css';

import AddHero from './components/AddHero';
import FindHero from './components/FindHero';
import HeroesList from './components/HeroesList';



const App = () => {

  const [heroesData, setHeroesData] = useState(null);

  useEffect(() => {
  		const db = firebase.firestore();
  		const superheroesCollection = db.collection('Superheroes');
  		superheroesCollection.onSnapshot(snapshot => {
  			console.log('We got some heroes', snapshot);
  			let list = [];
  			snapshot.forEach(doc => {
          console.log('this data', doc.data());
  				let obj = {
  					...doc.data(),
  					id: doc.id
  				};
  				list.push(obj);
  			})
        console.log('We got some heroes', list);
  			setHeroesData(list);
  		})
  	}, [])

  return (
    <div className="App">
      <h3>The list</h3>
      <HeroesList list={heroesData}/>
      <AddHero/>
      <FindHero/>

    </div>
  );
}

export default App;
