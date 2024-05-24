import { image } from './image';
import styles from  './publicationCard.module.css'
import { button } from './button';
import { publicationData } from '../feautures/publicationForm/createPublicationDiv';
import { getEditPublicationForm } from '../feautures/editForm/editForm';
import { getCreatePublicationDiv } from '../feautures/publicationForm/createPublicationDiv';
import {editPublicationWindow} from "./editWindow";
import { removeElement} from '../api/removeElement';
const removePublicationCard = (publication) =>{
    removeElement('publications', publication.id).then(res => {
        const removeItem = document.getElementById(res.data.id)
        const publicationList = document.getElementById('publicationList')
        publicationList.removeChild(removeItem)
    })
}


const getActions = (publication,user) => {
    const list = document.createElement('div');
    const actions = document.createElement('div')
    const container = document.createElement('div')
    actions.innerText = '...';
    container.append(
        button({text: 'Изменить',style: styles.btn,callBack: () => editPublicationWindow(publication,user)}),
        button({text: 'Удалить',style: styles.btn,callBack: () => removePublicationCard(publication)})
    );

    list.append(actions,container); 
    list.classList.add(styles.list)
    actions.classList.add(styles.actions)
    container.classList.add(styles.actionsContainer)
    return list;
};
export const publicationCard = (publication,user) => {
    console.log(publication,'юзер',user)
    const container = document.createElement('div');
    
    const head = document.createElement('div')
    const userInfo = document.createElement('div')
   
    const name = document.createElement('p');
    const title = document.createElement('p');
    const body = document.createElement('div');
    const fullName = user.name && user.surname ? `${user.name} ${user.surname}` : `Пользователь ${user.id}`;
    const ava = user.image[0] ? image(user.image[0]) : image("./images/noAva.png");
    const actions = getActions(publication,user)
    container.setAttribute('id', publication.id)
    name.innerText = fullName;
    title.innerText = publication.title;
    userInfo.append(ava,name)
    head.append(userInfo,actions);
    body.append(title)
    container.append(head,body);
    container.classList.add(styles.container)
    title.classList.add(styles.title)
    userInfo.classList.add(styles.userInfo)
    head.classList.add(styles.head)
    body.classList.add(styles.body)
    ava.classList.add(styles.ava)
    actions.classList.add(styles.actions)
    if (publication.image) {
        const publicationImg = image(publication.image);
        publicationImg.classList.add(styles.publicationImg);
        body.append(publicationImg);
    }
    
    return container;
};