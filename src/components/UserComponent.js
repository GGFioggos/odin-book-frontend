/* eslint-disable jsx-a11y/alt-text */
import '../styles/User.css';

const UserComponent = (props) => {
    const { user } = props;
    return (
        <div className="user">
            <div className="userInfo">
                <img
                    className="userProfilePicture"
                    src={user.profilePictureUrl}
                ></img>
                <div>
                    <div className="name">{user.fullName}</div>
                    <div className="friends">
                        {user.friends.length}{' '}
                        {user.friends.length === 1 ? 'Friend' : 'Friends'}
                    </div>
                    <button className="addFriend">Add friend</button>
                </div>
            </div>
        </div>
    );
};

export default UserComponent;
