import { UserData } from './components/UserComponents/UserData';

export default function App() {

    const isAuthenticated = true;

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


    return isAuthenticated ? <UserData message="welcome User," /> : <h1>Not Authenticated</h1>;





}


