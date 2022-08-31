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
import { authAdminFailure, authAdminRequest, authAdminSuccess, authCheckAdminFailer, authCheckAdminRequest, authCheckAdminSuccess, getAdminOneFailure, getAdminOneRequest, getAdminOneSuccess, getAdminsFailure, getAdminsRequest, getAdminsSuccess } from "../../redux/reducers/admin/admin";


//---------------------- doctor --------------------//

export const AuthAdmin = {
  login: async (email, password) => {
    return api.post("/auth/admin/sign-in", { email, password });
  },
  logout: async () => {
    return api.post("/logout");
  },
  getAll: async ()=>{
    return api.get("/admin")
  },
  getOne: async (adminId)=>{
    return api.get(`/admin/${adminId}`)
  }
};

export const authAdmin = async (dispatch, email, password) => {
  
  try {
    dispatch(authAdminRequest());
    const request = await AuthAdmin.login(email, password);
    dispatch(authAdminSuccess(request.data));
    if (request.status === 201) {
      const decode = jwt_decode(request.data.accessToken);
      localStorage.setItem("doctorId", decode.sub);
      localStorage.setItem("tockenAcs", request.data.accessToken);
      localStorage.setItem("tockenRef", request.data.refreshToken);
      dispatch(authDoctorSuccess())
    }
  } catch (error) {
    dispatch(authAdminFailure(error));
  }
};

export const checkAuthAdmin = async (dispatch) => {
  dispatch(authCheckAdminRequest())
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
      dispatch(authCheckAdminSuccess()) 
    }
  } catch (e) {
    console.log(e);
    dispatch(authCheckAdminFailer())

  } 
};

export const getAdmins = async (dispatch) => {
  try {
    dispatch(getAdminsRequest());
    const request = await AuthAdmin.getAll();
    dispatch(getAdminsSuccess(request.data))
  } catch (error) {
    dispatch(getAdminsFailure(error));
  }
};


export const getAdminOne = async (dispatch , adminId) => {
  try {
    dispatch(getAdminOneRequest());
    const request = await AuthAdmin.getOne(adminId);
    dispatch(getAdminOneSuccess(request.data))
  } catch (error) {
    dispatch(getAdminOneFailure(error));
  }
};

export const authLogout = async (dispatch) => {
  localStorage.removeItem("doctorId");
  localStorage.removeItem("tockenAcs");
  localStorage.removeItem("tockenRef");
  dispatch(authLogOut())
};