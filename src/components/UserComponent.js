const UserComponent = (props) => {
    const { user } = props;
    console.log(user);
    return (
        <>
            <img src={user.profilePictureUrl}></img>
            <div className="userInfo">
                <div className="name">{user.fullName}</div>
                <div className="friends">{user.friends.length} Friends</div>
            </div>
            <button>Add friend</button>
        </>
    );
};

export default UserComponent;
