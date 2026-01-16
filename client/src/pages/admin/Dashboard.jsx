import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import MagneticButton from '../../components/ui/MagneticButton';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchProjects = async () => {
        try {
            const { data } = await api.get('/api/projects');
            setProjects(data);
        } catch (error) {
            toast.error('Failed to load projects');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        navigate('/admin');
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this project?')) return;

        try {
            await api.delete(`/api/projects/${id}`);
            toast.success('Project deleted');
            fetchProjects();
        } catch (error) {
            toast.error('Failed to delete project');
        }
    };

    const handleToggleFeatured = async (id) => {
        try {
            await api.put(`/api/projects/${id}/featured`);
            toast.success('Featured status updated');
            fetchProjects();
        } catch (error) {
            toast.error('Failed to update featured status');
        }
    };

    return (
        <div className="min-h-screen bg-black pt-32 px-8 pb-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl text-white font-display font-bold">Dashboard</h1>
                    <div className="flex gap-4">
                        <MagneticButton className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                            <span onClick={handleLogout}>Logout</span>
                        </MagneticButton>
                        <MagneticButton className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 font-bold">
                            <Link to="/admin/project/new">+ New Project</Link>
                        </MagneticButton>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center text-gray-500 py-20">Loading projects...</div>
                ) : projects.length === 0 ? (
                    <div className="p-8 border border-dashed border-gray-800 rounded-2xl flex flex-col items-center justify-center text-center">
                        <p className="text-gray-500 mb-4">No projects yet.</p>
                        <Link to="/admin/project/new" className="text-accent-lime hover:underline">Add your first project</Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div key={project._id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                                    {project.images?.[0]?.url ? (
                                        <img
                                            src={project.images[0].url}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-600">No Image</div>
                                    )}
                                    {project.isFeatured && (
                                        <span className="absolute top-2 left-2 bg-accent-lime text-black text-xs font-bold px-2 py-1 rounded">
                                            ⭐ FEATURED
                                        </span>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                                    <p className="text-gray-500 text-sm mb-3">{project.category}</p>
                                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">{project.description}</p>

                                    <div className="flex gap-2 flex-wrap">
                                        <button
                                            onClick={() => handleToggleFeatured(project._id)}
                                            className={`px-3 py-1 text-sm rounded-full border transition-colors ${project.isFeatured
                                                ? 'bg-accent-lime/20 border-accent-lime text-accent-lime'
                                                : 'border-gray-700 text-gray-400 hover:border-accent-lime hover:text-accent-lime'
                                                }`}
                                        >
                                            {project.isFeatured ? '★ Unfeature' : '☆ Feature'}
                                        </button>
                                        <Link
                                            to={`/admin/project/edit/${project._id}`}
                                            className="px-3 py-1 text-sm rounded-full border border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(project._id)}
                                            className="px-3 py-1 text-sm rounded-full border border-gray-700 text-gray-400 hover:border-red-500 hover:text-red-500 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
