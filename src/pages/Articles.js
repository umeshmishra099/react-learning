import ArticlesData from "./articles-data";
import React from "react";
import {Link} from "react-router-dom";
import ArticleBrief from "../components/ArticleBrief";

const Articles = () => {
    return (
        <div id="page-body">
            <h1>Article</h1>
            <ArticleBrief articles={ArticlesData} />
        </div>
    )
}
export default Articles;