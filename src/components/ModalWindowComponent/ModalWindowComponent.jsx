import CinemaHallComponent from '../CinemaHallComponent/CinemaHallComponent'
import styled from 'styled-components'
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const ModalWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 250px;
  padding: 10px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  height: 100%;
`
const Tickets = styled.div`
  display: flex;
  flex-direction: column;

`
const ModalWindowComponent = () => {
    const history = useHistory()

    return (
        <>
            <Modal
                show={true}
                onHide={() => history.push('/')}
                size={'lg'}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Cinema Hall
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalWrapper>
                        <CinemaHallComponent/>
                        <Wrapper>
                            <h3>Tickets</h3>
                            <Tickets>
                                {'//some choized tickets'}
                            </Tickets>
                            <Button variant="danger" onClick={() => history.push('/')}>Buy Tickets</Button>
                        </Wrapper>
                    </ModalWrapper>
                </Modal.Body>
            </Modal>
        </>
    )

}

export default ModalWindowComponent
