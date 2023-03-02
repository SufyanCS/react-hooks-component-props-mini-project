import React from "react";
import Articale from "./Articale";
const ArticleList = (props) => {
    return ( 
        <main>
            {props.posts.map((post) => {
                return (
                    <Articale
                        key= {post.id}
                        title = {post.title}
                        date = {post.date}
                        preview = {post.preview}
                    />  
                )
            } )}
        </main>
    );
} 
export default ArticleList;