import { removeElement } from '../api/removeElement';
import { button } from './button';
import styles from './nav.module.css';
import { getLayout } from '../feautures/layout/layout';

const removeUser = (user) => {
    removeElement('users', user.id).then(res => {
        const removeItem = document.getElementById(res.data.id);
        localStorage.removeItem('userId');
        location.reload();
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
