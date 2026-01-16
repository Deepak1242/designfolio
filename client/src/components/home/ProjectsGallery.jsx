import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../lib/api';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import { RotatingBadge } from '../ui/FunkyElements';

const CATEGORIES = ["All", "UI/UX", "Poster", "Mockup", "Editing", "Other"];

const ProjectsGallery = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeaturedProjects = async () => {
            try {
                const { data } = await api.get('/api/projects/featured');
                setProjects(data);
            } catch (error) {
                console.error('Failed to fetch projects');
            } finally {
                setLoading(false);
            }
        };
        fetchFeaturedProjects();
    }, []);

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter || p.tools?.includes(filter));

    // Map size based on priority for visual variety
    const getSizeClass = (project, index) => {
        if (project.priority >= 10) return 'md:col-span-2 md:row-span-2 h-[600px]';
        if (project.priority >= 5 || index === 0) return 'md:col-span-1 md:row-span-2 h-[600px]';
        return 'h-[400px]';
    };

    return (
        <section id="work" className="min-h-screen py-32 px-6 md:px-12 bg-gallery-bg">
            <div className="max-w-[90vw] mx-auto">

                <div className="flex flex-col items-center text-center mb-24">
                    <h2 className="text-[10vw] font-display font-bold text-gallery-text leading-[0.8] mb-8 mix-blend-exclusion relative inline-block">
                        SELECTED <span className="font-serif italic font-light text-accent-purple">WORKS</span>
                        <div className="absolute -top-10 -right-20 hidden md:block">
                            <RotatingBadge text="FEATURED • PROJECTS • " className="text-accent-lime scale-75" />
                        </div>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
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
                </div>

                {loading ? (
                    <div className="text-center text-gray-400 py-20">Loading projects...</div>
                ) : filteredProjects.length === 0 ? (
                    <div className="text-center text-gray-400 py-20">
                        {projects.length === 0 ? 'No featured projects yet. Add some from the admin panel!' : 'No projects match this filter.'}
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 grid-flow-dense"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    key={project._id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={getSizeClass(project, index)}
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

                {/* View All Projects Button */}
                <div className="text-center mt-16">
                    <Link
                        to="/projects"
                        className="inline-block px-8 py-4 bg-black text-white font-display font-bold text-lg uppercase tracking-wider rounded-full hover:bg-accent-lime hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(212,230,109,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                    >
                        View All Projects →
                    </Link>
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>

        </section>
    );
};

export default ProjectsGallery;
