import React from "react";

const UserTable = (props) => {
   // console.log(props.users)
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Password</th>
                    <th>Phone Number</th>
                    <th>City Code</th>
                    <th>Contry Code</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user =>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.phone.number}</td>
                            <td>{user.phone.citycode}</td>
                            <td>{user.phone.contrycode}</td>
                            <td>
                                <button 
                                    className="button muted-button"
                                    onClick={
                                        () => {props.editRow(user)}
                                    }
                                >Edit</button>
                                <button 
                                    className="button muted-button"
                                    onClick={() => {props.deleteUser(user.id)}}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))

                ) : (
                    <tr>
                    <td colSpan={7}>No users :'( </td>
                    </tr>
                )}

            </tbody>
        </table>
    );
}

export default UserTable;