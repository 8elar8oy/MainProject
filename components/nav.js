import { removeElement } from '../api/removeElement';
import { button } from './button';
import styles from './nav.module.css';
import { getUsers } from '../api/getUsers';
import { getPublications } from '../api/getPublications';

const removeUser = (user) => {
    getPublications('publications')
        .then(publications => {
            const filteredPublications = publications.data.filter(publication => publication.userId === user.id);
            console.log(filteredPublications);
            return filteredPublications;
        })
        .then(publications => {
            const publicationIds = publications.map(publication => publication.id);
            console.log(publicationIds)
            return removeElement('users', user.id)
                .then(res => {
                    localStorage.removeItem('userId');
                    location.reload();
                    console.log(publicationIds)
                    return publicationIds; 
                });
        })
        .then(publicationIds => {
            console.log(publicationIds)
            const deletedPromises = publicationIds.map(publicationId =>{
                console.log(publicationId)
                return removeElement('publications', publicationId);
            })
            return Promise.all(deletedPromises)
        })
        .then(() => {
            alert('Пользователь и его публикации были удалены.');
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
};


const navList = [
    {
        id: 'remove',
        name: 'Удалить пользователя',
        callBack: (user) => removeUser(user)
    },
    {
        id: 'exit',
        name: 'Выход',
        callBack: () => window.location.pathname = ''
    }
];

export const getNav = (user) => {
    const ul = document.createElement('ul');
    ul.classList.add(styles.navList);
    navList.forEach(navItem => {
        const li = document.createElement('li');
        if (navItem.id === 'remove') {
            li.append(button({text: navItem.name, style: styles.btn, callBack: () => navItem.callBack(user)}));
        } else {
            li.append(button({text: navItem.name, style: styles.btn, callBack: navItem.callBack}));
        }
        ul.append(li);
    });
    return ul;
};
