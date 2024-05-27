import { useNavigate, useParams } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { updateUser } from "./userReducer";

const Update =()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
        
        const {id} = useParams();
        const users = useSelector((state)=>state.users)
        //console.log(users);
        const existingUser = users.filter(f => f.id == id);
        //console.log(existingUser);
        const {name,email} = existingUser[0]
        const [uname,setName] = useState(name)
        const [uemail,setEmail] = useState(email)

        const handleForm = (event) => {
            event.preventDefault();
            dispatch(updateUser({
                id : id,
                name : uname,
                email :uemail,
            }))
            navigate('/')
        }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
          <h3>Update existing user</h3>
          <form onSubmit={handleForm}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" value={uname} onChange={(e)=>setName(e.target.value)}  name="name" className="form-control"/>
            </div>
            <div>
            <label htmlFor="name">Email:</label>
            <input type="email" value={uemail} onChange={(e)=>setEmail(e.target.value)} name="email" className="form-control"/>
            </div> <br />
            <button className="btn btn-info">Update</button>
          </form>
        </div>
        </div>
    )
}
export default Update