import React from "react"
import Head from 'next/head'
import styles from '../styles/one.module.css'
import Link from "next/link"
import fetch from 'isomorphic-unfetch'

const Blog_Home=({log,con,network})=>(
  
    <html>
        <Head>
            <title>Soltan H</title>
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link href='https://fonts.googleapis.com/css?family=Saira Extra Condensed' rel='stylesheet'></link>
            <link rel="shortcut icon"  href={log[1]}/>
        </Head>
        <body>
            <div id="close_main" class="sidebar" onClick={closeNav}>
                <nav class="s2">
                <Link href={network[0]}><img src="/instagram.ico" width="30" className={styles.img2}></img></Link>
                <Link href={network[2]}><img src="/linkdem.ico" width="30" className={styles.img2}></img></Link>
                <Link href={network[3]}><img src="/git.png" width="30" className={styles.img2}></img></Link>
                <Link href={network[1]}><img src="/twitter.ico" width="30" className={styles.img2}></img></Link>
                </nav>
            </div>
            <div class="social">
                <div id="main">
                    <a class="open2" href="javascript:void(0)"onClick={openNav}>☰</a>
                </div>
                <div className={styles.logo}>
                    <a href={log[0]} id="logos"><img  className={styles.logo2} src={log[1]}></img></a>
                </div>
                <nav class="s1" >
                    <a href={network[0]}><img src="/instagram.ico" width="30"className={styles.img}></img></a>
                    <a href={network[2]}><img src="/linkdem.ico" width="30" className={styles.img}></img></a>
                    <a href={network[3]}><img src="/git.png" width="30" className={styles.img}></img></a>
                    <a href={network[1]}><img src="/twitter.ico" width="30" className={styles.img}></img></a>
                </nav>
                </div>
                <div class="text">
                    <p class="blog_name">Soltan<span class="blog_last_name"> Huseynov</span></p>
                    <p className={styles.text}>software engineer , contact-account : <a  className={styles.link} href={con[0]}><span>sultan.huseynov20@gmail.com</span></a></p>
                    <p className={styles.text}>discord : <a  className={styles.link} href={con[1]}>{con[1]}</a></p>
                </div>
        </body>
    </html>


)


const openNav=()=> {
    document.getElementById("close_main").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px"; 
}
const closeNav=()=>{
    document.getElementById("close_main").style.width="0"
    document.getElementById("main").style.marginLeft="0"
}


Blog_Home.getInitialProps=async({req})=>{
    const res= await fetch("https://soltan-blog.herokuapp.com/api/posts")
    const json= await res.json()
    //console.log(json)
    return{
        log:[json.status,json.logo_.img],
        con:[json.contact.gmail,json.contact.discord],
        network:[
            json.socila.instagram,
            json.socila.twitter,
            json.socila.linked,
            json.socila.github
        ]

    }
}
/*
export async function getStaticProps(){
    const Data_get=await fetch("http://localhost:3000/api/posts")
    const jsonGet=await Data_get.json()
    return{
        props:{
            blogStatus:jsonGet.Status,
            blogGmail:jsonGet.Gmail,
            blogDiscord:jsonGet.Discord,
            //social
            blogInsta:jsonGet.Instagram,
            blogLinke:jsonGet.Linked,
            blogGit:jsonGet.Github,
            blogTwit:jsonGet.Twitter

        }
    }

}
*/
export default Blog_Home