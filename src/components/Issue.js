import React from 'react'

const Issue = ({ issue }) => {

    return (
        <li>
            {issue.name}<br></br>{issue.issueFaced}
        </li>
    )
}

export default Issue