import http from "../http-common";
//const http = require('../http-common.js');
class interDataService {
getAll(){
	return http.get("/mine");
}

get(id){
	return http.get(`/mine/${id}`);
}

create(data){
	return http.post("/mine", data);
}

update(id, data){
	return http.put(`/mine/${id}`, data);
}
delete(id){
	return http.delete(`/mine/${id}`);
}
deleteAll(){
	return http.delete(`/mine`);
}
findByTitle(title){
	return http.get(`/mine?title=${title}`);
}
}

export default new interDataService();