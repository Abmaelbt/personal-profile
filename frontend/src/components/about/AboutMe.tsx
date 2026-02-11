import { motion } from 'framer-motion';
import { User, Terminal } from 'lucide-react';

export const AboutMe = () => {
    return (
        <section className="mb-16 font-mono">
            <div className="text-terminal-muted border-b border-terminal-muted/20 pb-2 mb-6 flex justify-between items-end">
                <span className="text-lg text-terminal-cyan">~/about-me</span>
                <span className="text-xs">cat profile.md</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Text Content */}
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-terminal-muted">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="mb-4">
                            <span className="text-terminal-green font-bold">Hello World!</span> I'm a passionate DevOps Engineer and Full Stack Developer with a knack for automation and infrastructure.
                        </p>
                        <p className="mb-4">
                            My journey began in the world of system administration, where I fell in love with the command line. Over the years, I've evolved into building scalable cloud architectures and crafting efficient CI/CD pipelines.
                        </p>
                        <p>
                            When I'm not optimizing Kubernetes clusters, you can find me tinkering with new tech stacks, contributing to open source, or exploring the great outdoors.
                        </p>
                    </motion.div>

                    <div className="pt-4 flex items-center space-x-2 text-xs text-terminal-cyan">
                        <Terminal size={14} />
                        <span>current_status: "Building awesome things..."</span>
                    </div>
                </div>

                {/* Image / Visual Content */}
                <div className="relative group">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative z-10 border-2 border-terminal-muted/30 bg-terminal-black/50 p-2"
                    >
                        {/* Placeholder for User Image */}
                        <div className="aspect-video w-full bg-terminal-muted/10 flex items-center justify-center text-terminal-muted border border-terminal-muted/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]" />
                            <div className="text-center p-6">
                                <User size={48} className="mx-auto mb-2 opacity-50" />
                                <span>[IMAGE_PLACEHOLDER]</span>
                                <div className="text-xs mt-1">/path/to/profile_pic.jpg</div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-terminal-green"></div>
                        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-terminal-green"></div>
                    </motion.div>

                    {/* background flush */}
                    <div className="absolute inset-0 bg-terminal-green/5 blur-xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
            </div>
        </section>
    );
};
