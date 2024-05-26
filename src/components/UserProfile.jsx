import PropTypes from 'prop-types';

export function UserProfile(props) {
    console.log(props.params);
    let { username, age, email, place, isPremium, ottApps } = props.params;
    return (
        <>
            <br />
            <div>
                <b>Name: </b> {username}, {props.params.message} <br />
                <b>Age: </b> {age} <br />
                <b>Email: </b> {email} <br />
                <b>Place: </b> {place} <br />
                <b>Premium Subscriber: </b> {String(isPremium).toUpperCase()} <br />

                <br />
                <div>
                    {isPremium ? <div>
                        {ottApps.map((item, index) => (
                            <div key={index}>
                                {item.appName} - {String(item.isExpired).toUpperCase()}
                            </div>
                        ))}
                    </div> : <p>Condition is false, not rendering content.</p>}
                </div>
            </div>
        </>
    );
}

UserProfile.propTypes = {
    params: PropTypes.object.isRequired,
    // username: PropTypes.string.isRequired

};