import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';

const Body = ()=>{

    const [data, setData] = useState([]);

    useEffect(() => {
        getList();
      }, []);
      
      function getList(){
        axios.get('https://v8.api.storemate.parallaxtec.com/api/ims/unit/list',{
            headers:{
  
                    'X-Tenant': 'gayashan',
                    'Accept' : 'application/json',
            }
        }).then(res=>{
          console.log(res.data)
          setData(res.data.data.datatable)
        }).catch(e=>console.log(e))
      }

      function listDelete(id){
        axios.delete(`https://v8.api.storemate.parallaxtec.com/api/ims/unit/${id}`,{
            headers:{
  
                    'X-Tenant': 'gayashan',
                    'Accept' : 'application/json',
            }
        }).then((re)=>{
          re.json().then((resp)=>{
            console.warn(resp)
            getList();
          })
        })
      }

      // const listDelete = (id)=>{
      //   axios.delete(`https://v8.api.storemate.parallaxtec.com/api/ims/unit/${id}`,{
      //       headers:{
  
      //               'X-Tenant': 'gayashan',
      //               'Accept' : 'application/json',
      //       }
      //   }).then(res=> console.log("Delete", res)).catch(e=>console.log(e))
      // }

    return(
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Actual_name</th>
            <th>Short_name</th>
            <th>Allow_decimal</th>
            <th>Base_unit_id</th>
            <th>Base_unit_multiplier</th>
            <th>Base_unit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(d =>
            <tr key={d.id}>
              <td>{d.actual_name}</td>
              <td>{d.short_name}</td>
              <td>{d.allow_decimal}</td>
              <td>{d.base_unit_id}</td>
              <td>{d.base_unit_multiplier}</td>
              <td>{d.base_unit}</td>
              <td>
                <Button variant="success" >Edit</Button>

                <Button variant="danger" onClick={()=>listDelete(d.id)}>Delete</Button>
              </td>
            </tr>)}
        </tbody>
      </Table>
      </div>
    )
}

export default Body;