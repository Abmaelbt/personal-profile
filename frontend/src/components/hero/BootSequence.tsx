import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceProps {
    onComplete?: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
    const [typedText, setTypedText] = useState('');
    const [showOutput, setShowOutput] = useState(false);

    const command = "init status";
    const prompt = "user@devops-lab:~$";

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= command.length) {
                setTypedText(command.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setShowOutput(true);
                    if (onComplete) onComplete();
                }, 500);
            }
        }, 100); // Typing speed

        return () => clearInterval(typingInterval);
    }, [onComplete]);

    return (
        <div className="font-mono text-base md:text-lg space-y-4 mb-8">
            <div className="flex items-center">
                <span className="text-terminal-green mr-2">{prompt}</span>
                <span className="text-terminal-green">{typedText}</span>
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2.5 h-5 bg-terminal-green ml-1 align-middle"
                />
            </div>

            {showOutput && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2 text-terminal-muted"
                >
                    <div className="text-white font-bold text-xl md:text-2xl mt-4 leading-tight whitespace-pre-wrap">
                        {`
          ____  
        /\   |  _ \ 
       /  \  | |_) |
      / /\ \ |  _ < 
     / ____ \| |_) |
    /_/    \_\____/
`}
                    </div>
                    <div className="text-terminal-cyan mt-2 tracking-wider">
                        INFRASTRUCTURE | AUTOMATION | KUBERNETES
                    </div>
                    <div className="border-b border-terminal-muted/30 w-full my-4"></div>
                </motion.div>
            )}
        </div>
    );
};
