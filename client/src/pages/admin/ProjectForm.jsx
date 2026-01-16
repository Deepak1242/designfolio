import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import MagneticButton from '../../components/ui/MagneticButton';

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'UI/UX',
        tools: '',
        imageUrl: '',
        isFeatured: false,
        priority: 0,
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        if (id) {
            const fetchProject = async () => {
                try {
                    const { data } = await axios.get(`/api/projects/${id}`);
                    setFormData({
                        title: data.title,
                        description: data.description,
                        category: data.category,
                        tools: data.tools?.join(', ') || '',
                        imageUrl: data.images?.[0]?.url || '',
                        isFeatured: data.isFeatured || false,
                        priority: data.priority || 0,
                    });
                } catch (error) {
                    toast.error('Failed to fetch project');
                }
            };
            fetchProject();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const projectData = {
                title: formData.title,
                description: formData.description,
                category: formData.category,
                tools: formData.tools.split(',').map(t => t.trim()).filter(t => t),
                images: formData.imageUrl ? [{ url: formData.imageUrl, publicId: 'manual', isFeatured: true }] : [],
                isFeatured: formData.isFeatured,
                priority: parseInt(formData.priority) || 0,
            };

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };

            if (id) {
                await axios.put(`/api/projects/${id}`, projectData, config);
                toast.success('Project Updated');
            } else {
                await axios.post('/api/projects', projectData, config);
                toast.success('Project Created');
            }
            navigate('/admin/dashboard');

        } catch (error) {
            toast.error(error.response?.data?.message || 'Operation failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black pt-32 px-8 pb-20">
            <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h1 className="text-3xl text-white font-display font-bold mb-8">{id ? 'Edit Project' : 'New Project'}</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Project Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                        >
                            <option value="UI/UX">UI/UX</option>
                            <option value="Poster">Poster</option>
                            <option value="Mockup">Mockup</option>
                            <option value="Editing">Editing</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="5"
                            required
                            className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Tools (comma separated)</label>
                        <input
                            type="text"
                            name="tools"
                            value={formData.tools}
                            onChange={handleChange}
                            placeholder="e.g. Figma, React, Canva"
                            className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Image URL</label>
                        <input
                            type="url"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                            className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                        />
                    </div>

                    <div className="flex gap-8">
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Priority (higher = top)</label>
                            <input
                                type="number"
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                className="w-32 bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                            />
                        </div>

                        <div className="flex items-center gap-3 pt-6">
                            <input
                                type="checkbox"
                                name="isFeatured"
                                id="isFeatured"
                                checked={formData.isFeatured}
                                onChange={handleChange}
                                className="w-5 h-5 accent-accent-lime cursor-pointer"
                            />
                            <label htmlFor="isFeatured" className="text-white cursor-pointer">⭐ Featured on Homepage</label>
                        </div>
                    </div>

                    <div className="pt-6 flex gap-4">
                        <button
                            type="button"
                            onClick={() => navigate('/admin/dashboard')}
                            className="px-6 py-3 bg-transparent border border-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Cancel
                        </button>
                        <MagneticButton className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                            {loading ? 'Saving...' : 'Save Project'}
                        </MagneticButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;
