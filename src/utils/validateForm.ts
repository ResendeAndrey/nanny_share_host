import { toast } from "react-toastify";

export function validateEmail(email: string) {
  const regexEmail = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if(!email)
  {
    toast.error('The email value is not correct');
    return false;
  }
  if(!String(email).toLowerCase().match(regexEmail)) {
    toast.error('Invalid email')
    return false;
  }
  return true; 
}
export function validateName(name: string) {
  if(!name) {
    toast.error('The field name is not correct')
    return false;
  }
  return true;
}
export function successForm() {
  return toast.success('now, you will receive the newsletters');
}

export function errorForm () {
  return toast.error('Sorry, an error was ocurred. Please try again');
}