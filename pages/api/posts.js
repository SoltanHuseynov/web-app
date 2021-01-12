import {contact,socila,status,logo_} from "./json/data1.json"
//import {admin} from "./data/{02}.py"



export default (req,res)=>{
    res.json({
        contact,
        socila,
        status,
        logo_
    })
}
/*
const data1=(req,res)=>{
    res.statusCode=200
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify({
        Status:blog.status,
        Gmail:blog.gmail,
        Discord:blog.discord,
        //socila
        Instagram:socila.instagram,
        Linked:socila.linked,
        Github:socila.github,
        Twitter:socila.twitter
    }))

}
export default data1
*/