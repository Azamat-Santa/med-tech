import { getPatientFailure, getPatientIdFailure, getPatientIdRequest, getPatientIdSuccess, getPatientRequest, getPatientSuccess, postNewPatientFailure, postNewPatientRequest, postNewPatientSuccess } from '../../redux/reducers/patient';
import api from './../../axiosSettings/index';
import Authorization from './../../pages/Authorization/Authorization';


export const Patient = {
    getPatient: async () => {
      return api.get("/patient");
    },
    getOnePatient: async (id) => {
      return api.get(`/patient/${id}`);
    },
    postNewPatient: async (patient) => {
      console.log('post',patient);
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
  const newPatient = {
    firstName: patient.fullName,
    lastName: patient.fullName,
    birthdayDate:patient.dateOfBirth,
    email: patient.email,
    phone: patient.phoneNumber,
    weekOfPregnancy: patient.gestationalAge,
    password: patient.password
  }
  try {
    dispatch(postNewPatientRequest());
    const request = await Patient.postNewPatient(newPatient);
    dispatch(postNewPatientSuccess()(request.data))
  } catch (error) {
    dispatch(postNewPatientFailure()(error));
  }
};