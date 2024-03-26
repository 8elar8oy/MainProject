import styles from './profile.module.css'
import { image } from '../components/image'
import {getNav} from "../components/nav";
import { getUsers } from '../api/getUsers';
import {publicationCard} from "../components/publicationCard";
import {getPublications} from "../api/getPublications";

export const profile = (user) =>{
    const profileDiv = document.createElement('div')
    profileDiv.classList.add(styles.profileDiv)
    const headerNav = getNav()
    const header = document.createElement('header')
    header.append(headerNav)
    header.classList.add(styles.header)

    const main = document.createElement('main')
    main.classList.add(styles.main)

    const profileInfo = document.createElement('div')
    profileInfo.classList.add(styles.profileInfo)

    const profileHat = image(user.image[1])
    const profileAva = image(user.image[0])
    const name = document.createElement('p');
    name.innerText = user.name;

    const login = document.createElement('p');
    login.innerText = user.username;

    const email = document.createElement('p');
    email.innerText = user.email;
    profileAva.classList.add(styles.profileAva)
    profileHat.classList.add(styles.profileHat)



    const friendsList = document.createElement('aside')
    const publicationsList = document.createElement('div')
    publicationsList.classList.add(styles.publicationList)
    getPublications('publications').then(publications=>
        publications.data.map(publication => publicationsList.append(publicationCard(publication)))
    )
    const footer = document.createElement('footer')
    profileInfo.append(profileHat)
    profileInfo.append(profileAva)
    profileInfo.append(email)
    profileInfo.append(login)
    profileInfo.append(name)

    profileDiv.append(header);


    main.append(profileInfo)
    main.append(friendsList);
    main.append(publicationsList);
    profileDiv.append(main);
    profileDiv.append(footer);

    return profileDiv
}