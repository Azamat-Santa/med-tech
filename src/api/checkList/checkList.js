import { getCheckListFailure, getCheckListRequest, getCheckListSuccess } from '../../redux/reducers/checkList';
import api from './../../axiosSettings/index';


export const CheckList = {
    getCheckListId: async (id) => {
      return api.get(`/checklist/${id}`);
    },
    
};

export const getCheckListId = async (dispatch,id) => {
    try {
      dispatch(getCheckListRequest());
      const request = await CheckList.getCheckListId(id);
      dispatch(getCheckListSuccess(request.data))
    } catch (error) {
      dispatch(getCheckListFailure(error));
    }
};

