import { group } from 'k6';
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
    const customers = new CustomersRequest()
    group('post new customer', () => {
        customers.postCustomer()
    })

}
