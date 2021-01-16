import React, {useContext, useEffect} from 'react';
import SessionContext from '../../context/session/sessionContext'


const EditSession = ({match}) => {
    const sessionContext = useContext(SessionContext);

    const {setItemToEdit, EditThis} = sessionContext;


    useEffect(() => {
        setItemToEdit(match.params.id)
        console.log(match.params.id);
    }, [])
    

    return (
        <div>
            <h2>Edit</h2>
            <h3>{EditThis.name}</h3>
            
        </div>
    )
}

export default EditSession