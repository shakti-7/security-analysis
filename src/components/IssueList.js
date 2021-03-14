import React from 'react';
import { useContext } from 'react'
import Issue from './Issue'

import { GlobalContext } from '../context/GlobalState'

const IssueList = () => {
    const { issues } = useContext(GlobalContext)

    return (
        <>
            <h3>Women need to speak up not just to be heard but to help other women. Help change the world, one woman at a time!</h3>
            <ul className = 'list'>
                {issues.map(issue => (<Issue key = {issue.id} issue = {issue} />))}
            </ul>
        </>
    )
}

export default IssueList