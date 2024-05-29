import { UserData } from './components/UserComponents/UserData';

export default function App() {

    const isAuthenticated = true;
    const userStatus = 'active';

    // if (isAuthenticated) {
    //     return (
    //         <>
    //             <UserData message="welcome User," />
    //         </>

    //     );
    // }
    // return (
    //     <>
    //         <h1>Not Authenticated</h1>
    //     </>
    // );


    return (
        isAuthenticated ?
            (userStatus === 'active' ?
                <UserData message="welcome User," />
                : <h1>Not verified</h1>)
            : <h1>Not Authenticated</h1>
    );





}


