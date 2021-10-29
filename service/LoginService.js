import 'react-native-gesture-handler';
//import TokenService from './TokenService';
import { api } from '../constants';
import TokenService from './TokenService';

export default {
    login: async (formData, onSuccess) => {
        fetch(api.link + '/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: formData.phone,
                password: formData.password,
            })
        })
            .then((response) => {
                console.log(response.json());
                return response;
            })
            .catch(error => console.log(error));
    },

    register: async (formData, onSuccess) => {
        return fetch(api.link + '/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                role: formData.role,
                name: formData.name,
                surname: formData.surname,
                birthDate: formData.birthDate,
                username: formData.phone,
                password: formData.password,

            })
        }).then(response => response.json())
          .then(token => TokenService.storeToken(token))
            .catch(error => console.log(error));
    },
}
