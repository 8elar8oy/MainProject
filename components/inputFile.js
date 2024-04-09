import inputStyles from '../pages/profile.module.css'
export const getInputFile = ({ inputTitle, callBack,id,style})=>{
    const div =  document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.setAttribute('type','file');
    input.setAttribute('id',id);
    input.classList.add(inputStyles.inputStyle)
    label.classList.add(style)
    label.addEventListener('click',()=>input.click())
    input.addEventListener('change', event => callBack(event.target.value));
    label.innerText = inputTitle;
    div.append(input,label)
    return label;
}