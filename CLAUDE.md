# Free Rein Pilates - Claude Code Instructions

## 🚨 CRITICAL SECURITY RULES

### Directory Boundaries - NEVER LEAVE YOUR PROJECT

**Your Project Root**: `/Users/agriv8r/Documents/python/Master Claude/projects/free-rein-pilates/`

**ABSOLUTE RULES**:
1. ❌ **NEVER** use `../` to go to parent directories
2. ❌ **NEVER** search in `/Users/agriv8r/Documents/python/Master Claude/`
3. ❌ **NEVER** read files from other projects
4. ❌ **NEVER** access anything outside your project folder
5. ✅ **ONLY** work within your project directory
6. ✅ If a file doesn't exist in YOUR project, report it as missing

**ENFORCEMENT**: If you navigate outside your project directory, IMMEDIATELY return to your project root and report the security violation.

## 🎯 PETE'S PRINCIPLES & PILLARS

### CORE PRINCIPLE: Maximum Context, Minimum Words
- **Trust the context** - Don't over-explain
- **State goals, not steps** - "Build auth" not "Create authentication system with..."
- **Use personas** - "Channel Elon Musk" = ship fast
- **Command shortcuts** - "Go full Musk", "Pull a Jobs", "10x it"

### 🏛️ ALL 7 PILLARS FOR EXECUTION:

1. **AI FIRST** - Everything via Supabase, no manual processes
2. **SECURITY ALWAYS** - Check security templates for all operations
3. **SHORT ORDERS** - Minimum words, maximum action
4. **SHIP FAST** - Deploy, iterate, improve
5. **NO HAND-HOLDING** - Trust AI reasoning
6. **COMMERCIAL GRADE ONLY** - Enterprise standards for everything: auth, security, architecture, code quality
7. **CLI FIRST** - Use official CLIs for all services: `supabase` CLI, `gh` CLI, `netlify` CLI, `az` CLI

## 🤖 INTER-CLAUDE COMMUNICATION

**Your Project ID**: `free-rein-pilates-001`

**MANDATORY**: Use MCP Bridge System for all Claude-to-Claude communication.

### Registration Required
```javascript
// Register when you start
const instanceData = {
    claude_id: 'free-rein-pilates-001',
    capabilities: ['web-development', 'pilates-website', 'react', 'deployment'],
    status: 'online',
    metadata: { 
        role: 'child', 
        project_type: 'pilates-business-website',
        client: 'Free Rein Pilates',
        location: '/Users/agriv8r/Documents/python/Master Claude/projects/free-rein-pilates/'
    }
};

await fetch('https://yiffafrjaoztveqgvjlk.supabase.co/rest/v1/mcs_claude_instances', {
    method: 'POST',
    headers: { 
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpZmZhZnJqYW96dHZlcWd2amxrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODAzMzU1MSwiZXhwIjoyMDYzNjA5NTUxfQ.mt7gKml2xA2VZFhPjGtLQ73kkrGIDHnP8iFCMCySaiw', 
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(instanceData)
});
```

### Communication Examples
```javascript
// Send message to Master Claude
const messageData = {
    sender_id: 'your-instance-id',
    recipient_id: 'master-claude-instance-id',
    message_type: 'completion',
    content: { 
        subject: 'Free Rein Pilates Website Complete',
        message: 'Pilates website deployed successfully to production'
    }
};
```

## 🏢 CLI FIRST OPERATIONS

**For GitHub/Netlify Access:**
```bash
# Use Official CLIs (Commercial Grade)
gh auth login    # GitHub CLI
netlify login    # Netlify CLI
supabase login   # Supabase CLI

# Repository Management
gh repo create WebSmartTeam/free-rein-pilates --private
git remote add origin https://github.com/WebSmartTeam/free-rein-pilates.git

# Deployment
netlify deploy --prod --dir=dist
```

## Project Overview

