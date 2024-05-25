import styles from './getInfo.module.css'
import { image } from '../../components/image';
import { button } from '../../components/button';
import { getEditUserForm } from '../editUserForm/editUserForm';
import { editPublicationWindow } from '../../components/editWindow';
export const getInfo = (user)=> {
   
    const profileInfo = document.createElement('div');
    profileInfo.setAttribute('id','profileInfo')
    const fullName = user.name && user.surname ? `${user.name} ${user.surname}` : `Пользователь ${user.id}`;
    const userName = document.createElement('p');
    userName.innerText = fullName;
    const profileAva = user.ava ? image(user.ava) : image("../../images/noAva.png");
    const profileHat = user.hat ? image(user.hat) : document.createElement('div');
   
    profileAva.classList.add(styles.profileAva);
    profileHat.classList.add(styles.profileHat);
    const changeInfoBtn = button({
        text: 'Изменить информацию',
        style: styles.btn,
        callBack: () => editPublicationWindow(getEditUserForm(user) ) 
    });

    profileHat.append(profileAva);
    profileInfo.classList.add(styles.profileInfo);
    profileInfo.append(profileHat);
    profileInfo.append(userName);
    profileInfo.append(changeInfoBtn);
    return profileInfo;
}