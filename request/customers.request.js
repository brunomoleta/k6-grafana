import {check} from "k6"
import http from "k6/http"
import Utils from "../utils/utils"
import Login from "./login.request";
import userData from "../data/usuarios.json";
import { faker } from '@faker-js/faker';
export default class CustomersRequest {
    newCustomer = {
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phone: faker.phone()
    }

    postCustomer() {
        const login = new Login()
        login.access(userData.usuarioOk.user, userData.usuarioOk.pass)

        const response = http.post(`${Utils.getBaseUrl()}/customers`, {
            headers: {
                Authorization: `Bearer ${login.getToken()}`
            },
            body: JSON.stringify(this.newCustomer)
        })
        check(response, { 'post de customer deve retornar 201': response => response && response.status === 201 })
    }
}