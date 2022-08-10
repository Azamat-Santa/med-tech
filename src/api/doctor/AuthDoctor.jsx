import api from "../../axiosSettings";
import { useDispatch } from "react-redux";
import {
  authDoctorFailure,
  authDoctorRequest,
  authDoctorSuccess,
  authCheckDoctor,
  authCheckDoctorRequest,
  authCheckDoctorSuccess,
  authCheckDoctorFailer
} from "../../redux/reducers/doctor";
import axios from "axios";
import  jwt_decode  from 'jwt-decode';


//---------------------- doctor --------------------//

export const AuthDoctor = {
  login: async (email, password) => {
    return api.post("/auth/doctor/sign-in", { email, password });
  },
  logout: async () => {
    return api.post("/logout");
  },
};

export const authDoctor = async (dispatch, email, password) => {
  
  try {
    dispatch(authDoctorRequest());
    const request = await AuthDoctor.login(email, password);
    dispatch(authDoctorSuccess(request.data));
    if (request.status === 201) {
      const decode = jwt_decode(request.data.accessToken);
      localStorage.setItem("doctorId", decode.sub);
      localStorage.setItem("doctorAccessTocken", request.data.accessToken);
      localStorage.setItem("doctorRefreshTocken", request.data.refreshToken);
      dispatch(authDoctorSuccess())
      
    }
   
    console.log();
  } catch (error) {
    dispatch(authDoctorFailure(error));
  }
};

export const checkAuthDoctor = async (dispatch) => {
  dispatch(authCheckDoctorRequest())
  const tockenAcs = localStorage.getItem("doctorAccessTocken");
  const tockenRef = localStorage.getItem("doctorRefreshTocken");
  try {
    const req = await fetch(
      "https://medtechteam-2.herokuapp.com/auth/refresh",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          oldAccessToken: tockenAcs, 
          refreshToken: tockenRef
        })
      }
    );
    const res = await req.json()
    if (req.status === 201) {
      localStorage.setItem("doctorAccessTocken", res.accessToken);
      localStorage.setItem("doctorRefreshTocken", res.refreshToken);
      console.log(res);
      const decode = jwt_decode(res.accessToken);
      localStorage.setItem("doctorId", decode.sub);
      dispatch(authCheckDoctorSuccess())
      
    }
  } catch (e) {
    console.log(e);
    dispatch(authCheckDoctorFailer())

  } 
};
