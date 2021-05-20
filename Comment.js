//import 'Comment.css'
const Comment = (props) =>{

        return (
            <div>
                    <p>{props.comment.content}</p>
                    <p>{props.comment.date}</p>
                    <p>{props.comment.userId}</p>
            </div>
        )
};

export default Comment;