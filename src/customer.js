import axios from 'axios';
import apiURL from './api';


function getCustomerList () {
   axios.get( apiURL ).then( response => response.data)

}

function postCustomer(customer) {
    axios.post( apiURL, customer ).then(response => {
        return response.data;
    })
}

export function getCustomerList() {
axios.get(apiURL).then(response => { return response.data;
    })
}