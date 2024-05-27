import { createSlice } from '@reduxjs/toolkit'
import { userList } from './data'
// name of action
// initialstate
// reducer

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            //    console.log(action);
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const uu = state.find(user => user.id == id);
            if (uu) {
                uu.name = name;
                uu.email = email
            }
        },
        delUser: (state, action) => {
            //    console.log(action);
            const {id} = action.payload
            const du = state.find(user => user.id == id)
            if(du){
                return state.filter(f => f.id !== id)
            }
        }
    }
})

export const { addUser, updateUser , delUser } = userSlice.actions;
export default userSlice.reducer