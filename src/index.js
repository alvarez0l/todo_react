import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



// #1
// class App extends React.Component {
//     render () {
//         return (
//             <div>
//                 <Header/>
//                 <Greeting />
//             </div>
//         )
//     }
// }

// // #2
// class Header extends React.Component {
//     constructor () {
//         super();
//         this.state = {
//             username: "Admin"
//         }
//     }
//     render () {
//         return (
//             <header>
//                 <p>Welcome, {this.state.username}!</p>
//             </header>
//         )
//     }
// }

// // #3
// class Greeting extends React.Component {
//     render () {
//         const date = new Date()
//         const hours = date.getHours()
//         let timeOfDay
//         if (hours < 12) {
//             timeOfDay = "morning"
//         } else if (hours >= 12 && hours < 17) {
//             timeOfDay = "day"
//         } else {
//             timeOfDay = "night"
//         }
//         return (
//             <h1>Good {timeOfDay} to you, sir or madam!</h1>
//         )
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)
    