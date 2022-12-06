import axios from "axios";

class Service {
    sendEmail = async (values) => {
        try {
            return await axios.post('http://localhost:80/send-email', values);
        } catch (e) {
            console.log(e)
            return e;
        }
    }
}
export default Service;