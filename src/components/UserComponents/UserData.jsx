import PropTypes from 'prop-types';
import { UserProfile } from "./UserProfile";
import { LoginForm } from './LoginForm';
import { Registeration } from './Registeration';

export function UserData(props) {
    // here the message is from parent i can pass this to child/sibling components
    let params = {
        message: props.message,
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
                isExpired: false,
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
            <UserProfile params={params} />


            <LoginForm />
            <br /><br /><br />
            <hr />

            <Registeration />
        </div >

    );
}

UserData.propTypes = {
    message: PropTypes.string.isRequired,

};