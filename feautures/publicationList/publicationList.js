 import styles from './publicationList.module.css'
 import { getPublications } from '../../api/getPublications'
 import { publicationCard } from '../../components/publicationCard'
 export const getPublicationList = (user) =>{
    const publicationsList = document.createElement('div')
    publicationsList.classList.add(styles.publicationList)
    publicationsList.setAttribute('id','publicationList')
    getPublications(`publications`).then(publications=>{
       const filteredPublications = publications.data.filter(publication => publication.userId === user.id)
       console.log(publications.data)
       console.log(filteredPublications)
       filteredPublications.reverse().map(publication => publicationsList.append(publicationCard(publication,user)))
    }
      
    )
    return publicationsList
 }