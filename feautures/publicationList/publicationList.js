 import styles from './publicationList.module.css'
 import { getPublications } from '../../api/getPublications'
 import { publicationCard } from '../../components/publicationCard'
 export const getPublicationList = (user) =>{
    const publicationsList = document.createElement('div')
    publicationsList.classList.add(styles.publicationList)
    getPublications('publications').then(publications=>
      publications.data.map(publication => publicationsList.append(publicationCard(publication,user)))
    )
    return publicationsList
 }