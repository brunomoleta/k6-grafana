import Login from "../request/login.request";
import data from "../data/usuarios.json";
import CustomersRequest from "../request/customers.request";

export const options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '5s', target: 0 },
        { duration: '10s', target: 50 },
        { duration: '5s', target: 0 }
    ],
    thresholds: {
        http_req_duration: ['p(99) < 1000']
    }
}

export default function () {

    let login = new Login()
    let user = new CustomersRequest()

    group('login and get token', () => {
        login.access(data.usuarioOk.user, data.usuarioOk.pass)
    })

    group('list users', () => {
        customers.postCustomer()

    })

}
