import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { create_post, fetch_posts } from '../api';

export default function PostsNew() {
  let history = useHistory();
  let [post, setPost] = useState({});

  function submit(ev) {
    ev.preventDefault();
    console.log(ev);
    console.log(post);
    create_post(post).then((resp) => {
      if (resp["errors"]) {
        console.log("errors", resp.errors);
      }
      else {
        history.push("/");
        fetch_posts();
      }
    });
  }

  function updateName(ev) {
    let p1 = Object.assign({}, post);
    p1["eventname"] = ev.target.value;
    setPost(p1);
  }

  function updateBody(ev) {
    let p1 = Object.assign({}, post);
    p1["body"] = ev.target.value;
    setPost(p1);
  }

  return (
    <Row>
      <Col>
        <h2>New Event</h2>
        <Form onSubmit={submit}>
          <Form.Group>
            <Form.Label>Event Name</Form.Label>
            <Form.Control as="textarea"
                          rows={4}
                          onChange={updateName}
                          value={post.eventname} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Event Date</Form.Label>
            <Form.Control as="textarea"
                          rows={4}
                          onChange={updateName}
                          value={post.eventname} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Event Body</Form.Label>
            <Form.Control as="textarea"
                          rows={4}
                          onChange={updateBody}
                          value={post.body} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Post!
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
