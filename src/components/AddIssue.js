import React from 'react'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddIssue = () => {
    const [name, setName] = useState('')
    const [issueFaced, setIssue] = useState('')

    const { addIssue } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newIssue = {
            id: Math.floor(Math.random() * 100000000),
            name,
            issueFaced
        }

        addIssue(newIssue)
    }

    return (
        <>
            <h4>Report an Issue</h4> 
            <form onSubmit = {onSubmit}>
                <div className = 'form-control'>
                    <label htmlFor = 'name'>Your name</label>
                    <input type = 'text' value = {name} onChange = {(e) => setName(e.target.value)} placeholder = 'Enter your name...' />
                </div>
                <div className = 'form-control'>
                    <label htmlFor = 'issueFaced'>What you faced<br /></label>
                    <input type = 'text' value = {issueFaced} onChange = {(e) => setIssue(e.target.value)} placeholder = 'Talk about what you faced...' />
                </div>
                <br></br>
                <button className = 'btn'>Speak up!</button>
            </form>
        </>
    )
}

export default AddIssue
