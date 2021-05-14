import { Button, Container } from 'react-bootstrap';


const SessionComponent = ({ time = 12, id, handleOpenModal }) => (
  <Container className="d-flex flex-column align-items-center mb-2">
    <Button onClick={() => handleOpenModal(id)} variant="outline-secondary">
      {time}
    </Button>
  </Container>
);

export default SessionComponent;
