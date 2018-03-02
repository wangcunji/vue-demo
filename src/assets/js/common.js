import Axios from "axios";
import Qs from "qs";

function setAxios (obj){
    const instance = Axios.create(obj);
    return instance
}


function normalAxios (){
    return setAxios({
        baseURL:"/test1",
        headers: {
            ClientType: "Web",
            Equipment: "Web",
            ClientSystem: "Web",
            baseuserid: "b18fd6e8-0b7a-420e-b8cd-913a9b727954",
            baseEntId: "59dea301-a9c1-4511-bb0e-d801af7aa2df"
        },
        timeout:20000,
        transformRequest:[
            function (data) {
                data = Qs.stringify(data);
                return data;
            }
          ],
        onUploadProgress(progressEvent){
            console.log(progressEvent)
        },
        onDownloadProgress(progressEvent){
            console.log(progressEvent)
        }
    });
};

const common = {
    normalAxios
}
export default common