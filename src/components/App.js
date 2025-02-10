import React from 'react';
import TodoItem from './TodoItem';
import userData from "./userData"

const styles = {
    backgroundColor: '#AFEEEE'
}

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            data: userData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const newCompleted = prevState.data.map(item => {;
                if(item.id === id) {
                    item.completed = !item.completed
                }
                return item
            })
            return {data: newCompleted}
        })
    }
    render () {
        const userComponents = this.state.data.map(item => <li><TodoItem key={item.id} user={item} handleChange={this.handleChange} /></li>)
        return(
            <div className='wrapper'>
                <h2>Todo List:</h2> 
                <ol style={styles}>
                    {userComponents}
                </ol>
            </div>
        )
    }
};

export default App;