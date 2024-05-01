import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // definir quais serao as acoes que tera pra atualizar esse estado inicial do user
        createUser: (state, action) => {
            console.log(action.payload);
            
            // Aqui no retorno da funcao, esta acontecendo duas coisas: primeiro mantem o estado que ja se tem
            // fazendo isso no "...state", e depois alterando so as propriedades que se quer no user: {...}
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    address:null,
                }
            }
        }
    }
});

export const { createUser } = userSlice.actions;

export default userSlice.reducer;