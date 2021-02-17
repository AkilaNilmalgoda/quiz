// import { set } from 'mongoose';
import React, {useContext, useEffect, useState} from 'react'
import SessionContext from '../../../context/session/sessionContext';
import Spinner from '../../layout/Spinner/Spinner'
import './PresentSession.css'

const PresentSession = ({match}) => {
    const sessionContext = useContext(SessionContext);

    const {setPresentSession, Show, loading, addSpeaker, resetPresentation} = sessionContext
    
    //Get the questions
    useEffect(() => {
        setPresentSession(match.params.name)
        // eslint-disable-next-line
    }, []) 

    const [IntShow, setIntShow] = useState(Show)

    useEffect(() => {
        setIntShow(Show)
    }, [Show])

    //Display the Questions

    const [display, setDisplay] = useState({id:"",item:"",speaker:""})

    //Add Speaker

    const [speaker, setSpeaker] = useState("")

    const onChange = e => setSpeaker(e.target.value)

    const addNewSpeaker = e => {
        e.preventDefault();

        const newspeaker = {id:display.id, speaker:speaker}

        addSpeaker(newspeaker);
        setSpeaker("")
    }

    //Reset Presentation

    const reset = () => {
        resetPresentation();
        setDisplay({id:"",item:"",speaker:""})
    }

    //Display voting

    const [showVote, setShowVote] = useState(false)

    const ShowVoting = () => {
        setShowVote(!showVote)
    }

    
    
    if(loading) 
        return <Spinner/>;
    return (

        <div>
            {/* Question Section */}
            <h1 className='text-4 text-center py-4'>Toastmasters Table Topics</h1>
            <h2 className='text-3 text-center py-2'>{IntShow.name}</h2>
            <div className="row col-12  mt-3 mx-auto justify-content-around" >
            {IntShow.items.map((object,index) => {
                
                return(
                        <div key={object.id} className="col-12 col-md-4 col-sm-12 homework-result-unit mb-2" >
                            <div className="question-number-unit" onClick={() =>setDisplay(object)}>
                                <h4 className="text-center">Question</h4>
                                <h4 className="text-center">{index +1}</h4>
                                <h5 className="text-center">{object.speaker}</h5>
                            </div>
                        </div>
                )
            })}
            </div>

            {/* Question Unit Section */}
            <div>
                {display.item !== "" && 
                    <div className='Modal-overlay' >
                        <div className='Modal'>
                            <div className='question-box d-flex'>
                            
                                <h1 className='display-question m-auto text-light'>{display.item}</h1>
                            </div>
                            <h3 className="text-center text-2">Add Speaker</h3>
                        <form className='justify-content-around'>
                        
                        <div className='row input-group justify-content-center m-auto '>
                            <input
                                id="speaker" 
                                type="text" 
                                placeholder="speaker" 
                                name="speaker"
                                value={speaker}
                                onChange={onChange}
                                className='col-6 form-control'
                            />
                            <div className="input-group-append">
                                <button className='btn bg-3 text-light' onClick={addNewSpeaker}>Add</button>
                            </div> 
                            
                            
                        </div>
                        <div className='row input-group justify-content-center m-auto pt-2'>
                                <button className='btn bg-4 text-light' onClick={()=>setDisplay({id:"",item:"",speaker:""})}>Close</button>
                            </div>
                        </form>
                        </div>
                    </div>}  
            </div>
            {/* Voting Section */}
            <div className='my-3'>
                <div >
                <div className='row justify-content-center'>
                    <button className='btn bg-2' onClick={ShowVoting}>Start Voting</button>
                </div>
                </div>
                {showVote && 
                <div className='Modal-overlay' onClick={ShowVoting}>
                <div className='Modal-vote'>
                <div className='row col-12 justify-content-around mt-3 mx-auto '>
                    {IntShow.items.map((object, id) => {
                        return(
                            <div className='col-md-3 col-sm-12 speaker-unit mb-2 m-1 align-middle' key={id}>
                                <h3 className="text-center text-light align-middle">{object.speaker}</h3>
                            </div>
                            
                        )
                    })}
                </div>
                <div className='row input-group justify-content-center m-auto pt-2'>
                                <button className='btn btn-danger' onClick={ShowVoting}>Close</button>
                            </div>
                </div>
                </div>
                }
            </div>

            {/* Reset Section */}
            <div className='row my-3 justify-content-center'>
                <button className='btn bg-4 text-light' onClick={reset}>Reset</button>
            </div>


            
        </div>
    )
}

export default PresentSession