**Free Rein Pilates** - Professional Pilates instruction website featuring:
- Studio Pilates sessions
- Mat Pilates courses
- Sports Therapy sessions
- Equestrian Pilates
- Day Retreats (Center Parcs Woburn, Wrest Park)

## 📁 Project Structure

```
free-rein-pilates/
├── src/
│   ├── App.tsx                 # Main application component
│   ├── components/
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Navigation.tsx     # Navigation header
│   │   ├── Services.tsx       # Pilates services
│   │   ├── About.tsx          # About section
│   │   ├── Retreats.tsx       # Day retreats
│   │   ├── Testimonials.tsx   # Client testimonials
│   │   ├── Contact.tsx        # Contact information
│   │   └── Footer.tsx         # Footer component
│   ├── index.css              # Global styles
│   └── main.tsx               # Application entry point
├── public/
│   └── client-content/        # Client-provided images and content
├── client-content/            # Original client assets
│   ├── written content.md     # Client's content requirements
│   └── [various .webp images] # Professional pilates imagery
├── package.json               # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # Project documentation
```

## 🎨 Design & Content

### Brand Identity
- **Primary Colors**: Professional pilates palette (whites, greys, accent colors)
- **Typography**: Clean, modern fonts reflecting professional wellness
- **Imagery**: High-quality pilates session photos provided by client
- **Tone**: Professional, welcoming, expertise-focused

### Content Sections
1. **Hero**: Welcome message and main call-to-action
2. **Services**: 
   - 1-2-1 Studio Pilates
   - Mat Pilates Courses
   - Sports Therapy Sessions
   - Equestrian Pilates Sessions
3. **About**: Instructor background and qualifications
4. **Retreats**: Day retreat offerings at premium locations
5. **Testimonials**: Client success stories
6. **Contact**: Booking information and location details

## 🚀 Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment Process
```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist

# Commit and push to GitHub
git add .
git commit -m "feat: update pilates website"
git push origin main
```

## 📋 Technical Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Deployment**: Netlify
- **Repository**: GitHub (WebSmartTeam organization)
- **Domain**: TBD (to be configured)

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Professional desktop layouts
- Touch-friendly navigation
- Optimized images for all screen sizes

### Performance Optimizations
- Vite for fast development and building
- Optimized image formats (.webp)
- Component-based architecture
- Lazy loading where appropriate

### SEO Considerations
- Semantic HTML structure
- Meta tags for search engines
- Accessible navigation
- Fast loading times

## 📞 Contact Integration

**Contact Methods**:
- Online booking system integration (future enhancement)
- Phone contact
- Email contact
- Location/studio information
- Social media links (if provided)

## 🔄 Maintenance & Updates

### Content Updates
- Client can request content changes via the communication system
- Image updates handled through client-content folder
- Service offerings easily configurable

### Technical Maintenance
- Regular dependency updates
- Performance monitoring
- SEO optimization
- Mobile responsiveness testing

## Language Standard

This project follows UK English spelling and grammar conventions:
- Use 'colour' not 'color' (except in CSS/library properties)
- Use 'centre' not 'center' (except in CSS/library properties)  
- Use '-ise' endings: organise, optimise, realise
- Use '-our' endings: colour, behaviour, favour

## Permissions

- **Full File System Access**: Child Claude has permission to create, read, modify, and delete local files and folders within the project directory
- **GitHub CLI Admin**: Full administrative permissions to use the GitHub CLI (`gh`) for repository management
- **Netlify Deployment**: Full permissions to deploy to Netlify using the CLI
- **Project Management**: Full permissions to manage the project structure and files
- **Automatic Project Setup**: Permission to create standard project files without asking

## Git Integration

- **Repository**: WebSmartTeam/free-rein-pilates (private)
- **Branch Strategy**: feature branches for development, main for production
- **Commit Standards**: Conventional commits with clear descriptions
- **Deployment**: Automatic deployment from main branch to Netlify

---

**Status**: Active Development
**Priority**: High - Professional business website
**Client**: Free Rein Pilates
**Deployment**: Production-ready