import { connect } from "react-redux";
/* import { Dispatch } from "redux"; */

import { PostPage } from "./post-page";
import { RootState } from "../../redux/reducers";
import * as I from "./interfaces";
import { postRequest } from "../../redux/actions/post-action";

const mapStateToProps = ({ post }: RootState): I.StateProps => ({
  posts: post.list,
  loading: post.loading,
  error: post.error,
});

/* const mapDispatchToProps = (dispatch: Dispatch): I.DispatchProps => ({
  fetchPost: () => dispatch(postRequest()),
}); */

const mapDispatchToProps = {
  fetchPost: postRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
