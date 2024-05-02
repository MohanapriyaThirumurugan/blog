import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Blogcart({title,image,desc}) {
    // let [title,settitle]=useState("")
    // let [image,setimage]=useState("")
    // let [desc,setdes]=useState("")
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} className='imagecss' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Blogcart