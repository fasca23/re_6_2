import React from "react";
import PropTypes from 'prop-types'

function NotesList({ notes, onDelete }) {
    // Думаю последние заметки лучше выше показывать
    let notesRevers = notes.slice(0).reverse();
    return (
        <ul className="notes-list">
            {notesRevers.map((note) => 
                <li>
                    <li className="list-item item">
                        <button onClick={() => onDelete(note.id)} className="list-item-btn">X</button>
                        <div className="list-item-content">{note.content}</div>
                    </li>
                </li>
            )}
        </ul>
    )
}
NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default NotesList