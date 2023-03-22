import { useRef, useEffect } from 'react';
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

    const notificationsRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (
            notificationsRef.current &&
            !notificationsRef.current.contains(event.target)
        ) {
            setNotificationsShown(false);
        }
    };

    return (
        <ul className="notifications" ref={notificationsRef}>
            <FaBell
                className="notificationsIcon"
                onClick={() => setNotificationsShown((prevState) => !prevState)}
            />
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
