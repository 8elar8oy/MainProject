import styles from './createPublicationDiv.module.css';
import { getInput } from '../../components/input';
import { button } from '../../components/button';
import { getInputFile } from '../../components/inputFile';
import { getPublications } from '../../api/getPublications';
import { createPublication } from '../../api/createPublication';
import { publicationCard } from '../../components/publicationCard';
import { getPublicationList } from '../publicationList/publicationList';
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
    const createPublicationDiv = document.createElement('div');
    
    createPublicationDiv.classList.add(styles.create);

    const publicationForm = document.createElement('form');
    publicationForm.classList.add(styles.publicateForm);
    
    const publicationText = getInput({ type: 'text', inputTitle: 'Введите текст', id: 'publicationText', style: styles.input });
    const publicationPhoto = getInputFile({ id: 'publicationPhoto' });
    const submitButton = button({ text: "Опубликовать", style: styles.btn, callBack: () => createNewPublication(user) });

    publicationForm.append(publicationPhoto, publicationText, submitButton);
    createPublicationDiv.append(publicationForm);

    return createPublicationDiv;
};

const createNewPublication = async (user) => {
    const publicationText = document.getElementById('publicationText').value;
    const publicationPhoto = document.getElementById('publicationPhoto').value;

    if (!publicationText && !publicationPhoto) {
        alert('Не оставляйте поля пустыми');
        return;
    }

    const publicationsList = getPublicationList(user);

    try {
        const publications = await getPublications('publications');
        const id = `${publications.data.length + 1}`;

        publicationData.userId = user.id;
        publicationData.id = id;
        publicationData.title = publicationText;
        publicationData.image = publicationPhoto.name;

        await createPublication('publications', publicationData);
        const publication = publicationCard(publicationData, user);
        publicationsList.append(publication);
    } catch (error) {
        console.error('Ошибка при создании публикации:', error);
        alert('Произошла ошибка при создании публикации');
    }
};


   