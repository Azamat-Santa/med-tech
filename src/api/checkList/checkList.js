import { getCheckListFailure, getCheckListRequest, getCheckListSuccess,
   postCheckListFailure, postCheckListRequest, postCheckListSuccess } from '../../redux/reducers/checkList';
import api from './../../axiosSettings/index';


export const CheckList = {
    getCheckListId: async (patientId, month) => {
      return api.get(`/checklist/${patientId}/${month}`);
    },
    postCheckList: async (patient) => {
      return api.post(`/checklist`, patient);
    }
     
};

export const getCheckListId = async (dispatch,patientId,month) => {
    try {
      dispatch(getCheckListRequest());
      const request = await CheckList.getCheckListId(patientId, month);
      // console.log(request.data);

      dispatch(getCheckListSuccess(request.data))
    } catch (error) {
      dispatch(getCheckListFailure(error));
    }
};

export const postCheckList = async ( dispatch , patient , patientId, month) => {
  // console.log(patient);
  const newPatient = {
    patient:patientId,
    month: month,
    ...patient
  }
  try {
    dispatch(postCheckListRequest());
    const request = await CheckList.postCheckList(newPatient);
    dispatch(postCheckListSuccess(request.data))
  } catch (error) {
    dispatch(postCheckListFailure(error));
  }
};

