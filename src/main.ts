import './style.css';
import { startHomeAnimation } from './commons/util/startHomeAnimation.ts';

// Set the year in the legal section
const currentYear = (new Date()).getFullYear()

document.getElementById('year')!.innerHTML = currentYear.toString()

startHomeAnimation()