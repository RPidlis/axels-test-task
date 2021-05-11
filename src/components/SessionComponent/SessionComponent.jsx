import styled from 'styled-components'

const Wrapper = styled.div`
  width: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const Button = styled.button`
  height: 22px;
  border: none;
  background-color: white;
  color: red;
`
const Underline = styled.div`
  width: 40px;
  height: 2px;
  background-color: red;
`
const SessionComponent = ({time = 12, handleOpenModal}) => {

    return (
        <Wrapper>
            <Button onClick={() => handleOpenModal()}>
                {time}
            </Button>
            <Underline/>
        </Wrapper>
    )
}
export default SessionComponent

