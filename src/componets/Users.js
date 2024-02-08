import  User from './User.js';

function Users({users}) {
    const elements = users.map(item => (
        <User user={item} key={item.id} />
    ));
    
    
    return (
     <ul className="gallery__item users">
        {elements}
    </ul>   
    )
}


export default Users;