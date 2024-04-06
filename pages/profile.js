import styles from './profile.module.css'
import { image } from '../components/image'
import {getNav} from "../components/nav";
import { getUsers } from '../api/getUsers';
import {publicationCard} from "../components/publicationCard";
import {getPublications} from "../api/getPublications";

export const profile = (user) =>{
    const profileDiv = document.createElement('div')
    const header = document.createElement('header')
    const main = document.createElement('main')
    const profileInfo = document.createElement('div')
    const name = document.createElement('p');
    const login = document.createElement('p');
    const email = document.createElement('p');
    const control = document.createElement('div');
    const friendsList = document.createElement('aside')
    const publicationsList = document.createElement('div')
    const footer = document.createElement('footer')
    
    const headerNav = getNav()
    const profileHat = image(user.image[1])
    const profileAva = image(user.image[0])

    name.innerText = user.name;
    login.innerText = user.username;
    email.innerText = user.email;

    header.classList.add(styles.header)
    profileDiv.classList.add(styles.profileDiv)
    main.classList.add(styles.main)
    profileInfo.classList.add(styles.profileInfo)

    
    
    
    profileAva.classList.add(styles.profileAva)
    profileHat.classList.add(styles.profileHat)



    
    publicationsList.classList.add(styles.publicationList)
    getPublications('publications').then(publications=>
        publications.data.map(publication => publicationsList.append(publicationCard(publication,user)))
    )
    header.append(headerNav)
    profileDiv.append(header);

    profileHat.append(profileAva)
    
    profileInfo.append(profileHat)
    profileInfo.append(email)
    profileInfo.append(login)
    profileInfo.append(name)

   


    main.append(profileInfo)
    //main.append(friendsList);
    main.append(publicationsList);
    profileDiv.append(main);
    //profileDiv.append(footer);

    return profileDiv
}