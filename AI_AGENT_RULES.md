# AI Agent Development Rules - Portfolio Project

## Project Context
- **Project Type**: Static portfolio website with interactive data visualizations
- **Goal**: Showcase marketing analytics skills for career transition to data analytics
- **Tech Stack**: React + Vite + Tailwind CSS v3 + Plotly.js
- **Deployment**: GitHub Pages

## Critical Rules for AI Agents

### 1. Never Block I/O with Dev Servers
**NEVER** run `npm run dev`, `vite`, or any long-running server process in foreground.

**Correct approaches:**
```bash
# Option 1: Run in background
npm run dev > /dev/null 2>&1 &

# Option 2: Ask user to start separately
"Please run 'npm run dev' in a separate terminal"
```

### 2. Always Check Error Logs
When starting services or making changes:
- Capture logs to file: `command 2>&1 | tee /tmp/output.log`
- Wait for startup: `sleep 3`
- Verify service: `curl -s http://localhost:5173`
- Check logs: `cat /tmp/output.log`
- Report actual errors to user

### 3. Tailwind CSS Version Management
**Use Tailwind v3** (not v4) for stability:
```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

**postcss.config.js:**
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Plotly.js Best Practices
- Install: `npm install react-plotly.js plotly.js`
- Import: `import Plot from 'react-plotly.js'`
- Always set:
  - `useResizeHandler={true}`
  - `config={{ responsive: true }}`
  - `layout={{ autosize: true }}`
  - `style={{ width: '100%', height: '400px' }}`

### 5. Sample Data Strategy
For portfolio projects without real data:
- Create realistic sample data in `src/data/sampleData.js`
- Use marketing-relevant metrics:
  - Email: open rates, click rates, conversions
  - Channels: revenue, ROI by channel
  - Social: engagement, followers by platform
- Keep data simple but professional

### 6. Project Structure
Maintain clean separation:
```
src/
├── components/     # Reusable UI components
├── data/          # Sample/mock data
├── App.jsx        # Main app
└── index.css      # Global styles
```

### 7. Minimal Code Principle
- Write only essential code
- No verbose implementations
- No unnecessary abstractions
- Focus on working solution first

### 8. Dependency Management
When encountering version conflicts:
1. Check error message carefully
2. Uninstall conflicting packages
3. Install stable versions
4. Clear cache: `rm -rf node_modules/.vite`
5. Verify with logs

### 9. GitHub Integration
- Repository: `git@github.com:lananguyen146/portfolio.git`
- Clone location: `~/workspace/portfolio`
- SSH authentication already configured
- Commit regularly with clear messages

### 10. User Communication
- Report what you're doing clearly
- Show actual errors, not summaries
- Provide next steps
- Ask for confirmation on major changes

## Common Issues & Solutions

### Issue: Tailwind not working
**Solution**: Downgrade to v3, use standard PostCSS config

### Issue: Plotly charts not responsive
**Solution**: Add `useResizeHandler`, `responsive: true`, `autosize: true`

### Issue: Dev server blocks terminal
**Solution**: Run in background with `&` or ask user to start separately

### Issue: Changes not reflecting
**Solution**: Clear Vite cache, restart server

## Testing Checklist
Before marking work complete:
- [ ] Dev server starts without errors
- [ ] Page loads at http://localhost:5173
- [ ] No console errors in browser
- [ ] Tailwind styles applied
- [ ] Charts render and are interactive
- [ ] Responsive on mobile
- [ ] All links work

## Next Steps for This Project
1. Add more project showcases
2. Implement GitHub Pages deployment
3. Add real project data
4. Create project detail pages
5. Add contact form
6. Optimize for SEO
