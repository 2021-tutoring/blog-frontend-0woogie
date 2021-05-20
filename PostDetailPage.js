import PostDetail from "../components/PostDetail";
import Comment from "../components/Comment";
import Comments from "../components/Comments";
import {Link} from "react-router-dom";

const PostDetailPage = (props) =>{

    console.log(props.match);

  return(
      <div>
          <p>포스트 상세 postId는 {props.match.params.postId}</p>
          <PostDetail postId={props.match.params.postId} history={props.history}/>
          <Comments postId={props.match.params.postId} history={props.history}/>
          <Link to={`/`}>
              메인화면으로 돌아가기
          </Link>
      </div>
  )
};

export default PostDetailPage;