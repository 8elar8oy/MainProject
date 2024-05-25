import styles from './input.module.css'
export const getInput = ({type, inputTitle, callBack,id,style,inputText})=>{
    
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.setAttribute('type',type);
    input.setAttribute('id',id);
    label.classList.add(styles.label)
    input.classList.add(style);
    if(callBack){
        input.addEventListener('change', event => callBack(event.target.value));
    }
    
    input.placeholder = inputTitle;
    label.append(input);
    if(inputText){
        const text = document.createElement('p')
        text.innerText = inputText;
        label.append(text)
    }
    
    return label;
}