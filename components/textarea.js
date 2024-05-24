export const getTextarea = ({rows,cols, textareaTitle, id,style})=>{

    const textarea = document.createElement('textarea');
    textarea.setAttribute('cols',cols)
    textarea.setAttribute('rows',rows);
    textarea.setAttribute('id',id);
    textarea.classList.add(style)
   
    textarea.placeholder = textareaTitle;
    
    return textarea;
}