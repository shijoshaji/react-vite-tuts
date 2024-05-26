import PropTypes from 'prop-types';
import "./user.css";
import { UserYesOtt, UserNoOtt, UserYesOttTAble } from './UserOtt';

export function UserProfile(props) {
    console.log(props.params);
    let { username, age, email, place, isPremium, ottApps } = props.params;
    return (
        <>
            <br />
            <div>
                <b style={{ color: 'red', fontSize: '12px' }}>Name: </b> {username}, {props.params.message} <br />
                <b id='age'>Age: </b> {age} <br />
                <b className='email'>e-mail: </b> {email} <br />
                <b>Place: </b> {place} <br />
                <b>Premium Subscriber: </b> {String(isPremium).toUpperCase()} <br />

                <br />
                <>
                    {isPremium ? <div>
                        {ottApps.map((item, index) => (
                            <UserYesOtt key={index} item={item} />
                        ))}
                    </div> : <UserNoOtt />}
                </>
                <>
                    {
                        isPremium ?
                            <UserYesOttTAble data={ottApps} /> :
                            <UserNoOtt />
                    }

                </>
            </div >
        </>
    );
}

UserProfile.propTypes = {
    // params: PropTypes.object.isRequired,
    // username: PropTypes.string.isRequired
    params: PropTypes.shape({
        username: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        ottApps: PropTypes.shape([{
            appName: PropTypes.string.isRequired,
            isExpired: PropTypes.bool.isRequired,
        }]).isRequired
    }).isRequired

};