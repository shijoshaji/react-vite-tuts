export function LoginForm() {
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                let usrname = formData.get('username');
                let pwd = formData.get('pwd');

                console.log(` credes are ${usrname} ${pwd}`);

            }}>
                <label htmlFor="username">User Name</label>
                <input type="text" name="username" id="username" onChange={(e) => {
                    console.log(e.target.value);
                }} />

                <label htmlFor="pwd">Password</label>
                <input type="password" name="pwd" id="pwd" />

                <button type="submit">Login</button>
            </form>

        </>
    );
}