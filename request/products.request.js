import {check} from "k6"
import http from "k6/http"
import Utils from "../utils/utils"
import {faker} from "@faker-js/faker";

export default class ProductsRequest {
    newProduct = {
        "description": faker.commerce.productDescription(),
        "itemPrice": faker.commerce.price(),
        "name": faker.commerce.productName()
    }

    postProduct() {
        const response = http.post(`${Utils.getBaseUrl()}/products`, {
            headers: {
                Authorization: `Bearer ${login.getToken()}`
            },
            body: JSON.stringify(this.newProduct)
        })
        check(response, {'post de produto deve retornar 201': response => response && response.status === 201})
    }
}