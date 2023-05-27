import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../../public/usuario.png'

function Cards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src= 'usuario.png'/>
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Subtitle>{props.titulo}</Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Fecha: {props.fecha}</ListGroup.Item>
        <ListGroup.Item>Curso: {props.curso}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={props.link} target='_blank'>Enlace de zoom</Card.Link>
        <br/>
        <Button variant="danger">Cancelar</Button>
      </Card.Body>
    </Card>
    
  );
}

export default Cards;