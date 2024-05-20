import { button } from "../../components/button";
import styles from  './editForm.module.css'

export const createEditForm = (publication) =>{
    const info = document.getElementById(publication.id)
    console.log(info)
    // const form = document.createElement('form');
    // form.classList.add(styles.editForm);
    // Array.from(info.children).forEach(child => {
    //     let label, input;
    //     label = document.createElement('label');
    //     label.textContent = `Изменить ${child.className || child.tagName}:`;
    //     if (child.tagName === 'IMG') {
    //         input = document.createElement('input');
    //         input.type = 'file';
    //         input.value = child.src;
    //     } else if (child.tagName === 'P') {
    //         input = document.createElement('textarea');
    //         input.value = child.textContent;
    //     } else {
    //         input = document.createElement('input');
    //         input.type = 'text';
    //         input.value = child.textContent;
    //     }
    //     input.classList.add(child.className) ;
    //     form.appendChild(label);
    //     form.appendChild(input);
    // });
    // const saveButton = button({text:'Сохранить',style: styles.btn,callback: null});
    // // // Обработчик для кнопки сохранения
    // // saveButton.addEventListener('click', () => {
    // //     Array.from(block.children).forEach((child, index) => {
    // //         const input = form.children[index * 2 + 1]; // т.к. каждая пара (label, input)
    // //         if (child.tagName === 'IMG') {
    // //             child.src = input.value;
    // //         } else {
    // //             child.textContent = input.value;
    // //         }
    // //     });

    // //     // Удаляем форму после сохранения
    // //     form.remove();
    // // });

    // // Добавляем кнопку в форму
    // form.appendChild(saveButton);

    // return form
}

