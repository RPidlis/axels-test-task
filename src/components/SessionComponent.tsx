import { Button, Container } from 'react-bootstrap';
import React from 'react';

type PropsType = {
  time: string;
  id: number;
  handleOpenModal: (id: number) => void;
};
const SessionComponent: React.FC<PropsType> = ({
  time,
  id,
  handleOpenModal,
}) => (
  <Container className="d-flex flex-column align-items-center mb-2">
    <Button onClick={() => handleOpenModal(id)} variant="outline-secondary">
      {time}
    </Button>
  </Container>
);

export default SessionComponent;
