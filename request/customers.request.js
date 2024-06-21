import { check } from "k6"
import http from "k6/http"
import Utils from "../utils/utils"
import Login from "./login.request";
import data from "../data/usuarios.json";

export default class CustomersRequest {
    postCustomer() {
        const login = new Login()
        login.access(data.usuarioOk.user, data.usuarioOk.pass)

        const response = http.post(`${Utils.getBaseUrl()}/customers`, {
            headers: {
                Authorization: `Bearer ${login.getToken()}`
            },
            body: {
                email: "a@gmail.com",
                firstName: "Amado",
                lastName: "Batista",
                phone: "string"
            }
        })
        check(response, { 'post deve retornar 201': response => response && response.status === 201 })
    }
}