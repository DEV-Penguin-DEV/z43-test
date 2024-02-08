function User({ user }) {
    return (
    <li className='user'>
        <img className='user__avatar' src={user.avatar} alt='User avatar' />
        <div className="user__text-container">
            <p className='user__fullname'>{user.last_name} {user.first_name}</p>
            <a href={`mailto:${user.email}`} className='user__email'>{user.email}</a>
        </div>
    </li>
    )
}


export default User;