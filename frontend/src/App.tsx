import { useState } from 'react';
import { TerminalLayout } from './components/layout/TerminalLayout';
import { BootSequence } from './components/hero/BootSequence';
import { SystemMonitor } from './components/dashboard/SystemMonitor';
import { AboutMe } from './components/about/AboutMe';
import { ProjectDirectory } from './components/projects/ProjectDirectory';
import { CommandBar } from './components/footer/CommandBar';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <TerminalLayout>
      <BootSequence onComplete={() => setBootComplete(true)} />

      <AnimatePresence>
        {bootComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow flex flex-col"
          >
            <SystemMonitor />
            <AboutMe />
            <ProjectDirectory />
            <CommandBar />
          </motion.div>
        )}
      </AnimatePresence>
    </TerminalLayout>
  );
}

export default App;
