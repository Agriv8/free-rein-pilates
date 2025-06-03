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

- ✅ Use mcs_bridge_messages for messages

## 🏢 CLI FIRST OPERATIONS

**Use Official CLIs (Commercial Grade):**
```bash
# CLI Tools
gh auth login    # GitHub CLI
netlify login    # Netlify CLI
supabase login   # Supabase CLI
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

# Deployment steps to be configured by Master Claude
```

## 📋 Technical Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Deployment**: Netlify
- **Repository**: TBD (to be configured)
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

- **Repository**: TBD (to be configured by Master Claude)
- **Branch Strategy**: feature branches for development, main for production
- **Commit Standards**: Conventional commits with clear descriptions
- **Deployment**: TBD (to be configured by Master Claude)

---

**Status**: Active Development
**Priority**: High - Professional business website
**Client**: Free Rein Pilates
**Deployment**: Production-ready
## 🍄 SWARM COLLABORATION ACTIVE
- **Status**: Fully operational
- **Authority**: Pete - "go for it"
- **Auto-Implementation**: Enabled for beneficial improvements
- **Monitoring**: Continuous with Faith collaboration

## 🎨 MCP USAGE REQUIREMENTS (MANDATORY)

### 🚨 MCP ACCESS ENABLED
Your `.claude/settings.local.json` has been configured with MCP access.

### 🛠️ AVAILABLE MCPs - USE THESE FIRST:

#### 1. **demo-styles MCP** (Professional Styling)
```javascript
// Get professional themes instead of building from scratch
const theme = await tools.demo_styles.get_theme({
  name: "dark-tech-pro",
  variant: "glass-morphism"
});
```

#### 2. **pexels-image-provider MCP** (Beautiful Images) 
```javascript
// Get professional placeholder images
const heroImage = await tools.pexels.search_image({
  query: "technology website hero",
  size: "large"
});
```

### ✅ STYLING REQUIREMENTS:
- ❌ **NO generic blue gradients**
- ❌ **NO basic Tailwind defaults** 
- ❌ **NO placeholder.com images**
- ✅ **USE demo-styles MCP themes**
- ✅ **USE professional Pexels images**
- ✅ **USE glass morphism effects**

### 🎯 WORKFLOW:
1. Check demo-styles MCP for existing themes
2. Use pexels-image-provider for all images
3. Apply professional styling from day 1
4. Only build custom if no MCP exists

**RESULT**: Professional designs from the start - no more generic styling!
