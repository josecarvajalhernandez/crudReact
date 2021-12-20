import React, {useState} from "react";
import UserTable from "./components/UserTable";
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

import { v4 as uuidv4 } from 'uuid';


function App() {

    const usersData = [
        {id: uuidv4(), name: "Juan Rodriguez", email: "juan@rodriguez.org ", password: "hunter2" , phone:{number: "1234567" , citycode: "1" , contrycode: "57"}},
        {id: uuidv4(), name: "Juan nieves", email: "juan@got.la ", password: "wargo" , phone:{number: "0303456" , citycode: "2" , contrycode: "92"}},
        {id: uuidv4(), name: "capitan deadpool", email: "chimichanga@deadpool.boom ", password: "chimichanga" , phone:{number: "987654321" , citycode: "841" , contrycode: "57"}}
    ]
    //state
    const [users, setUsers] = useState(usersData);
    //Add Users
    const addUser = (user) => {
        user.id = uuidv4()
        setUsers([
            ...users,
            user
        ])
    }
    //Delete User
    const deleteUser = (id) =>{
        const arrayUser = users.filter(user=>user.id !== id);
        setUsers(arrayUser)
    }
    //Edit User
    const [editing, setEditing] = useState(false);

    const [currentUser, setCurrentUser] = useState({
        id: null, name: '', email: '', password: '', phone:{number: '' , citycode: '', contrycode: ''}
    })

    const editRow = (user) =>{
        //console.log(user)
        setEditing(true)
        setCurrentUser({
            id: user.id, name: user.name, email: user.email, password: user.password, phone:{number: user.phone.number , citycode: user.phone.citycode, contrycode: user.phone.citycode}
        })
    }

    const updateUser = (id, updateUser) => {
        setEditing(false);

        setUsers(users.map(user =>(user.id === id ? updateUser : user)));
    }

    return (
        <div className="container">
            <h1>CRUD con react, prueba Front</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {
                        editing ?(
                            <div>
                                <h2>Edit User</h2>
                                <EditUserForm
                                    currentUser={currentUser}
                                    updateUser={updateUser}
                               />
                            </div>
                        ):( <div>
                                <h2>Add user</h2>
                                <AddUserForm addUser={addUser}/>
                            </div>
                        )
                    }
                    
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable 
                        users={users} 
                        deleteUser={deleteUser} 
                        editRow={editRow}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
