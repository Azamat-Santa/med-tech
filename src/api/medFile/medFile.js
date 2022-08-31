import { getMedFileIdFailure, getMedFileIdRequest, getMedFileIdSuccess, postMedFileFailure, postMedFileRequest, postMedFileSuccess } from '../../redux/reducers/medFile';
import api from './../../axiosSettings/index';
 
export const MedFile = {
     getMedfileId: async (patientId) => {
       return api.get(`/medcard/patient/${patientId}`);
     },
     postMedfile: async (patient) => {
       return api.post(`/medcard`, patient);
     }  
 };
 
export const getMedFileId = async (dispatch,patientId) => {
     try {
       dispatch(getMedFileIdRequest());
       const request = await MedFile.getMedfileId(patientId); 
       dispatch(getMedFileIdSuccess(request.data))
     } catch (error) {
       dispatch(getMedFileIdFailure(error));
     }
 };
 
export const postMedFile = async ( {dispatch , patient , patientId}) => {
  console.log(patientId);
  const newMedFile = {
    patient:patientId,
    ...patient
  }
   console.log('newPatient',patient);
   try {
     dispatch(postMedFileRequest());
     const request = await MedFile.postMedfile(newMedFile);
     dispatch(postMedFileSuccess(request.data))
     console.log(request.data);
   } catch (error) {
     dispatch(postMedFileFailure(error));
   }
 };
 
 