import axios from "axios";

class Service {
    sendEmail = async (values) => {
        try {
            return await axios.post('https://safe-bastion-16238.herokuapp.com/send-email', values);
        } catch (e) {
            console.log(e)
            return e;
        }
    }
}
export default Service;