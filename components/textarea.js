export const getTextarea = ({rows,cols, textareaTitle, callBack,id,style})=>{

    const textarea = document.createElement('textarea');
    textarea.setAttribute('cols',cols)
    textarea.setAttribute('rows',rows);
    textarea.setAttribute('id',id);
    textarea.classList.add(style)
    textarea.addEventListener('change', event => callBack(event.target.value));
    textarea.placeholder = textareaTitle;
    
    return textarea;
}