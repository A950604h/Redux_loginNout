import { createAction, createSlice } from "@reduxjs/toolkit";
import { gql } from "@apollo/client";
import client from "../apollo.client";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


const CREATE_USER = gql`
  mutation createLogin($loginData: CreateLoginInput!) {
    createLogin(createLoginInput: $loginData) {
      name
      email
      password
      phone
    }
  }
`;

const LOGIN_USER = gql`
  query loginUser($email: String!) {
    findOneLogin(email: $email) {
      email
      name
      phone
      password
    }
  }
`;

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (loginData) => {
    const response = await client.mutate({
      mutation: CREATE_USER,
      variables: { loginData },
    });
    return response.data.createLogin;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser", 
  
  async (email) => {
  // console.log("input", email)
  const response = await client.query({
    query: LOGIN_USER,
    variables: { email },
  });

    const checkEmail = response.data.findOneLogin;
    console.log("checked Email", checkEmail.email)

    if(checkEmail === null || checkEmail.email !== email){
          alert("Invalid email")
      }
    else if(checkEmail && checkEmail.email === email){
             //   GENERATING TOKEN 
      const token = uuidv4(); 
      localStorage.setItem("token", token);

      alert("Login successful")
      window.location.href = "/ContactList";
      }
}
);

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, action.payload];
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, action.payload];
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default authSlice;
