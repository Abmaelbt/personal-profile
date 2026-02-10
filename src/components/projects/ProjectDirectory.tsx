import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, FileCode } from 'lucide-react';

interface Project {
    id: string;
    name: string;
    description: string;
    permissions: string;
    user: string;
    group: string;
    date: string;
    link?: string;
}

const projects: Project[] = [
    {
        id: 'k8s',
        name: 'k8s-homelab/',
        description: 'Highly available Kubernetes cluster running on Raspberry Pi nodes with K3s, MetalLB, and Longhorn storage.',
        permissions: 'drwxr-xr-x',
        user: 'root',
        group: 'staff',
        date: 'Dec 12 09:41',
    },
    {
        id: 'tf',
        name: 'terraform-aws-modules/',
        description: 'Collection of production-ready Terraform modules for AWS VPC, EKS, and RDS provisioning.',
        permissions: 'drwxr-xr-x',
        user: 'dev ',
        group: 'admin',
        date: 'Oct 24 14:22',
    },
    {
        id: 'obs',
        name: 'observability-stack/',
        description: 'Prometheus, Grafana, and Loki stack for full-stack monitoring and log aggregation.',
        permissions: 'drwxr-xr-x',
        user: 'dev ',
        group: 'staff',
        date: 'Nov 05 11:15',
    },
    {
        id: 'cli',
        name: 'devops-cli-tool',
        description: 'Go-based CLI tool for automating daily infrastructure tasks and CI/CD pipelines.',
        permissions: '-rwxr-x---',
        user: 'user',
        group: 'dev  ',
        date: 'Feb 02 16:30',
    },
];

export const ProjectDirectory = () => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <div className="mb-12 font-mono">
            <div className="text-terminal-muted border-b border-terminal-muted/20 pb-2 mb-4 flex justify-between items-end">
                <span className="text-lg text-terminal-cyan">~/projects</span>
                <span className="text-xs">ls -la</span>
            </div>

            <div className="space-y-1">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="group relative cursor-pointer"
                    >
                        {/* Selection Background */}
                        <div className={`absolute inset-0 bg-terminal-green/10 transition-opacity duration-100 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`} />

                        <div className="relative flex flex-col md:flex-row md:items-center py-2 px-2 space-x-0 md:space-x-4">
                            {/* Terminal File Attributes (Hide on super small screens?) */}
                            <div className="hidden md:flex text-terminal-muted text-sm space-x-4 w-1/3 shrink-0">
                                <span>{project.permissions}</span>
                                <span>1</span>
                                <span>{project.user}</span>
                                <span>{project.group}</span>
                                <span className="w-16 text-right">{project.date}</span>
                            </div>

                            {/* File Name */}
                            <div className="flex items-center space-x-2 text-white group-hover:text-terminal-cyan transition-colors duration-200">
                                {project.permissions.startsWith('d') ? <Folder size={16} /> : <FileCode size={16} />}
                                <span className="font-bold">{project.name}</span>
                            </div>
                        </div>

                        {/* Description Expansion */}
                        <AnimatePresence>
                            {hoveredProject === project.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pl-4 md:pl-20 py-2 text-terminal-muted text-sm border-l-2 border-terminal-cyan ml-2 md:ml-0">
                                        # {project.description}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}

                <div className="pt-2 text-terminal-muted animate-pulse">
                    <span className="mr-2">drwxr-xr-x</span>
                    <span>...</span>
                </div>
            </div>
        </div>
    );
};
