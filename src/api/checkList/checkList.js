import { getCheckListFailure, getCheckListRequest, getCheckListSuccess, postCheckListFailure, postCheckListRequest, postCheckListSuccess } from '../../redux/reducers/checkList';
import api from './../../axiosSettings/index';


export const CheckList = {
    getCheckListId: async (patient, month) => {
      return api.get(`/checklist/93ebfa5c-0cff-4418-b925-a9995e14b4b4/2`);
    },
    postCheckList: async (patient) => {
      return api.post(`/checklist`, patient);
    }
     
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

export const postCheckList = async ( dispatch , patient ) => {
  const month = 0
  const newPatient = {
      "month": "2",
      "patient":"93ebfa5c-0cff-4418-b925-a9995e14b4b4",
      "сomplaints": "string",
      "arterialPressure": "string",
      "weigth": "string",
      "thePresenceOfProteinInRheUrine": "string",
      "hemoglobinLevel": "string",
      "fundalHeightCm": "string",
      "thePresenceOfEdema": "string",
      "positionAt36Weeks": "string",
      "presentatiOnAt36Weeks": "string",
      "heartbeat": "string",
      "stirring": "string",
      "gestationalAge": "string",
      "diagnosis": "string",
      "icdCode": "string",
      "examinationLaboratoryAndInstrumental": "string",
      "treatment": "string",
      "sentToTrainingSchoolToChildbirth": "string",
      "physiologicalChangesDuringPregnancy": "string",
      "nutritionForPregnantWomen": "string",
      "modeAndHygiene": "string",
      "warningSignsDuringPregnancy": "string",
      "birthApproachPartnershipBirthAndFillingOutTheBirthPlan": "string",
      "postpartumPeriodAndPostpartumContraception": "string",
      "newbornCareAndBreastfeedingFeeding": "string",
      "other": "string",
      "recommendations": "string"
    
  }
  try {
    dispatch(postCheckListRequest());
    const request = await CheckList.postCheckList(newPatient);
    dispatch(postCheckListSuccess(request.data))
  } catch (error) {
    dispatch(postCheckListFailure(error));
  }
};

