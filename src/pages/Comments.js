import AddComment from "./AddComment";

const Comments = ({comments}) => (
    <>
        <h3>Comments: </h3>
        {comments.map((comment, key) => (
            <div className="comments" key={key}>
                <h4>{comment.name}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </>
)


export default Comments;