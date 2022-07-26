import api from "../../axiosSettings";
import { useDispatch } from "react-redux";
import {
  authDoctorFailure,
  authDoctorRequest,
  authDoctorSuccess,
} from "../../redux/reducers/userReducer";
import { doctorSlice } from "./../../redux/reducers/userReducer";
import axios from "axios";

export const AuthDoctor = {
  login: async (email, password) => {
    return api.post("/auth/doctor/sign-in", { email, password });
  },
  logout: async () => {
    return api.post("/logout");
  },
};
// console.log(authDoctorFailure('rrrrr'));

export const authDoctor = async (dispatch, email, password) => {
  try {
    dispatch(authDoctorRequest());
    const request = await AuthDoctor.login(email, password);

    console.log(request.data);
    dispatch(authDoctorSuccess(request.data));
    if (request.status === 201) {
      localStorage.setItem("doctorAccessTocken", request.data.accessToken);
      localStorage.setItem("doctorRefreshTocken", request.data.refreshToken);
      localStorage.setItem("isAuth", true);
      dispatch(authDoctorSuccess())
    }
  } catch (error) {
    dispatch(authDoctorFailure(error));
  }
};
export const getPatients = async (dispatch, email, password) => {
  try {
    // dispatch(authDoctorRequest())
    const request = await api.get("/patient");
    // const data = await request.data.json()
    console.log(request);
    // dispatch(authDoctorSuccess(request.data))
    // if(request.status ===201 ){
    //     localStorage.setItem('doctorTocken',JSON.stringify(request.data))
    // }
  } catch (error) {
    dispatch(authDoctorFailure(error));
  }
};

export const checkAuthDoctor = async (dispatch) => {
//   const tockenAcs = localStorage.getItem("doctorAccessTocken");
//   const tockenRef = localStorage.getItem("doctorRefreshTocken");
  // console.log(tockenAcs);
//   dispatch(authDoctorRequest());
//   console.log(tockenAcs);
//   console.log(
//     JSON.stringify({
//       refreshToken: tockenRef,
//       oldAccessToken: tockenAcs,
//     })
//   );
  try {
    const response = await fetch(
      "https://medtechteam-2.herokuapp.com/auth/refresh",
      {
        method: "POST",
        headers: {
          ContentType: 'application/json',
        },
        body:JSON.stringify({"oldAccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0OGZlZGNkNC1jMzdkLTRiZDgtYmU2NC01ODcyOWYyYWNjNzgiLCJyb2xlIjoiRE9DVE9SIiwiaWF0IjoxNjU4NzE1Mzg1LCJleHAiOjE2NjQ3MTUzODUsImF1ZCI6Im1lZHRlY2h0ZWFtMiIsImlzcyI6Im1lZHRlY2h0ZWFtMiJ9.DmDyKxfKjzunx3YgC5Y3lq4Z_v_l7VoWZSoofvF9g1U", "refreshToken": "327361ff2120f33b1ba2d0d71342904dd104371155bc7df6da78c5293d6a6ccdefb2c755293028ec558fffbb4daa7fb604ed8759a91619370d6b368480d193a4"})
      }
    );
    console.log(response);
    // localStorage.setItem("doctorTocken", JSON.parse(response.data));
  } catch (e) {
    console.log(e);
  } 
};
