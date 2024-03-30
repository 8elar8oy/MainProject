import {getInput} from "../../components/input";
import {button} from "../../components/button";
import {getUsers} from "../../api/getUsers";
import styles from "./loginForm.module.css"


export const userData = {
    id: '',
    getId(id) {
        this.id = id
    }
};
const changePage =()=>{
    console.log('Button clicked',userData);
    window.location.pathname = '/profile'
}

const checkUser = (data,loginData) =>{

    return data.find(user =>user.email === loginData.email && user.password === loginData.password)
}

const getPassword = password => {
    userData.password = password;
};

const getEmail = email => {
    userData.email = email;
};

const getUserData = () => {
    getUsers('users').then(
        users => {console.log(users.data,userData); const info = checkUser(users.data,userData); return info}
    ).then(
        info =>{

            if(info){

                userData.getId(info.id)
                console.log(userData.id)
                alert('Авторизация успешна')
                changePage()
            }
            else{
               // alert('неверный пароль')
            }
        }

    )
        //cleanUserForm(getUserForm().id)

        //.then( data=> console.log(data))

        /*changePage*/
        // patchUsers('users',userData,userData.id ).then(data => console.log(data.data))


        return

    if (!userData.name||!userData.email||!userData.username){
        return
    }
    // createUsers('users', userData)
    //     .then(data => {
    //         const users = document.getElementById('userContainer');
    //         users.append(userCard(data.data));
    //         cleanUserForm(getUserForm().id)
    //     })
    //     .catch(null);






};
const cleanUserForm = (id) =>{
    const form1 = document.getElementById(id)
    form1.reset()

    userData.password = ''
    userData.email =''

}
export const getUserForm = () => {
    const form = document.createElement('form');

    form.setAttribute('id','userId')
    form.classList.add(styles.form)
    form.append(
        getInput({ type: 'text', inputTitle: 'Email',id:'email',style: styles.input,callBack: getEmail }),
        getInput({ type: 'password', inputTitle: 'Пароль',id: 'password', style: styles.input, callBack:getPassword }),
        button({text:"Войти",style: styles.btn,callBack: getUserData}),
        button({text: 'Зарегистрироваться',style: styles.btn})
    );

    return form;
};