import React, {Component} from 'react';

/*
Mounting
 - constructor
 - render
 - componentDidMount
Updating
 - shouldComponentUpdate
 - render
 - componentDidUpdate
Unmounting
 - componentWillUnmount
 */

//тут мы изучаи жизенныей цикл компонента и в консоли что-то прописывали

class Counter extends Component {

    constructor(props) {
        super(props);
        console.log("I'm constructor");
        this.state = {
            users: []
        }
    }

    fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        this.setState(this.prepareUsersArray( await response.json() ));
    }

    prepareUsersArray = (users) => {
        return {...this.state, users}
    }

    componentDidMount() {
        console.log("I'm Did Mount");
        this.fetchUsers();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log( "I'm should Component Update" );
        console.log( this.state );
        console.log( nextState );
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log( "I'm did Component Update" );
        console.log( this.state );
        console.log( prevState );
    }

    componentWillUnmount() {
        console.log("I'm will unmount");
    }

    render() {
        console.log("I'm Render");
        return (
            <div>
                I'm Counter
                <br/>
                <button>ClickMe</button>
            </div>
        );
    }
}

export default Counter;