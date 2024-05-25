import styles from './createPublicationDiv.module.css';
import { getInput } from '../../components/input';
import { button } from '../../components/button';
import { getInputFile } from '../../components/inputFile';
import { getPublications } from '../../api/getPublications';
import { createPublication } from '../../api/createPublication';
import { publicationCard } from '../../components/publicationCard';
import { getPublicationList } from '../publicationList/publicationList';
import { userData } from '../loginForm/loginForm';
export const publicationData = {
    userId: null,
    id: '',
    title: null,
    image: null,
    getId(id) {
        this.id = id;
    }
};
export const getCreatePublicationDiv = (user) => {

    // userData = user.data
    const createPublicationDiv = document.createElement('div');
    
    createPublicationDiv.classList.add(styles.create);

    const publicationForm = document.createElement('form');
    publicationForm.classList.add(styles.publicateForm);
    
    const publicationText = getInput({ type: 'text', inputTitle: 'Введите текст', id: 'publicationText', style: styles.input });
    const publicationPhoto = getInputFile({ id: 'publicationPhoto' });
    publicationPhoto.addEventListener('change', function(event) {
        console.log('вот так поворот')
        const file = event.target.files[0];
        console.log(file)
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onload = function(event) {
                const base64String = event.target.result;
                publicationData.image = base64String; 
                console.log(publicationData);
        };
        
    });
    const submitButton = button({ text: "Опубликовать", style: styles.btn, callBack: () => createNewPublication(user) });

    publicationForm.append(publicationPhoto, publicationText, submitButton);
    createPublicationDiv.append(publicationForm);

    return createPublicationDiv;
};

const createNewPublication = async (user) => {
    const publicationText = document.getElementById('publicationText').value;
    

    if (!publicationText && !publicationPhoto) {
        alert('Не оставляйте поля пустыми');
        return;
    }

    const publicationsList = document.getElementById('publicationList')

    try {
        const publications = await getPublications('publications');
        const id = `${publications.data.length + 1}`;
        
        

        publicationData.userId = user.id;
        publicationData.id = id;
        publicationData.title = publicationText;
        

        await createPublication('publications', publicationData);
        
        const updatedPublications = await getPublications(`publications`);
        const filteredPublications = updatedPublications.data.filter(publication => publication.userId === user.id)
        console.log(filteredPublications)
        displayPublications(filteredPublications, user);
       
        document.getElementById('publicationText').value = '';
        document.getElementById('publicationPhoto').value = '';
    } catch (error) {
        console.error('Ошибка при создании публикации:', error);
        alert('Произошла ошибка при создании публикации');
    }
};

export const displayPublications = (publications, user) => {
    
    const publicationsList = document.getElementById('publicationList');
    publicationsList.innerHTML = '';
    publications.reverse().forEach(publication => {
        console.log(publications)
        publicationsList.appendChild(publicationCard(publication, user));
    });
};

   