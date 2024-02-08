import { useRef, useState } from 'react';
import './per-page-input.css';

function PerPageInput({perPage, setPerPage, setCurrentPage, setUserPages}) {
    const [perPageLocal, setPerPageLocal] = useState(6);
    const inputRef = useRef(null)

    function onInputChange(evt) {
        setPerPageLocal(evt.target.value);
    }

    function OnButtonClick() {
        if (perPage === inputRef.current.value) {
            return;
        }
        setUserPages([]);
        setPerPage(inputRef.current.value);
        setCurrentPage(1);
    }

    return (
    <div className='per-page'>
        <p>Card per page:</p>
        <input ref={inputRef} onChange={onInputChange} className='per-page__input' type='number' value={perPageLocal} />
        <button onClick={OnButtonClick} className='per-page__button'>Change</button>
    </div>
    );
}

export default PerPageInput;
