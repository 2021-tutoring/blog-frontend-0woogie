import Comment from "./Comment";
import {useEffect, useState} from "react";
import axios from "axios";

const Comments = (props) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({
        userId: 1,
        date: "",
        content: ""
    });

    useEffect( ()=>{
        axios.get(`https://blog-tutoring.herokuapp.com/boards/1/posts/${props.postId}/comments`)
            .then(res => {
                console.log(res.data.comments);
                setComments(res.data.comments);
            })
            .catch(e=> {
                const status = e.response.status;
                if(status===404) {
                    console.log("redirect")
                    props.history.push('/posts/');
                }
                else{
                    //
                }
                alert(e.response.data.message)
            });
    },[]);

    let updateStatus = () =>{
        axios.get(`https://blog-tutoring.herokuapp.com/boards/1/posts/${props.postId}/comments`)
            .then(res => {
                console.log(res.data.comments);
                setComments(res.data.comments);
            })
            .catch(e=> {
                const status = e.response.status;
                if(status===404) {
                    console.log("redirect")
                    props.history.push('/posts/');
                }
                else{
                    //
                }
                alert(e.response.data.message)
            });
    }

    let updateComment = e => {
        console.log(e.target.value)
        setComment({
            ...comment,
            content: e.target.value
        });
        console.log(comment);
    }

    let addComment = () =>{
        alert(`${comment.content}를 등록합니다.`)
        axios.post(`https://blog-tutoring.herokuapp.com/boards/1/posts/${props.postId}/comments`,comment)
            .then(res =>{
                console.log(res.data.comments);
                updateStatus();
                setComment({
                    ...comment,
                    content: ''
                });
            })
            .catch(e => {
                console.log(e.response);
                console.log(e.response.status);
                alert(e.response.data.message)
            });
    };

    let pressEnter = e =>{
        if (e.key === 'Enter') addComment();
    };

    return(
        <div>
            {comments.map(comment=>(<Comment comment={comment}/>))}
            <input type="text" placeholder="댓글을 입력해주세요" value={comment.content} onChange={updateComment} onKeyPress={pressEnter}/>
            <button onClick={addComment}>댓글쓰기</button>
        </div>
    );
};

export default Comments;