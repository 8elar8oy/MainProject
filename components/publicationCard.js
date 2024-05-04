import { image } from './image';
import styles from  './publicationCard.module.css'
import { button } from './button';
const actionsList = [
    {
        id: "deleteBtn", text: "Удалить", callBack: null 
    },
    {
        id: "redactBtn", text: "Изменить", callBack: null 
    }
];

const getActions = () => {
    const list = document.createElement('div');
    const actions = document.createElement('div')
    const container = document.createElement('div')
    actions.innerText = '...';
    actionsList.forEach(element => {
        container.append(
            button(
                {
                    text: element.text,
                    style: styles.btn,
                    callBack: element.callBack
                }
            )
        );
    });
    list.append(actions,container); 
    list.classList.add(styles.list)
    actions.classList.add(styles.actions)
    container.classList.add(styles.actionsContainer)
    return list;
};
export const publicationCard = (publication,user) => {
    const container = document.createElement('div');
    const head = document.createElement('div')
    const userInfo = document.createElement('div')
    const publicationImg = image(publication.image)
    const name = document.createElement('p');
    const title = document.createElement('p');
    const body = document.createElement('div');
    const fullName = user.name && user.surname ? `${user.name} ${user.surname}` : `Пользователь ${user.id}`;
    const ava = user.image[0] ? image(user.image[0]) : image("./images/noAva.png");
    
    const actions = getActions()
   
    
   
    container.setAttribute('id', publication.id)
    
    name.innerText = fullName;
    title.innerText = publication.title;
    
    userInfo.append(ava,name)
    head.append(userInfo,actions);
    body.append(title,publicationImg)

    container.append(head,body);
    
    container.classList.add(styles.container)
    title.classList.add(styles.title)
    userInfo.classList.add(styles.userInfo)
    head.classList.add(styles.head)
    body.classList.add(styles.body)
    ava.classList.add(styles.ava)
    actions.classList.add(styles.actions)
    publicationImg.classList.add(styles.publicationImg)
    
    return container;
};