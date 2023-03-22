import { FaBell } from 'react-icons/fa';
import Divider from './Divider';
import FriendRequest from './FriendRequest';

const Notifications = (props) => {
    const {
        notificationsShown,
        setNotificationsShown,
        friendRequests,
        setFriendRequests,
    } = props;

    return (
        <ul
            className="notifications"
            onClick={() => setNotificationsShown(!notificationsShown)}
        >
            <FaBell className="notificationsIcon" />
            <li
                style={{
                    display: notificationsShown ? 'block' : 'none',
                }}
            >
                <div className="friendRequests">Friend Requests</div>
                <Divider />
                {friendRequests.length === 0 && (
                    <div>No new friend requests</div>
                )}
                {friendRequests.length !== 0 &&
                    friendRequests.map((friendRequest, i) => (
                        <FriendRequest
                            request={friendRequest}
                            key={i}
                            requestKey={i}
                            setFriendRequests={setFriendRequests}
                        ></FriendRequest>
                    ))}
            </li>
        </ul>
    );
};

export default Notifications;
