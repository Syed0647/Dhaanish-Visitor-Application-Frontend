import axios from "axios";

const VISITORS_API_BASE_URL = "http://localhost:8081/api/v1/visitor"
const GET_VISITOR_API_BASE_URL = "http://localhost:8081/api/v1/getVisitor"
const VISITOR_CHECKOUT_API = "http://localhost:8081/api/v1/check-out"
const ALL_VISITORS_API = "http://localhost:8081/api/v1/allVisitors"

class VisitorsService{

    saveVisitors(visitor){
        return axios.post(VISITORS_API_BASE_URL,visitor);
    }

    getVisitors(visitor){
        return axios.post(GET_VISITOR_API_BASE_URL,visitor);
    }

    updateCheckOutTime(visitorId){
        return axios.post(VISITOR_CHECKOUT_API,visitorId);
    }

    getAllVisitors(){
        return axios.get(ALL_VISITORS_API);
    }
}

export default new VisitorsService();