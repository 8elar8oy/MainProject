import styles from './profile.module.css'
import { getCreatePublicationDiv } from '../createPublicationContainer/createPublication';
import { getInfo } from '../profileInfo/getInfo';
import { getHeader } from '../header/header';
import { getMain } from '../main/main/mainDiv';
// import {getInputFile} from "../../components/inputFile";
import { getPublicationList } from '../publicationList/publicationList';
export const profile = (user) =>{
    const profileDiv = document.createElement('div')
    const header = getHeader()
    const profileInfo = getInfo(user)
    const publicationsList = getPublicationList(user)
    const createPublication = getCreatePublicationDiv()
    // const friendsList = document.createElement('aside')
    // const footer = document.createElement('footer')
    const main = getMain(profileInfo,createPublication,publicationsList)
    profileDiv.classList.add(styles.profileDiv)
    profileDiv.append(header)
    profileDiv.append(main);
    //profileDiv.append(footer);

    return profileDiv
}