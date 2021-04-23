
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Post({post}) {
  return (
    <Col md="3">
      <Card>
        <Card.Text>
          Posted by {post.user.name} <br/><br/>
          <b>{post.eventname}</b><br/><br/>
          {post.date}<br/><br/>
          {post.body}
        </Card.Text>
      </Card>
    </Col>
  );
}

function Feed({posts, session}) {
  let cards = posts.map((post) => (
    <Post post={post} key={post.id} />
  ));

  let new_link = null;
  if (session) {
    new_link = (
      <p><Link to="/posts/new">New Post</Link></p>
    )
  }

  return (
    <div>
      <h2>Event Feed</h2>
      { new_link }
      <Row>{cards}</Row>
    </div>
  );
}

export default connect(
  ({posts, session}) => ({posts, session}))(Feed);
