import './view-toggle.css';
import { ReactComponent as ListViewIcon } from './img/list-ul-svgrepo-com.svg';
import { ReactComponent as TableViewIcon } from './img/table-svgrepo-com.svg';
import React from 'react';

function ViewToggle({view, setView}) {
    const iconElement = view === 'default' ? ListViewIcon : TableViewIcon;


    function onButtonClick() {
        setView(view === 'default' ? 'list' : 'default');
    }

    return (
        <button onClick={onButtonClick} className='viewToggle'>
            <span className='viewToggle__icon'>
                {(React.createElement(iconElement))}
            </span>
            
            <span>Change list view</span>
        </button>
    )
}


export default ViewToggle