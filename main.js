import './style.css'
import {registrationPage} from "./pages/registrationPage";
import{getLayout} from "./layout/layout";

const app = document.querySelector('#app')
app.classList.add('app')
app.append(getLayout(null,'/'))





