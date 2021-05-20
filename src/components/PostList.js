import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const PostList = (props) =>{

    const [posts, setPosts] = useState([{
        postId: 2,
        userId: 1,
        title: "",
        subject: "",
        createdDate: "",
        commentNum: 0,
        viewCount: 1
    }]);

    useEffect( ()=>{
        axios.get(`https://blog-tutoring.herokuapp.com/boards/1/posts`)
            .then(res => {
                console.log(res.data.posts);
                setPosts(res.data.posts);
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

    let postInfo = posts => {
        return posts.map(posts => (
            <tr>
                <th>{posts.postId}</th>
                <th>{posts.subject}</th>
                <th>
                    <Link to={`/posts/${posts.postId}`}>
                        {posts.title}
                    </Link>
                </th>
                <th>{posts.commentNum}</th>
                <th>{posts.userId}</th>
                <th>{posts.viewCount}</th>
                <th>{posts.createdDate}</th>
            </tr>
        ));
    };

    return(
        <div>
        <table border="1">
            <thead>
            <tr>
                <th>ID</th>
                <th>카테고리</th>
                <th>제목</th>
                <th>댓글수</th>
                <th>글쓴이</th>
                <th>조회수</th>
                <th>작성일</th>
            </tr>
            </thead>
            <tbody>
            {postInfo(posts)}
            </tbody>
        </table>
            <Link to={`/posts`}>
                포스트 작성
            </Link>
        </div>
    )
};

export default PostList;