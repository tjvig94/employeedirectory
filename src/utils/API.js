/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

async function getUsers() {
    return await axios.get('https://randomuser.me/api/?results=30&inc=name,email,phone,picture').then(res => {
        const users = res.data.results;
        return users.map(user => {
            return {
                first: user.name.first,
                last: user.name.last,
                email: user.email,
                phone: user.phone,
                image: user.picture.thumbnail
            }
        })
    })
   
}

export default getUsers;
