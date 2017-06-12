import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../../../actions';

class PostsAdminShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    if (_.isEmpty(this.props.posts)) {
      return <div>Loading...</div>;
    }
    const post = this.props.posts[Object.keys(this.props.posts)[0]]

    return (
      <div>
        <br />
        <Link className="btn btn-info" to="/">Back To Index</Link>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPost })(PostsAdminShow);


