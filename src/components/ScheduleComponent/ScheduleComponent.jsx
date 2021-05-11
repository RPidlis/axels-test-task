import { useState } from 'react'
import SessionComponent from '../SessionComponent/SessionComponent'
import styled from 'styled-components'
import ModalWindowComponent from '../ModalWindowComponent/ModalWindowComponent'

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
    const [show, setShow] = useState(false)


    return (
        <Schedule>
            {show && <ModalWindowComponent setShow={setShow} show={show}/>}
            <SessionComponent time={'10:00'} setShow={setShow}/>
            <SessionComponent time={'12:00'} setShow={setShow}/>
            <SessionComponent time={'14:00'} setShow={setShow}/>
            <SessionComponent time={'16:00'} setShow={setShow}/>
            <SessionComponent time={'18:00'} setShow={setShow}/>
            <SessionComponent time={'20:00'} setShow={setShow}/>
        </Schedule>
    )
}


export default ScheduleComponent

