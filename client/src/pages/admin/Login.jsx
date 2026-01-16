import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import MagneticButton from '../../components/ui/MagneticButton';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/auth/login', formData);
            localStorage.setItem('userInfo', JSON.stringify(data));
            toast.success('Welcome back, Admin!');
            navigate('/admin/dashboard');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">

            {/* Background Abstract */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-full max-w-md p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl relative z-10">
                <h2 className="text-3xl font-display font-bold text-center text-white mb-8">Admin Access</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors"
                        />
                    </div>

                    <MagneticButton className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                        Login
                    </MagneticButton>
                </form>
            </div>
        </div>
    );
};

export default Login;
