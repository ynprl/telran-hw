import React, {useEffect, useState} from 'react';

const UsersList = () => {

    //хуки для стэйтов хера и туду
    const [users, setUsers] = useState([]);
    const [todos, setTodos] = useState([]);

   //вывоз функции тянущей юзеров со стабы
    useEffect(()=>{
        fetchUsers();
    },[]);

    //определяем, что начальный стйэт юзер null
    const [activeUser, setActiveUser] = useState(null);

    //меняем стэйт юзера с неактивного на активный и наооборот
    useEffect(()=>{
        if (!activeUser) return;
        fetchTodos();
    }, [activeUser])

    //берем юзеров со стабы, если не получается, пишем ошибку в лог без падений с ошибками
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await response.json());
        } catch(e) {
            console.log( e.message );
        }
    }

    //берем туду со стабы, если не получается, пишем ошибку в лог без падений с ошибками
    const fetchTodos = async () => {
        console.log( activeUser )
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + activeUser.id);
            setTodos(await response.json());
        } catch(e) {
            console.log( e.message );
        }
    }

    //выбираем активного юзера по клику
    const clickUserHandler = (user) => {
        setActiveUser(user);
    }

    //рисуем юзеров. если не забрали никого - то просто пишем "No Users", иначе рисуем в формате
    //<div className="list-group-item">USERNAME</div>//
    const renderUsers = () => {
        if (!users.length) return <div className="list-group-item list-group-item-danger">No Users</div>
        return users.map( (user) =>
            <div
                key={user.id}
                className="list-group-item"
                onClick={() => {clickUserHandler(user)}}
            >{user.name}
            </div>
        )
    }
    //рисуем туду к выбраному юзеру. если нету - то просто пишем "No Deals", иначе рисуем в формате
    // <div class="list-group-item">TO DO</div>
    const renderTodos = () => {
        if (!todos.length) return <div className="list-group-item list-group-item-danger">No Deals</div>
        return todos.map( (todo) => <div key={todo.id} className="list-group-item">{todo.title}</div>)
    }
    //рендер
    return (
        <div className="row">
            <div className="col">
                <div className="list-group">
                    {renderUsers()}
                </div>
            </div>
            <div className="col">
                <div className="list-group">
                    {renderTodos()}
                </div>
            </div>
        </div>
    )
}

export default UsersList