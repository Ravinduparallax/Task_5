import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import axios from 'axios';

const Dashboard = () =>{
    const [show, setShow] = useState(false);

    const HandleClose =()=> setShow(false);
    const HandleShow = ()=> setShow(true);

    //Post data hooks
    const [aname, setAName] = useState('');
    const [sname, setSName] = useState('');
    const [adecimal, setADecimal] = useState('');

    const data = {
        actual_name:aname,
        short_name:sname,
        allow_decimal:adecimal
    }

    //post data
    const postList = (er)=>{
        er.preventDefault();
        axios.post('https://v8.api.storemate.parallaxtec.com/api/ims/unit/save',data,{
            headers:{
  
                    'X-Tenant': 'gayashan',
                    'Accept' : 'application/json',
            }
        }).then((res)=> {
            console.log(res)
        }).catch(e=>console.log(e))
    }
    
    return (

        <div className="D-header">
            <h4>Dashboard/ Unit</h4>
            <Button variant='primary' onClick={HandleShow}>Add unit</Button>

            <Modal show={show} onHide={HandleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                            <Form.Label>Actual Name</Form.Label>
                            <Form.Control value={aname} type='text' placeholder='Enter Actual name' onChange={(er)=> setAName(er.target.value)} autoFocus/>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
                            <Form.Label>Short Name</Form.Label>
                            <Form.Control value={sname} type='text' placeholder='Enter Short name' onChange={(er)=> setSName(er.target.value)} />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                            <Form.Label>Allow Decimal</Form.Label>
                            <Form.Control value={adecimal} type='int' placeholder='Enter Allow decimal' onChange={(er)=> setADecimal(er.target.value)}  />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={HandleClose}>Close</Button>

                <Button type='submit' variant="primary"  onClick={postList}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
        
        
    )
}

export default Dashboard;