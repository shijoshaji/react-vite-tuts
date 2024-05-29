import { useState } from "react";



export function Registeration() {
    // const [age, setAge] = useState(18);
    // const [email, setEmail] = useState('');
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const [formData, setFormData] = useState({
        age: 18,
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            <form action="">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="username">User: </label>
                    <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" id="password" value={formData.password} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    {/* <input type="text" name="age" id="age" value={age} onChange={(e) => { setAge(e.target.value); }} /> */}
                    <input type="text" name="age" id="age" value={formData.age} onChange={handleChange} />
                </div>
            </form>
        </>
    );
}