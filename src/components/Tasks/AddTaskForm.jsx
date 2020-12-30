import React, { useState } from 'react'
import addSvg from '../../assets/img/add.svg'

function AddTaskForm({ list, onAddTask }) {
    const [visibleForm, setFormVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const toggleFormVisible = () => {
        setFormVisible(!visibleForm);
        setInputValue('');
    }

    const addTask = () => {
        const obj = {
            listId: list.id,
            text: inputValue,
            completed: false
        }
        onAddTask(list.id, obj);
        toggleFormVisible();
    }
    return (
        <div className="tasks__form">
            {!visibleForm ?
                (<div onClick={toggleFormVisible} className="tasks__form-new">
                    <img src={addSvg} alt="Add icon" />
                    <span>Новая задача</span>
                </div>) :
                (<div className="tasks__form-block">
                    <input
                        value={inputValue}
                        className="field"
                        type="text"
                        placeholder="Текст задачи"
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <button onClick={addTask} className="button">Добавить задачу</button>
                    <button onClick={toggleFormVisible} className="button button--grey">Отмена</button>
                </div>)}
        </div>
    )
}

export default AddTaskForm
