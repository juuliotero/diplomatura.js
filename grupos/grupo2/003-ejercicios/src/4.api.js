import fetch from 'node-fetch';

export const getUrl = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => {
            return res.json();
        })
        .then(resJson => {
            console.log('nombre: ', resJson.name);
            console.log('calle: ', resJson.address.street)
        })
}

export const getRemoteData = async () => {
    let resultado = await fetch('https://jsonplaceholder.typicode.com/users/1')
    let resJson = await resultado.json();
    console.log('nombre: ', resJson.name);
    console.log('calle: ', resJson.address.street)
}