import React from 'react';

interface TerminalLayoutProps {
    children: React.ReactNode;
}

export function TerminalLayout({ children }: TerminalLayoutProps) {
    return (
        <div className="min-h-screen bg-terminal-black text-terminal-green p-4 md:p-10 font-mono relative overflow-hidden selection:bg-terminal-green selection:text-terminal-black">
            {/* CRT Scanline Effect Overlay (Optional, can be toggled) */}
            <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] bg-repeat opacity-10" />

            {/* Content Container - Simulating a terminal window */}
            <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col">
                {children}
            </div>

            {/* Screen Glow */}
            <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
        </div>
    );
}
