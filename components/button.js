export const button = ({text,style,callBack}) =>{
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.classList.add(style)
    btn.setAttribute('type', 'button');
    if (callBack) {
        btn.addEventListener('click', () => callBack());
    }
    return btn;
}