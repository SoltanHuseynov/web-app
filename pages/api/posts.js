import {contact,socila,status,logo_} from "./json/data1.json"

export default (req,res)=>{
    res.json({
        contact,
        socila,
        status,
        logo_
    })
}
