import axios from 'axios';
export default function getPeople() {
    return fetch('https://localhost:44327/api/React')
        .then(data => data.json());
}

export async function getPersonById(id) {
    try {
        let response = await fetch('https://localhost:44327/api/React/' + id);
 
       let json = await response.json();
     
        return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function createperson(person) {

    try {
        let response = await axios.post('https://localhost:44348/api/React/', {
            FirstName: person.FirstName,
            Name: person.Name,
            PhoneNumber: person.InCityId
        });
        console.log(response);
        let json = await response.data;
        //console.log(json);
        return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}


export async function deleteperson(id) {

    try {
        let response = await axios.delete('https://localhost:44348/api/React/' + id);
        console.log(response);

        return true;
    }
    catch (e) {
        console.log('Error!', e);
        return false;
    }
}