import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';


const business =
    {
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        name: 'Yolo Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    };

    const businessesArray = [
        business,
        business,
        business,
        business,
        business,
        business
];

class App extends Component {


    searchYelp(term, location, sortBy) {
        console.log(`You are searching for ${term}, ${location}, and ${sortBy} `);


    };

    render() {
        return (
            <div className="App">
                <h1>ravenous</h1>
                <SearchBar searchYelp={this.searchYelp}/>
                <BusinessList businessProp={businessesArray}/>
            </div>

        );
    }
}

export default App;