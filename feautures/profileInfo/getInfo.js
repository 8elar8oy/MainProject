import styles from './getInfo.module.css'
import { image } from '../../components/image';
import { button } from '../../components/button';
export const getInfo = (user)=> {
    const profileInfo = document.createElement('div');
    const userName = document.createElement('p');
    userName.innerText = `${user.name} ${user.surname}`;
    const profileHat = image(user.image[1])
    const profileAva = image(user.image[0])
    profileAva.classList.add(styles.profileAva)
    profileHat.classList.add(styles.profileHat)
    const changeInfoBtn = button(
        {text:'Изменить информацию',style: styles.btn,callBack: null})
    profileHat.append(profileAva)
    profileInfo.classList.add(styles.profileInfo)
    profileInfo.append(profileHat)
    profileInfo.append(userName)
    profileInfo.append(changeInfoBtn)
    
    return profileInfo
}