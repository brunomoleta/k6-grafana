import { check } from "k6"
import http from "k6/http"
import Utils from "../utils/utils"

export default class ProductsRequest {
    postProduct(token) {
        let response = http.post(`${Utils.getBaseUrl()}/products`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        check(response, { 'post deve retornar 201': response => response && response.status === 201 })
    }
}