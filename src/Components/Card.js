import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Card.css';

const CardComponent = React.memo(({ posts }) => {
  useEffect(() => {
    console.log('CardComponent re-rendered with new posts:', posts);
  }, [posts]);

  return (
    <div className="card-component-container">
      {posts.map((post) => (
        <Card key={post._id} className="card">
          <Card.Img variant="top" src={post.media.localdata} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.caption}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
});

export default CardComponent;
