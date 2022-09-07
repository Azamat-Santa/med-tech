import { getExcelFailure, getExcelRequest, getExcelSuccess } from '../../redux/reducers/admin/excel';
import api from './../../axiosSettings/index';
 
 
 export const Excel = {
     getExcelDataBase: async () => {
       return api.get("/excel");
     },
     
 };
 
 export const getExcel = async (dispatch) => {
   const adminTocken = localStorage.getItem('tockenAcs') 
   const response  = await fetch("https://medtechteam-2.herokuapp.com/excel",{
    method:"GET",
    headers:{
        'Authorization':`Bearer ${adminTocken}`, 
    }
   })
   .then(response => {
       if ((response.ok === true) & (response.status === 200)) {
           return response.blob();
       }
   })
   .then(data => {
       const url = window.URL.createObjectURL(data);
       const link = document.createElement("a");
       link.href = url;
       link.setAttribute("download", "organizations_export.xls");
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);
   });
   console.log(response);

    //  try {
    //    dispatch(getExcelRequest());
    //    const request = await Excel.getExcelDataBase();
    //    dispatch(getExcelSuccess(request.data))
    //  } catch (error) {
    //    dispatch(getExcelFailure(error));
    //  }
 };