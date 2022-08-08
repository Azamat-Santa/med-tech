import api from "../../axiosSettings";
import { useDispatch } from "react-redux";

import axios from "axios";
import  jwt_decode  from 'jwt-decode';
import { getAppoinmentFailure, getAppoinmentRequest, getAppoinmentSuccess } from "../../redux/reducers/appointment";


//---------------------- doctor --------------------//

export const Appoinment = {
  getAll: async () => {
    return api.get("/appointment");
  },
  getByIdDoctor: async (id) => {
    return api.get(`/appointment/${id}`);
  },
  newAppointment: async (option) => {
    console.log(option);
    return api.post(`/appointment`, option);
  },
};


export const getAppointmentId = async (dispatch) => {
    const doctorId = localStorage.getItem('doctorId')
    try {
      dispatch(getAppoinmentRequest());
      const request = await Appoinment.getByIdDoctor(doctorId);
      dispatch(getAppoinmentSuccess(request.data));
      console.log(request);
    } catch (error) {
      dispatch(getAppoinmentFailure(error));
    }
  };

  export const getAppointmentAll = async (dispatch) => {
    try {
      dispatch(getAppoinmentRequest());
      const request = await Appoinment.getAll();
      dispatch(getAppoinmentSuccess(request.data));
    } catch (error) {
      dispatch(getAppoinmentFailure(error));
    }
  };

  export const newAppointment = async (dispatch, option) => {
    console.log(option);
    try {
      // dispatch(getAppoinmentRequest());
      const response = await Appoinment.newAppointment(option);
      // dispatch(getAppoinmentSuccess(request.data));
      console.log(response);
    } catch (error) {
      // dispatch(getAppoinmentFailure(error));
    }
  };


