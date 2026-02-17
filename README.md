# TerminaLab - DevOps Personal Dashboard & Portfolio

TerminaLab is an ultra-minimalist, single-page personal portfolio and live telemetry dashboard built with a "Terminal / Hacker" aesthetic. It simulates a Linux boot sequence and provides a command-line interface feel for showcasing projects and skills.

![Terminal Dashboard](./terminal_dashboard.png)

## Tech Stack

- **Runtime**: [Bun](https://bun.sh) (Replaced Node.js)
- **Framework**: [React](https://react.dev) + [Vite](https://vitejs.dev) + TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev)

## Features

- **Boot Sequence**: Realistic typing animation imitating a system initialization.
- **System Monitor**: Live-updating dashboard with simulated telemetry (Uptime, Requests/Sec, Cluster Status).
- **Project Directory**: View projects as a file system listing (`ls -la` style).
- **Command Bar**: Interactive footer with command-line style links.
- **CRT Effect**: Subtle scanline overlay for retro terminal vibes.

## Getting Started

### Prerequisites

- **Bun** (v1.0+): [Install Bun](https://bun.sh/docs/installation)
  ```bash
  curl -fsSL https://bun.sh/install | bash
  # Ensure ~/.bun/bin is in your PATH
  # If 'bun' command is not found, restart your terminal or run:
  # source ~/.zshrc  (or ~/.bashrc)
  ```

### Installation

```bash
cd frontend
bun install
```

### Backend (Target System)

Start the Spring Boot backend (required for live telemetry):

```bash
cd backend
mvn spring-boot:run
```

### Frontend (Dashboard)

Start the development server:

```bash
cd frontend
bun run dev
```

### Production Build

Build for production:

```bash
cd frontend
bun run build
```

Preview the build:

```bash
cd frontend
bun run preview
```

## Customization

- **Theme**: Modify `src/index.css` to change the CSS variables colors (Green, Cyan, Black).
- **Content**: Update data in individual components (`src/components/...`).

---
> user@devops-lab:~$ logout
