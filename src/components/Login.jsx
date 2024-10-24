import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [role, setRole] = useState('user');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const userData = {
        role,
        email,
        password
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('All fields are required');
            return;
        }
        localStorage.setItem("user", JSON.stringify(userData))
    };
    return (
        <div className='flex justify-center items-center w-full h-auto px-10'>
            <form onSubmit={handleSubmit} className="w-[500px] mx-auto">
                <h1 className='text-center py-3 font-bold text-3xl'>Login</h1>
                {error && <p className="text-red-500">{error}</p>}
                <div className='mb-3'>
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className="block mb-2">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className="block mb-2">Role:</label>
                    <select className="border p-2 w-full" name="role" value={role}
                        onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-2 mt-4 w-full"
                >
                    Login
                </button>
                <div className='py-3'>
                    <p>Do you have an account ? <Link to="/register">register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login