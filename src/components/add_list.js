import React from 'react'
import AddChoice from './add_choice'

const AddList = (props) => {
    return (
        <div>
            <p>{props.choices.length} Results Found</p>
            <table>
                <tbody>
                    {props.choices.map(choice => (
                        <AddChoice choice = {choice} onSelection = {props.onSelection} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AddList