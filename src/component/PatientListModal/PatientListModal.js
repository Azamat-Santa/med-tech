import React from 'react'
import { timeConverter } from '../../helpers/timeConverter'

export default function PatientListModal({modalPatientList,closeModalPatientList,appointmentDay}) {
  
  return (
    <div className = {modalPatientList.modal ? "patients-modal active" : "patients-modal" }
      onClick={closeModalPatientList}
    >
      <div className={modalPatientList.modal ? "patients-modal__content active" : "patients-modal__content"} onClick={(e)=>e.stopPropagation()}>
      <div className="patients-modal__date">
        {`${modalPatientList.date.format('MMMM')} ${modalPatientList.date.format('DD')} ${modalPatientList.date.format('YYYY')} ${modalPatientList.date.format('dddd')}`}
      </div>
      {appointmentDay.length !== 0 ? appointmentDay.map(patient=>(
        <div className="patients-modal__item" key={patient.id}>
          <div > {timeConverter(patient.startTime)} -  {timeConverter(patient.endTime)}</div> 
          <div>{patient?.patient?.firstName || ''} {patient?.patient?.lastName || ''}</div> 
          <div>{patient.patient.id}</div>
          <div className="patients-modal__item__edit">Редактировать</div> 
       </div>
      )):<div className='patients-modal__not__appintments'>нет записей</div>}
       
      </div>
    </div>
  )
}
