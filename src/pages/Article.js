import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ArticlesData from "./articles-data";
import ArticleBrief from "../components/ArticleBrief";
import NotFound from "./NotFound";
import Comments from "./Comments";
import UpVotes from "./Upvotes";
import AddComment from "./AddComment";

const Article = () => {
    let params = useParams();
    const name = params.name;
    const article = ArticlesData.find(article => article.name === name);
    const otherArticles = ArticlesData.filter(article => article.name !== name);
    const [articleInfo, setArticleInfo] = useState({upVotes: 0, comments: []});


    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/article/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [params.name]);

    if (!article) return <NotFound/>
    return (
        <div id="page-body">
            <h1>{article.title}</h1>
            <UpVotes name={name} upVotes={articleInfo.upVotes} setArticleInfo={setArticleInfo} />
                {article.content.map((para, key) => (
                    <p key={key}>{para}</p>
                ))}
            <Comments comments={articleInfo.comments}/>
            <AddComment name={name} setArticleInfo={setArticleInfo}/>
            <h3>Other articles</h3>
            <ArticleBrief articles={otherArticles}/>
        </div>
    )
}

export default Article;