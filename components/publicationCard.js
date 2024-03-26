import styles from  './publicationCard.module.css'


export const publicationCard = publication => {
    const container = document.createElement('div');
    const title = document.createElement('p');
    const body = document.createElement('p');
    container.classList.add(styles.container)
    title.classList.add(styles.title)


    container.setAttribute('id', publication.id)


    title.innerText = publication.title;
    body.innerText = publication.body;
    container.append(title,body);
    return container;
};