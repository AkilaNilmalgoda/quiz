import React from 'react'

const SessionItem = ({session}) => {

    const {name, questions} = session
    return (
        <div>
            <h3>{name}</h3>
            {questions.map(question => 
                <p>{question}</p>)}
        </div>
    )
}

export default SessionItem
