import axios from "axios";


export default {
    getCarInfo: function(search){
        return axios.get("/api/carinfo/" + search )
    },
    

}