import PropTypes from 'prop-types';

export function UserYesOtt({ item }) {
    return (
        <div>

            {item.appName} - {String(item.isExpired).toUpperCase()}
        </div>
    );
}



export function UserNoOtt() {
    return (
        <div> <h1>Not A Premium Subscriber</h1>
        </div>
    );
}

export function UserYesOttTAble(props) {
    let arrList = props.data;
    console.log(arrList);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>App Name</th>
                        <th>Valid</th>
                    </tr>
                </thead>
                <tbody>
                    {arrList.map((item, index) => (
                        <tr key={index}>

                            <td>{index + 1}</td>
                            <td>{item.appName}</td>
                            <td>{String(item.isExpired).toUpperCase()}</td>

                        </tr>

                    ))}

                </tbody>

            </table>
        </>

    );
}



// DECLARE PROTYPES


UserYesOtt.propTypes = {
    item: PropTypes.shape({
        appName: PropTypes.string.isRequired,
        isExpired: PropTypes.bool.isRequired,
    }).isRequired

};

UserYesOttTAble.propTypes = {
    data: PropTypes.shape([{
        appName: PropTypes.string.isRequired,
        isExpired: PropTypes.bool.isRequired,
    }]).isRequired

};