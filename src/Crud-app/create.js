import { useState } from "react"
import { addUser } from "./userReducer"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
function Create(){
    const [name , setName] = useState('dr')
    const [email , setEmail] = useState('ns@gmail')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector((state)=>state.users); 
    function handleSubmit(event){
        event.preventDefault()
        dispatch(addUser({
          id:users[users.length-1].id +1,
          name,
          email
        })
      )
          navigate('/')
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
          <h3>Add new user</h3>
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" className="form-control"/>
            </div>
            <div>
            <label htmlFor="name">Email:</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}name="email" className="form-control"/>
            </div> <br />
            <button className="btn btn-info">Submit</button>
          </form>
        </div>
        </div>
    )
}
export default Create