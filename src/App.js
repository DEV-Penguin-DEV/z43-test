import './App.css';
import Users from './componets/Users.js';
import Pagination from './componets/Pagination/Pagination.js'
import { useEffect, useState } from 'react';
import ViewToggle from './componets/ViewToggle/ViewToggle.js'

function App() {
  const [userPages, setUserPages] = useState([]);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [perPage, setPerPage] = useState(6);
  const [view, setView] = useState('default');

  useEffect(() => {
    getUser(1, perPage).then(data => {
      userPages[0] = data.data;
        setUsers(data.data);
        setTotalPages(data.total_pages);
      });
  }, [perPage]);


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='main-title'>
          Test Z43
        </h1>
      </header>
      <main>
        <ViewToggle view={view} setView={setView} />

        <div className={`gallery ${view}`} data-current-page="1">
            <Users users={users}/>
        </div>

        <Pagination getUser={getUser} totalPages={totalPages} setUsers={setUsers} userPages={userPages} setUserPages={setUserPages} perPage={perPage} setPerPage={setPerPage}/>
      </main>
    </div>
  );
}

function getUser(page = 1, perPage = 6) {
    return fetch(`https://reqres.in/api/users?page=${page}&per_page=${perPage}`).then(res => res.json());
}

export default App;
