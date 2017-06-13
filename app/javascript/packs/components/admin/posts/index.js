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
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.created}</td>
          <td>{post.updated}</td>
          <td>
            <Link className="btn btn-small orange" to={`/posts/${post.id}`}>Edit</Link>
            <button className="btn btn-small red" onClick={this.onDeleteClick.bind(this, post.id)}>Delete</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-small blue" to={`/admin/posts/new`}>
            Add a Post
          </Link>
        </div>
        <table className="striped">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>created</th>
              <th>updated</th>
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
