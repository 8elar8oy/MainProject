import styles from './header.module.css'
import { getNav } from '../../components/nav'
export const getHeader = ()=> {
    const header = document.createElement('header')
    const headerNav = getNav()
    header.classList.add(styles.header)
    header.append(headerNav)
    return header
}