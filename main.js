import './style.css'
import { getLayout } from './feautures/layout/layout'

const app = document.querySelector('#app')
app.classList.add('app')
app.append(getLayout(null,'/'))





