import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, deletePost} from '../../../actions';

class PostsAdminIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  onDeleteClick(id) {
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  renderPosts() {
    const posts = this.props.posts
    return _.map(posts, post => {
      return (
        <tr key={post.id}>
          <td>{post.thumb_url}</td>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.slug}</td>
          <td>{post.created_at}</td>
          <td>{post.update_at}</td>
          <td>
            <Link className="btn btn-info" to={`/posts/${post.id}`}>Show</Link>
            <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this, post.id)}>Delete</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>thumb</th>
              <th>id</th>
              <th>title</th>
              <th>slug</th>
              <th>created_at</th>
              <th>update_at</th>
              <th width="10%">action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPosts()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts, deletePost})(PostsAdminIndex);
