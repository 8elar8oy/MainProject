import { button } from './button';
import styles from '../pages/profile.module.css'

const navList = [
    {
        path: '/',
        name: 'Настройки'
    },
    {
        path: '/',
        name: 'Выход'
    }
];

export const getNav = () => {
    const ul = document.createElement('ul');
    ul.classList.add(styles.list)
    navList.forEach(navItem => {
        const li = document.createElement('li');
        li.append(button({text: navItem.name,style: styles.btn,callBack: () => window.location.pathname = navItem.path}));
        ul.append(li);
    });
    return ul;
};