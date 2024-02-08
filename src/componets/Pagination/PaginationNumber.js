function PaginationNumber({ number, isActive, onPaginationNumberClick }) {
    return (
        <div onClick={() => onPaginationNumberClick(number)} className={`pagination__number ${
            isActive ? 'pagination__number--active' : ''
        }`}> {number} </div>
    )
}

export default PaginationNumber;