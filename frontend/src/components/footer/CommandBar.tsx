import { useState } from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export const CommandBar = () => {
    const [activeCommand, setActiveCommand] = useState<string>('');

    const links = [
        { label: 'github', url: 'https://github.com/bdsabmael', icon: Github, cmd: 'open https://github.com' },
        { label: 'linkedin', url: 'https://linkedin.com/in/bdsabmael', icon: Linkedin, cmd: 'open https://linkedin.com' },
        { label: 'email', url: 'mailto:contact@termina.lab', icon: Mail, cmd: 'mail -s "Hello" contact@termina.lab' },
    ];

    return (
        <div className="mt-auto pt-6 border-t border-terminal-muted/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 text-sm">

                <div className="flex items-center space-x-2 text-terminal-muted">
                    <Terminal size={14} />
                    <span>Type 'help' for available commands or click links below:</span>
                </div>

                <div className="flex flex-wrap gap-4">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setActiveCommand(link.cmd)}
                            onMouseLeave={() => setActiveCommand('')}
                            className="flex items-center space-x-1 text-terminal-muted hover:text-terminal-green transition-colors cursor-pointer group"
                        >
                            <span className="text-terminal-cyan opacity-50 group-hover:opacity-100">[</span>
                            <link.icon size={14} />
                            <span>{link.label}</span>
                            <span className="text-terminal-cyan opacity-50 group-hover:opacity-100">]</span>
                        </a>
                    ))}
                </div>

            </div>

            <div className="mt-2 h-6 text-xs text-terminal-muted font-mono flex items-center">
                <span className="text-terminal-green mr-2">$</span>
                <span className="typing-cursor">{activeCommand}</span>
                <span className="w-2 h-4 bg-terminal-green ml-1 animate-blink inline-block align-middle"></span>
            </div>
        </div>
    );
}
