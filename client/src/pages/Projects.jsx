import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../lib/api';
import ProjectCard from '../components/ui/ProjectCard';
import ProjectModal from '../components/ui/ProjectModal';

const CATEGORIES = ["All", "UI/UX", "Poster", "Mockup", "Editing", "Other"];

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await api.get('/api/projects');
                setProjects(data);
            } catch (error) {
                console.error('Failed to fetch projects');
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter || p.tools?.includes(filter));

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-gallery-bg">
            <div className="max-w-[90vw] mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-[12vw] md:text-[8vw] font-display font-bold text-gallery-text leading-[0.85] mb-4">
                        ALL <span className="font-serif italic font-light text-accent-purple">WORKS</span>
                    </h1>
                    <p className="text-gray-500 font-sans text-lg max-w-xl mx-auto">
                        A complete collection of my design projects, from UI/UX to posters and beyond.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`font-sans text-sm md:text-base tracking-widest uppercase transition-all duration-300 relative group ${filter === cat ? 'text-black font-bold' : 'text-gray-400 hover:text-black'}`}
                        >
                            {cat}
                            <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-accent-lime transform origin-left transition-transform duration-300 ${filter === cat ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                {loading ? (
                    <div className="text-center text-gray-400 py-20">Loading projects...</div>
                ) : filteredProjects.length === 0 ? (
                    <div className="text-center text-gray-400 py-20">
                        {projects.length === 0 ? 'No projects yet.' : 'No projects match this filter.'}
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    key={project._id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="h-[400px]"
                                >
                                    <ProjectCard
                                        project={{
                                            ...project,
                                            id: project._id,
                                            image: project.images?.[0]?.url || 'https://via.placeholder.com/600x400',
                                        }}
                                        onClick={setSelectedProject}
                                        className="h-full w-full"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
