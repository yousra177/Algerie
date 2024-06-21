import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export default function About_feed(props) {
  return (
    <div>
     
    <CardGroup>
    <Card>
        <Card.Img variant="top" src={props.data.url} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
          {props.data.thumbnailUrl}

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">        {props.data.albumId}
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={props.data.url} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
          {props.data.thumbnailUrl}

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">        {props.data.albumId}
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={props.data.url} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
          {props.data.thumbnailUrl}

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">        {props.data.albumId}
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}
