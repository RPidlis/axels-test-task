import styled from 'styled-components'

const CinemaHall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  height: 200px;
`
const CinemaRow = styled.div`
  display: flex;
  justify-content: space-around;
`
const Seat = styled.div`
  width: 30px;
  height: 40px;
  border-radius: 7px;
  background-color: red;
`


const CinemaHallComponent = () => {
    return (
        <CinemaHall>
            <CinemaRow>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
            </CinemaRow>
            <CinemaRow>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
            </CinemaRow>
            <CinemaRow>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
                <Seat/>
            </CinemaRow>
        </CinemaHall>
    )
}

export default CinemaHallComponent
