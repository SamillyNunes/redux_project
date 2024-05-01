 import { combineReducers } from "redux";

 // Sempre se atentar a importar algo sem chaves quando foi exportado como default, caso contrario tera problemas
 import userSlice from "./user/slice";

 export default combineReducers({
    user: userSlice,
 });