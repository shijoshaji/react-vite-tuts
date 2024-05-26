import PropTypes from 'prop-types';
import { UserInfo } from "./UserInfo";

export function UserProfile(props) {
    let params = {
        username: 'John',
        age: 30,
        email: 'hi@hellow.com',
        place: 'BLR',
        isPremium: true,
        ottApps: [
            {
                appName: 'Amazon Prime',
                isExpired: false,
            },
            {
                appName: 'Netflix',
                isExpired: true,
            },
            {
                appName: 'Hot Star',
                isExpired: false,
            },
            {
                appName: 'Zee5',
                isExpired: true,
            }
        ]

    };
    return (
        <div id="user-profile">
            {/* User Profiles here */}
            <span>{props.message}</span><br />
            {/* age is using {30} where the 30 will be integer and not string */}

            {/* <UserInfo username="John C" age={30} email='hi@hellow.com' place='BLR' isPremium={true} /> */}
            <UserInfo params={params} />
        </div >

    );
}

UserProfile.propTypes = {
    message: PropTypes.string.isRequired,

};