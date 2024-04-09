export const getInput = ({type, inputTitle, callBack,id,style})=>{

    const input = document.createElement('input');
    const label = document.createElement('label');
    input.setAttribute('type',type);
    input.setAttribute('id',id);
    input.classList.add(style)
    input.addEventListener('change', event => callBack(event.target.value));
    input.placeholder = inputTitle;
    label.append(input);
    return label;
}