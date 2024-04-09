import styles from './profile.module.css'
import { image } from '../components/image'
import {getNav} from "../components/nav";
import { getUsers } from '../api/getUsers';
import {publicationCard} from "../components/publicationCard";
import {getPublications} from "../api/getPublications";
import {button} from "../components/button";
import {getInput} from "../components/input";
import {getInputFile} from "../components/inputFile";

export const profile = (user) =>{
    const profileDiv = document.createElement('div')
    const header = document.createElement('header')
    const main = document.createElement('main')
    const profileInfo = document.createElement('div')
    const changeInfoBtn = button({text:'Изменить информацию',style: styles.btn,callBack: null})
    const userName = document.createElement('p');
    const login = document.createElement('p');
    const email = document.createElement('p');
    const friendsList = document.createElement('aside')
    const publicationsList = document.createElement('div')
    const footer = document.createElement('footer')
    const creationPublication = document.createElement('div')
    const publicateForm = document.createElement('form')
    const headerNav = getNav()
    const profileHat = image(user.image[1])
    const profileAva = image(user.image[0])

    userName.innerText = `${user.name} ${user.surname}`;
    login.innerText = user.username;
    email.innerText = user.email;

    header.classList.add(styles.header)
    profileDiv.classList.add(styles.profileDiv)
    main.classList.add(styles.main)
    profileInfo.classList.add(styles.profileInfo)
    creationPublication.classList.add(styles.create)
    publicateForm.setAttribute('id','userId')
    publicateForm.classList.add(styles.publicateForm)
    publicateForm.append(
        getInputFile({ type: 'file', inputTitle: 'Выберите фото',id:'publicationPhoto',style: styles.customFileUpload,callBack: null }),
        getInput({ type: 'text', inputTitle: 'Введите текст',id: 'publicationText', style: styles.input, callBack:null }),
        button({text:"Опубликовать",style: styles.btn,callBack: null}),

    );
    creationPublication.append(publicateForm)

    
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

    profileInfo.append(userName)
    profileInfo.append(changeInfoBtn)
    // profileInfo.append(email)
    // profileInfo.append(login)
   


    main.append(profileInfo)
    main.append(creationPublication)
    //main.append(friendsList);
    main.append(publicationsList);
    profileDiv.append(main);
    //profileDiv.append(footer);

    return profileDiv
}