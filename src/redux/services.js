import axios from "axios";
import { API_URL } from '../constants/api'

export class CustomerService {
  list = async () => {
    const fullQuery = `${API_URL}/customers`;
    const response = await axios.get(fullQuery);
    return response
  };
}
