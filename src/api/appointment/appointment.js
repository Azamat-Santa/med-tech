import api from "../../axiosSettings";
import { getAppoinmentFailure, getAppoinmentRequest, getAppoinmentSuccess, postAppoinmentFailure, postAppoinmentRequest, postAppoinmentSuccess } from "../../redux/reducers/appointment";


//---------------------- doctor --------------------//

export const Appoinment = {
  getAll: async (doctorId) => {
    return api.get(`/appointment/doctor/${doctorId}`);
  },
  getByIdDoctor: async (id) => {
    return api.get(`/appointment/${id}`);
  },
  newAppointment: async (option) => {
    return api.post(`/appointment`, option);
  },
};


export const getAppointmentId = async (dispatch) => {
    const doctorId = localStorage.getItem('doctorId')
    try {
      dispatch(getAppoinmentRequest());
      const request = await Appoinment.getByIdDoctor(doctorId);
      dispatch(getAppoinmentSuccess(request.data));
    } catch (error) {
      dispatch(getAppoinmentFailure(error));
    }
  };

  export const getAppointmentAll = async (dispatch) => {
  const doctorId = localStorage.getItem('doctorId')

    try {
      dispatch(getAppoinmentRequest());
      const request = await Appoinment.getAll(doctorId);
      dispatch(getAppoinmentSuccess(request.data));
    } catch (error) {
      dispatch(getAppoinmentFailure(error));
    }
  };

  export const newAppointment = async (dispatch, option) => {
    console.log(option);
    try {
      dispatch(postAppoinmentRequest());
      const response = await Appoinment.newAppointment(option);
      dispatch(postAppoinmentSuccess(response.data));
      console.log(response);
    } catch (error) {
      dispatch(postAppoinmentFailure(error));
    }
  };


