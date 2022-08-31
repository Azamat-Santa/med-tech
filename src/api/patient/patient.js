import { getPatientFailure, getPatientIdFailure, getPatientIdRequest, getPatientIdSuccess, getPatientRequest, getPatientSuccess, postNewPatientFailure, postNewPatientRequest, postNewPatientSuccess } from '../../redux/reducers/patient';
import api from './../../axiosSettings/index';


export const Patient = {
    getPatient: async () => {
      return api.get("/patient");
    },
    getOnePatient: async (id) => {
      return api.get(`/patient/${id}`);
    },
    postNewPatient: async (patient) => {
      return api.post('/patient', patient);
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
export const postNewPatient = async (dispatch, patient) => {
 try {
  const newPatient = {
    firstName: patient.firstName,
    lastName: patient.lastName,
    birthdayDate:patient.dateOfBirth,
    email: patient.email,
    phone: patient.phoneNumber,
    weekOfPregnancy: patient.gestationalAge,
    password: patient.password,
    // doctor:'676bc38d-c9f9-4fbd-a80f-f1c4dfbbc85d'
  }

    dispatch(postNewPatientRequest());
    const request = await Patient.postNewPatient(newPatient);
    dispatch(postNewPatientSuccess(request.data))
 } catch (error) {
    dispatch(postNewPatientFailure(error))
  
 }
 
  
};