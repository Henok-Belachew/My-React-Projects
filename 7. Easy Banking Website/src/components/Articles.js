import React from "react";
import "./styles.css/articles.css"
import ArticleCard from "./ArticleCard";
import ArticlesData from "./ArticlesData";

export default function Articles () {

    const article = ArticlesData.map((item)=>{
        return (
            <ArticleCard path={item.path} author={item.author} title={item.title} paragraph={item.paragraph}/>
        )
    })
    return (
        <div className="articles">

            <h2>Last Articles</h2>

            <div className="article-container">
              
                {article}
            </div>
        </div>
    )
}