import styles from './mainDiv.module.css'
export const getMain = (info,creation,publications) =>{
    const main = document.createElement('main')
    main.classList.add(styles.main)
    main.append(info)
    main.append(creation)
    //main.append(friendsList);
    main.append(publications);
    return main
}