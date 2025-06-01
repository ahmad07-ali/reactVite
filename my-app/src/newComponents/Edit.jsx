
import {useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Edit() {
    const location = useLocation()
    const id = location.state.ProductId
    const navigate = useNavigate()
    console.log(id)
    const[data,setData] = useState({
        name: '',
        price: '',
        size: '',
        color: '',
        category: '',
        quantity: '',
        description: ''
    })
    useEffect(()=>{
        axios.get(`http://localhost:3700/Products/getSingle/${id}`)
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
    function updateHandler(e){
        e.preventDefault()
        console.log(data)
        axios.put('http://localhost:3700/Products/updateProduct/'+id,data).then(res=>{
            navigate('/crud')
        })
        
    }
    return(
        <div>
            <form onSubmit={(e)=>updateHandler(e)}>
                <br /><br /><br />
               <div>
                    <input className="border-2" type="text" name='name' id='name' value={data.name} onChange={(e)=>changeHandler(e)}/>
                </div>
                <div>
                    <input className="border-2" type="number" name='price' id='price' value={data.price} onChange={(e)=>changeHandler(e)}/>
                </div>

                <div>
                    <input className="border-2" type="text" name='size' id='size' value={data.size} onChange={(e)=>changeHandler(e)}/>
                </div>
                <div>
                <input className="border-2" type="text" name='color' id='color' value={data.color} onChange={(e)=>changeHandler(e)}/>
                </div>

                <div>
                    <input className="border-2" type="category" name='category' id='category' value={data.category} onChange={(e)=>changeHandler(e)}/>
                </div>

                <div>
                    <input className="border-2" type="Number" name='quantity' id='quantity' value={data.quantity} onChange={(e)=>changeHandler(e)}/>
                </div>
                <div>
                <input className="border-2" type="text" name='description' id='description' value={data.description} onChange={(e)=>changeHandler(e)}/>
                </div>
                <input type="submit" className='btn btn-primary' value="Update"/>
    
            </form>
        </div>
    )
}

export default Edit;