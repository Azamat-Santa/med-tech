
import Home from './pages/Home/Home';
import Patients from './pages/Patients/Patients';
import PatientProfile from './pages/PatientProfile/PatientProfile';
import Authorization from './pages/Authorization/Authorization';

export  const routesDoctor = [
    {
      path: "/",
      Element: Home,
    },
    {
      path: "/patients",
      Element: Patients,
    },
    {
      path: "/patientProfile/:patientId",
      Element: PatientProfile,
    },
    {
      path: "*",
      Element: Authorization,
    },
];