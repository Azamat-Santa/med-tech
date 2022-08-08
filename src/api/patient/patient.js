import { getPatientFailure, getPatientIdFailure, getPatientIdRequest, getPatientIdSuccess, getPatientRequest, getPatientSuccess } from '../../redux/reducers/patient';
import api from './../../axiosSettings/index';


export const Patient = {
    getPatient: async () => {
      return api.get("/patient");
    },
    getOnePatient: async (id) => {
      return api.get(`/patient/${id}`);
    },
};

export const getPatient = async (dispatch) => {
    try {
      dispatch(getPatientRequest());
      const request = await Patient.getPatient();
      dispatch(getPatientSuccess(request.data))
    } catch (error) {
      dispatch(getPatientFailure(error));
    }
};

export const getPatientId = async (dispatch, patientId) => {
  try {
    dispatch(getPatientIdRequest());
    const request = await Patient.getOnePatient(patientId);
    dispatch(getPatientIdSuccess(request.data))
  } catch (error) {
    dispatch(getPatientIdFailure(error));
  }
};