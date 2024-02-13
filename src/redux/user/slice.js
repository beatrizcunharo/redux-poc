import { createSlice } from "@reduxjs/toolkit"; 
import { toast } from "react-toastify";

const initialState = {
    user: null,
    users: [],
    loading: false
}

export const userSlice = createSlice({
    name: "user", // nome do slice
    initialState,
    reducers: { // definir as ações para mudar o estado inicial. Onde ficam as actions
        createUser: (state, action) => { // o parâmetro state é o estado inicial. Action create user. Action recebe um payload que são os dados e um type que é a identificação
  
            return {
                ...state, 
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    address: null
                }
            }
        },
        logoutUser: (state) => {
            return {
                ...state,
                user: null
            }
        },
        addAddress: (state, action) => {
            if(action.payload.location === "" || action.payload.number === "") {
                toast.error("Preencha todos os campos...")
                return {...state}
            }

            if(state.user === null) {
                toast.error("Faça o login para cadastrar...")
                return {...state}
            }

            toast.success("Dados atualizados com sucesso...")

            return {
                ...state,
                user: {
                    ...state.user,
                    address: {
                        location: action.payload.location,
                        number: action.payload.number
                    }
                }
            }
        },
        deleteAddress: (state) => {
            return {
                ...state,
                user: {
                    ...state.user,
                    address: null
                }
            }
        },
        fetchUsers: (state) => {
            state.loading = true;
        },
        fetchUsersSucess: (state, action) => {
            state.users = action.payload;
            state.loading = false
        },
        fetchUsersFailure: (state, action) => {
            toast.error("Erro ao buscar usuários.")
            console.log("Payload", action.payload)
            state.loading = false

        },
        fetchUserById: (state) => {
            // teste apenas para visualização
        },
        fetchUserByIdSuccess: (state, action) => {
            // teste apenas para visualização
            console.log("SUCESS", action.payload)
        },
        fetchUserByIdFailure: (state, action) => {
            console.log("ERROR", action.payload)
        },
    }
})

export const {
    createUser,
    logoutUser,
    addAddress,
    deleteAddress,
    fetchUsers,
    fetchUsersSucess,
    fetchUsersFailure,
    fetchUserById,
    fetchUserByIdSuccess,
    fetchUserByIdFailure
} = userSlice.actions

export default userSlice.reducer;