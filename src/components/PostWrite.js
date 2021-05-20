import {useEffect, useState} from "react";
import axios from "axios";

const PostWrite = (props) =>{

    const [post, setPost] = useState({
        userId: 1,
        title: "",
        subject: ""
    });

    let updatePost1 = e => {
        console.log(e.target.value)
        setPost({
            ...post,
            title: e.target.value
        });
        console.log(post);
    }
    let updatePost2 = e => {
        console.log(e.target.value)
        setPost({
            ...post,
            subject: e.target.value
        });
        console.log(post);
    }

    let addPost = () =>{
        alert(`게시글 ${post.title}을 등록합니다.`)
        axios.post("https://blog-tutoring.herokuapp.com/boards/1/posts",post)
            .then(res =>{
                console.log(res.data);
                props.history.push(`/posts/${res.data.postId}`);
            })
            .catch(e => {
                console.log(e.response);
                console.log(e.response.status);
                alert(e.response.data.message)
            });
    };

    let pressEnter = e =>{
        if (e.key === 'Enter') addPost();
    };

    return(
        <div>
            <p><input type="text" placeholder="제목을 입력해주세요" value={post.title} onChange={updatePost1} onKeyPress={pressEnter}/></p>
            <textarea rows="10" placeholder="내용을 입력해주세요" value={post.subject} onChange={updatePost2}></textarea>
            <p><button onClick={addPost}>게시물쓰기</button></p>
        </div>
    );

};

export default PostWrite;