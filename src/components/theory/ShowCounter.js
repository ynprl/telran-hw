import React, {useEffect, useState} from 'react';

const ShowCounter = (props) => {
    //хук для стэйта юзеров.
    const [users, setUsers] = useState([]);
    //пишем "первый раз" и вызываем функцию фетчинга юзеров.
    useEffect( () => {
        console.log('First time');
        fetchUsers();
    }, []);

    //берем юзеров со стабы, если не получается, пишем ошибку в лог без падений с ошибками
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await response.json());
        } catch (e) {
            console.log( e.message );
        }
    }
   //рисуем 'render'
    const logRender = () => {
        console.log('render');
        return <></>
    }
    //рисуем первого юзера
    useEffect(() => {
        console.log( users );
    }, [users])

    //рисуем 'render'
    useEffect(() => {
        console.log("Counter++")}, [props.counter])

    //рендер
    return (
        <div>
            { logRender() }
            <p>{props.counter}</p>
            <p>{users.length ? users[0].address.street : 'No Users'}</p>
        </div>

    );
}

export default ShowCounter