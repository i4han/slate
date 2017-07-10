import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Post from './post'

class Posts extends React.Component {
    constructor(props) { super(props) }
    render() {
        return this.props.data.posts && this.props.data.posts instanceof Array
        ? <div> {this.props.data.posts.map( post => <Post key={post.id} post={post}/> )} </div>
        : <div></div>
    }
}

// Posts requires props with a data attribute of an array of posts
Posts.propTypes = {
    data: PropTypes.shape({
        posts: PropTypes.array
    }).isRequired
};

// Define the graphql query to retrieve the posts and the desired attributes
// Use the graphql container to run the allPosts query and pass the results to PostsContainer
export default PostsContainer = graphql( gql`
  query PostsForDisplay {
    posts {
      id,
      content,
      views
    }
  }
`, { options: {pollInterval: 5000} })(Posts);
