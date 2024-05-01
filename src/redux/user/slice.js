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
            if(action.payload.name.length<=4){
                alert('Preencha o nome com pelo menos 4 caracteres!');
                return { ...state };
            }
            
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
        },
        logoutUser: (state) => {
            return {
                ...state,
                user:null,
            }
        },
        addAddress: (state, action) => {
            if(action.payload.location==='' || action.payload.number===''){
                alert("Preencha todos os campos!");
                return {...state};
            }

            if(state.user===null){
                
                alert("Faça o login para cadastrar o endereço!");
                return {...state};
            }

            alert('Dados atualizados!');

            return {
                ...state,
                user:{
                    ...state.user,
                    address: {
                        location: action.payload.location,
                        number: action.payload.number,
                    }
                }
            };
        }
    }
});

export const { createUser, logoutUser, addAddress } = userSlice.actions;

export default userSlice.reducer;