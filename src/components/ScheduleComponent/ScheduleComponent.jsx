import SessionComponent from '../SessionComponent/SessionComponent'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Schedule = styled.div`
  height: 200px;
  width: 100px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
`

const ScheduleComponent = () => {
    const history = useHistory()
    const handleOpenModal = () =>{
        history.push('/modal')
    }

    return (
        <Schedule>
            <SessionComponent time={'10:00'} handleOpenModal={handleOpenModal}/>
            <SessionComponent time={'12:00'} handleOpenModal={handleOpenModal}/>
            <SessionComponent time={'14:00'} handleOpenModal={handleOpenModal}/>
            <SessionComponent time={'16:00'} handleOpenModal={handleOpenModal}/>
            <SessionComponent time={'18:00'} handleOpenModal={handleOpenModal}/>
            <SessionComponent time={'20:00'} handleOpenModal={handleOpenModal}/>
        </Schedule>
    )
}


export default ScheduleComponent

