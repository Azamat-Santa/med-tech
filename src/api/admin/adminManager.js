import { getManagerFailure, getManagerIdFailure,
   getManagerIdRequest, getManagerIdSuccess, getManagerRequest, 
   getManagerSuccess ,deleteManagerRequest,
   deleteManagerSuccess,deleteManagerFailure, postNewManagerSuccess, postNewManagerRequest, postNewManagerFailure} from '../../redux/reducers/admin/adminManager';
import api from './../../axiosSettings/index';


export const Doctor = {
    getAllDManager: async () => {
      return api.get("/manager");
    },
    getOneManager: async (id) => {
      return api.get(`/manager/${id}`);
    },
    postNewManager: async (patient) => {
      return api.post('/manager', patient);
    },
    deleteManager: async (patientId) => {
      return api.delete(`/manager/${patientId}`);
    },

};

export const getManagerAll = async (dispatch) => {
    try {
      dispatch(getManagerRequest());
      const request = await Doctor.getAllDManager();
      dispatch(getManagerSuccess(request.data))
    } catch (error) {
      dispatch(getManagerFailure(error));
    }
};

export const getManagerId = async (dispatch, patientId) => {
  try {
    dispatch(getManagerIdRequest());
    const request = await Doctor.getOneManager(patientId);
    dispatch(getManagerIdSuccess(request.data))
  } catch (error) {
    dispatch(getManagerIdFailure(error));
  }
};

export const deleteManagerId = async (dispatch, patientId) => {
  try {
    dispatch(deleteManagerRequest());
    const request = await Doctor.deleteManager(patientId);
    dispatch(deleteManagerSuccess(request.data))
  } catch (error) {
    dispatch(deleteManagerFailure(error));
  }
};

export const postNewManager = async (dispatch, doctor) => {
  try {
    dispatch(postNewManagerRequest());
    const request = await Doctor.postNewDoctor(doctor);
    dispatch(postNewManagerSuccess(request.data))
  } catch (error) {
    dispatch(postNewManagerFailure(error))
  }
};




