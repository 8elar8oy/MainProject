import styles from  './publicationCard.module.css'


export const publicationCard = publication => {
    const container = document.createElement('div');
    const head = document.createElement('div')
    const userInfo = document.createElement('div')
    const ava = document.createElement('div');
    const publicationImg = document.createElement('div');
    const name = document.createElement('p');
    const actions = document.createElement('div');
    const title = document.createElement('p');
    const body = document.createElement('p');

    const bottom = document.createElement('div');
    const likeImg = document.createElement('div');
    const likeAmount = document.createElement('div');
    container.classList.add(styles.container)
    title.classList.add(styles.title)


    container.setAttribute('id', publication.id)


    title.innerText = publication.title;
    body.innerText = publication.body;
    userInfo.append(ava,name)
    head.append(userInfo,actions);
    body.append(title,publicationImg)
    bottom.append(likeImg,likeAmount);

    container.append(head,body);
    return container;
};