import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const SystemMonitor = () => {
    const [uptime, setUptime] = useState(314225); // Start with some uptime
    const [reqs, setReqs] = useState(42);

    useEffect(() => {
        const interval = setInterval(() => {
            setUptime((u) => u + 1);
            setReqs(Math.floor(Math.random() * 25) + 35); // Fluctuate between 35-60
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatUptime = (seconds: number) => {
        const d = Math.floor(seconds / (3600 * 24));
        const h = Math.floor((seconds % (3600 * 24)) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${d.toString().padStart(3, '0')}d:${h.toString().padStart(2, '0')}h:${m.toString().padStart(2, '0')}m:${s.toString().padStart(2, '0')}s`;
    };

    return (
        <div className="border border-terminal-muted/30  bg-black/40 mb-10 overflow-hidden relative">
            <div className="bg-terminal-muted/10 px-2 py-1 text-xs text-terminal-muted border-b border-terminal-muted/20 flex justify-between">
                <span>SYSTEM_MONITOR_V2.0</span>
                <span>PID: 8392</span>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-sm">

                {/* CLUSTER STATUS */}
                <div className="flex flex-col">
                    <span className="text-terminal-muted text-xs mb-1">[CLUSTER_STATUS]</span>
                    <div className="flex items-center space-x-2">
                        <motion.div
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                        />
                        <span className="text-white font-bold text-shadow-sm">ONLINE (K3s)</span>
                    </div>
                </div>

                {/* CURRENT POD ID */}
                <div className="flex flex-col">
                    <span className="text-terminal-muted text-xs mb-1">[CURRENT_POD_ID]</span>
                    <span className="text-terminal-cyan">devops-demo-xf92a-2b</span>
                </div>

                {/* UPTIME */}
                <div className="flex flex-col">
                    <span className="text-terminal-muted text-xs mb-1">[UPTIME]</span>
                    <span className="text-white">{formatUptime(uptime)}</span>
                </div>

                {/* REQUESTS/SEC */}
                <div className="flex flex-col">
                    <span className="text-terminal-muted text-xs mb-1">[REQUESTS/SEC]</span>
                    <div className="flex items-end space-x-2">
                        <span className="text-white text-lg leading-none">{reqs}</span>
                        <div className="flex space-x-0.5 h-4 items-end pb-0.5">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: `${Math.random() * 100}%` }}
                                    transition={{ duration: 0.2 }}
                                    className="w-1 bg-terminal-green/50"
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
