import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState =  {
   count:[{id:1,number:1}] 
}

export const countSlice = createSlice({
    name: 'counts',
    initialState,
    reducers :{
        SUMcount: (state,action)=>{
            const newcount = {
             id:nanoid(),
             number:action.payload
            }
            state.count.push(newcount)
        },
        SUBcount:(state,action)=>{
            const newcount = {
                
            }
        },
        MULcount:(state,action)=>{

        },
        DEVcount:(state,action)=>{

        }

    }
})
export const {SUMcount,SUBcount,MULcount,DEVcount} = countSlice.actions
    