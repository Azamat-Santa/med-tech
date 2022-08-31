import api from "../../axiosSettings";
import { useDispatch } from "react-redux";
import {
  authDoctorFailure,
  authDoctorRequest,
  authDoctorSuccess,
  authCheckDoctor,
  authCheckDoctorRequest,
  authCheckDoctorSuccess,
  authCheckDoctorFailer,
  authLogOut
} from "../../redux/reducers/doctor";
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
      localStorage.setItem("tockenAcs", request.data.accessToken);
      localStorage.setItem("tockenRef", request.data.refreshToken);
      dispatch(authDoctorSuccess())
    }
  } catch (error) {
    dispatch(authDoctorFailure(error));
  }
};

export const checkAuthDoctor = async (dispatch) => {
  dispatch(authCheckDoctorRequest())
  const tockenAcs = localStorage.getItem("tockenAcs");
  const tockenRef = localStorage.getItem("tockenRef");
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
      const decode = jwt_decode(res.accessToken);
      localStorage.setItem("doctorId", decode.sub);
      localStorage.setItem("tockenAcs", res.accessToken);
      localStorage.setItem("tockenRef", res.refreshToken);
      dispatch(authCheckDoctorSuccess()) 
    }
  } catch (e) {
    console.log(e);
    dispatch(authCheckDoctorFailer())

  } 
};


export const authLogout = async (dispatch) => {
  localStorage.removeItem("doctorId");
  localStorage.removeItem("tockenAcs");
  localStorage.removeItem("tockenRef");

  dispatch(authLogOut())
};