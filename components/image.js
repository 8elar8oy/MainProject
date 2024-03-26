export const image = (url) =>{
    const img = document.createElement('div')
    img.style.backgroundImage = `url(${url})`;
    return img;
}