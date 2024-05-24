
export const getInputFile = ({id,labelStyles,callBack})=>{
    const div = document.createElement('div')
    const label =  document.createElement('label');
    const input = document.createElement('input');
    input.setAttribute('type','file');
    input.setAttribute('id',id);
    input.style.display = 'none'
    label.textContent = 'Выбрать файл'
    label.setAttribute('for',id)
    label.classList.add(labelStyles)
    if (callBack) {
        input.addEventListener('click', () => callBack());
    }
    div.append(label,input)
    return div;
}