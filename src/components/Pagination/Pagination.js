import { useEffect, useState } from 'react';
import './pagination.css';
import PaginationNumber from './PaginationNumber';
import PerPageInput from './PerPageInput'

function Pagination({getUser, totalPages, setUsers, userPages, setUserPages, perPage, setPerPage}) {
    const [currentPage, setCurrentPage] = useState(1);

    const paginationNumbers = [];
    
    for (let i = 1; i <= totalPages; i++) {
        paginationNumbers[i - 1] = <PaginationNumber onPaginationNumberClick={onPaginationNumberClick} number={i} isActive={i === 1} />
    }

    useEffect(() => {
        changeActiveLink();
        changePage();
    }, [currentPage])


    function onLeftButtonClick() {
        if (currentPage <= 1) {
            return;
        }
        setCurrentPage(currentPage - 1);
    } 
    
    function onRightButtonClick() {
        if (currentPage >= totalPages) {
            return;
        }

        setCurrentPage(currentPage + 1);
    }


    function changePage() {
        if (userPages[currentPage] ) {
            setUsers(userPages[currentPage]);
            return;
        }
        getUser(currentPage, perPage).then(data => {
            setUsers(data.data);
            userPages[currentPage] = data.data;
        });
    };

    function onPaginationNumberClick(pageNumber) {
        setCurrentPage(Number(pageNumber));
    }
    
    
    function changeActiveLink() {
        const links = document.querySelectorAll('.pagination__number'); 
        document.querySelector('.pagination__number--active')
            ?.classList.remove('pagination__number--active'); 
        links[currentPage - 1]?.classList.add('pagination__number--active'); 
    };

    return (
        <div className="pagination">
            <div className="pagination-container" >
                <button onClick={onLeftButtonClick} className="pagination__arrow pagination__arrow--left" >{`<`}</button>
                <div className="pagination__container">{paginationNumbers}</div>
                <button onClick={onRightButtonClick} className="pagination__arrow pagination__arrow--right" >{`>`}</button>
            </div>
            
            <PerPageInput perPage={perPage} setPerPage={setPerPage} setCurrentPage={setCurrentPage} setUserPages={setUserPages}/>
        </div>
    )
}

export default Pagination;