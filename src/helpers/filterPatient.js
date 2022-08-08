export const filterPatient = (patientList, title)=>{
 switch (title) {
    case 'pending':
        return patientList.filter(patient=> {
            const options = {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }
            const dateOfBirth = new Date(patient.createdAt);
            dateOfBirth.setMonth(dateOfBirth.getMonth() + 9);
            dateOfBirth.setDate(0)
            const today = new Date().toLocaleString('ru',options)
            
            return dateOfBirth.toLocaleString('ru',options) > today
        })

      case 'whoGaveBirth':
        return  patientList.filter(patient=> {
            const options = {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }
            const dateOfBirth = new Date(patient.createdAt);
            dateOfBirth.setMonth(dateOfBirth.getMonth() + 9);
            dateOfBirth.setDate(0)
            const today = new Date().toLocaleString('ru',options)
            
            return dateOfBirth.toLocaleString('ru',options) < today
        })
    
      default:
        return patientList
       
 }
}