import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { delUser } from './userReducer';
function Crud() {
   const users = useSelector((state)=>state.users); 
   //console.log(users);
   const Dispatch = useDispatch()
  function handleDelete(id){
     Dispatch(
        delUser({
          id:id
        })
     )
   }
    return(
        <div className="container" style={{backgroundColor:"lavender"}}>
            <h2>Crud App with JSON server</h2>
            <Link to="/create" className="btn btn-primary my-3">Create +</Link>
            <table className="table">
              <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    users.map((user,i)=>
                       <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/update/${user.id}`} className='btn btn-success mx-3 '>edit</Link>
                            <button onClick={()=>handleDelete(user.id)} className='btn btn-danger'>delete</button>
                        </td>
                       </tr>  
                        )
                }
              </tbody>
            </table>
        </div>
    )
}

export default Crud