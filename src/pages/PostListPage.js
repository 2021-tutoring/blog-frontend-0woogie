import PostList from "../components/PostList";

const PostListPage = (props) =>{
  return(
      <div>
          <p>포스트 리스트</p>
          <PostList postId={props.match.params.postId} history={props.history}/>
      </div>
  )
};

export default PostListPage;