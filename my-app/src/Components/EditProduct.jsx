
import {useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Edit() {
    const location = useLocation()
    const id = location.state.studentId
    const navigate = useNavigate()
    console.log(id)
    const[data,setData] = useState({
        rollno:'',
        name:'',
        address:'',
    })
    useEffect(()=>{
        axios.get(`http://localhost:3700/Students/getSingleStudent/${id}`)
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    }, [])
    function changeHandler(e){
        const newdata = {...data}
        console.log(newdata)
        newdata[e.target.id]=e.target.value
        console.log(newdata)
        setData(newdata)
    }
    function updataHandler(e){
        e.preventDefault()
        console.log(data)
        axios.put('http://localhost:3700/Students/updateStudent/'+id,data).then(res=>{
            navigate('/crud')
        })
        
    }
    return(
        <div>
            <form onSubmit={(e)=>updataHandler(e)}>
                <div>
                    <input className="border-2" type="number" name='rollno' id='rollno' value={data.rollno} onChange={(e)=>changeHandler(e)}/>
                </div>
                <div>
                    <input className="border-2" type="text" name='name' id='name' value={data.name} onChange={(e)=>changeHandler(e)}/>
                </div>
                <div>
                    <input className="border-2" type="text" name='address' id='address' value={data.address} onChange={(e)=>changeHandler(e)}/>
                </div>
    <button className='btn btn-primary'>Update</button>
    
            </form>
        </div>
    )
}

export default Edit;