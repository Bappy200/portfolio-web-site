import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Blog.css";
function Blog() {
  return (
    <section id='blog' className="blog-section content">
      <div className="heading-text">
        <h2>Blog</h2>
      </div>
      <Row>
        <Col md={4} sm={12}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Blog Title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">3 May 2021</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Blog Title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">3 May 2021</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Blog Title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">3 May 2021</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Blog;
