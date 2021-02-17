import React, { useEffect, useState } from 'react'
import './Timer.css'
import { v4 as uuidv4 } from 'uuid';
import StopWatch from './StopWatch'

const AhCounterMain = () => {
    
    //Name

    const [name, setName] = useState("")

    const onChangeName = e => {
        setName(e.target.value)
    }

    //Comments

    const [comments, setComments] = useState("")

    const onChangeComments = e => {
        setComments(e.target.value)
    }

    //Role

    const [role, setRole] = useState("Choose the role...")

    const onChangeRole = e => setRole(e.target.value)

    //Time
    
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    //const [time, setTime] = useState(0)

    //const plus = () => {setCount(count + 1)}

    //const minus = () => {setCount(count -1)}

    //List

    const [list, setList] = useState([])

    const addItem = () => {
        setList([...list, {id:uuidv4(), name:name, minutes:minutes, seconds:seconds, role:role, comment:comments}])
        setName("")
        setRole('Choose the role...')
        setComments("")
        setSeconds(0)
        setMinutes(5)
        
    }

    useEffect(() => {
        console.log(list);
    }, [list]) 

    return (
        <div className='container'>
            <div className="row justify-content-center mt-3 mx-auto">
                <h1 className='text-light'>Timer</h1>
            </div>
            <div className="row col-12 my-4 mx-auto">
                <div className="row col-12 mx-auto">
                    <div className="col-1 my-auto"><h4 className='text-2 my-auto'>#</h4></div>
                    <div className="col-3 my-auto"><h4 className='text-2 my-auto text-truncate'>Speaker</h4></div>
                    <div className="col-2 my-auto"><h4 className='text-2 my-auto text-truncate'>Time</h4></div>
                    <div className="col-2 my-auto"><h4 className='text-2 my-auto text-truncate'>Role</h4></div>
                    <div className="col-4 my-auto"><h4 className='text-2 my-auto text-truncate'>Comments</h4></div>
                </div>


                {list.map((item,id) => {
                    return(
                        <div className="row col-12 my-2 bg-dark mx-auto" key={id}>
                            <div className="col-1 my-auto text-truncate"><p className='text-2 my-auto'>{id+1}</p></div>
                            <div className="col-3 my-auto text-truncate"><p className='text-2 my-auto'>{item.name}</p></div>
                            <div className="col-2 my-auto text-truncate"><p className='text-2 text-center my-auto'>{item.minutes}:{item.seconds}</p></div>
                            <div className="col-2 my-auto text-truncate"><p className='text-2 my-auto'>{item.role}</p></div>
                            <div className="col-4 my-auto text-truncate"><p className='text-2 my-auto'>{item.comment}</p></div>
                        </div>
                    )
                })}
            </div>

            <div className='row col-12 mx-auto p-3 add-speaker mt-5'>
                <div className="col-12">
                    <div className='input-group'>
                        <input 
                            type="text"
                            name="name" 
                            className="form-control"
                            placeholder='Name'
                            value={name}
                            onChange={onChangeName}
                            required
                        />
                        <select 
                            className="custom-select" 
                            name="role"
                            value={role}
                            onChange={onChangeRole}
                        >
                                <option value="Choose the role..." selected>Choose the role...</option>
                                <option value="Timer" >Timer</option>
                                <option value="Grammarian">Grammarian</option>
                                <option value="Encouragement Note">Encouragement Note</option>
                                <option value="Tosatmaster">Tosatmaster</option>
                                <option value="Speaker">Speaker</option>
                                <option value="Evaluator">Evaluator</option>
                                <option value="General Evaluator">General Evaluator</option>
                                <option value="Other">Other</option>
                        </select>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Comments"
                            name='comments'
                            value={comments}
                            onChange={onChangeComments}
                        />
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center  mt-5">
                    <div className="row col-12 justify-content-center ">
                        <h1 className='text-2 px-3'>{minutes}:{seconds}</h1>
                    </div>
                </div>
                
                <div className=" mx-auto row col-12 d-flex justify-content-center mt-5">
                    <div className="row col-12 justify-content-center pb-1">
                    <StopWatch
                        setSeconds = {setSeconds}
                        setMinutes = {setMinutes}
                    />
                    </div>
                    <div className="row col-12 justify-content-center"><button className='btn bg-2' onClick={addItem}>Add Speaker</button></div>
                </div>

            </div>
            
        </div>
    )
}

export default AhCounterMain