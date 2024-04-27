import styles from './getInfo.module.css'
import { image } from '../../components/image';
import { button } from '../../components/button';

export const getInfo = (user)=> {
    console.log(user)
    const profileInfo = document.createElement('div');
    const fullName = user.name && user.surname ? `${user.name} ${user.surname}` : `Пользователь ${user.id}`;
    const userName = document.createElement('p');
    userName.innerText = fullName;
    const profileAva = user.image[0] ? image(user.image[0]) : image("../../images/noAva.png");
    const profileHat = user.image[1] ? image(user.image[1]) : document.createElement('div');
   
    profileAva.classList.add(styles.profileAva);
    profileHat.classList.add(styles.profileHat);
    const changeInfoBtn = button({
        text: 'Изменить информацию',
        style: styles.btn,
        callBack: null
    });

    profileHat.append(profileAva);
    profileInfo.classList.add(styles.profileInfo);
    profileInfo.append(profileHat);
    profileInfo.append(userName);
    profileInfo.append(changeInfoBtn);
    return profileInfo;
}