import PostWrite from "../components/PostWrite";

const PostWritePage = (props) =>{
    return(
        <div>
            <p>포스트 작성</p>
            <PostWrite postId={props.match.params.postId} history={props.history}/>
        </div>
    )
};

export default PostWritePage;