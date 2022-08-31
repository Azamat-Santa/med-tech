import { getDoctorFailure, getDoctorIdFailure, getDoctorIdRequest,
   getDoctorIdSuccess, getDoctorRequest, getDoctorSuccess, 
   getDoctortSuccess, postNewDoctorRequest, postNewDoctorSuccess ,deleteDoctorRequest,deleteDoctorSuccess,
   deleteDoctorFailure,
   postNewDoctorFailure} from '../../redux/reducers/admin/adminDoctors';
import api from './../../axiosSettings/index';


export const Doctor = {
    getAllDoctors: async () => {
      return api.get("/doctor");
    },
    getOneDoctor: async (id) => {
      return api.get(`/doctor/${id}`);
    },
    postNewDoctor: async (doctor) => {
      return api.post('/doctor', doctor);
    },
    deleteDoctor: async (doctorId) => {
      return api.delete(`/doctor/${doctorId}`);
    },

};

export const getDoctorsAll = async (dispatch) => {
    try {
      dispatch(getDoctorRequest());
      const request = await Doctor.getAllDoctors();
      dispatch(getDoctorSuccess(request.data))
    } catch (error) {
      dispatch(getDoctorFailure(error));
    }
};

export const getDoctorId = async (dispatch, doctorId) => {
  try {
    dispatch(getDoctorIdRequest());
    const request = await Doctor.getOneDoctor(doctorId);
    dispatch(getDoctorIdSuccess(request.data))
  } catch (error) {
    dispatch(getDoctorIdFailure(error));
  }
};

export const postNewDoctor = async (dispatch, doctor) => {
  try {
    dispatch(postNewDoctorRequest());
    const request = await Doctor.postNewDoctor(doctor);
    dispatch(postNewDoctorSuccess(request.data))
  } catch (error) {
    dispatch(postNewDoctorFailure(error))
  }
};


export const deleteDoctorId = async (dispatch, patientId) => {
  try {
    dispatch(deleteDoctorRequest());
    const request = await Doctor.deleteDoctor(patientId);
    getDoctorsAll(dispatch)
    dispatch(deleteDoctorSuccess(request.data))
  } catch (error) {
    dispatch(deleteDoctorFailure(error));
  }
};
