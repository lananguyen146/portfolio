# Lana Nguyen - Portfolio

A modern, interactive portfolio website showcasing marketing analytics and data visualization skills.

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool and dev server
- **Tailwind CSS v3** - Styling
- **Plotly.js** - Interactive data visualizations
- **GitHub Pages** - Hosting (planned)

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   └── Dashboard.jsx       # Interactive analytics dashboard
│   ├── data/
│   │   └── sampleData.js       # Sample marketing data
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── index.css               # Tailwind directives
│   └── main.jsx                # Entry point
├── public/                     # Static assets
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features

- **Hero Section** - Professional introduction
- **About Section** - Experience, education, and skills
- **Interactive Dashboard** - Marketing analytics with Plotly charts:
  - Email campaign performance (line chart with dual y-axis)
  - Channel revenue comparison (bar chart)
  - Social media engagement (pie chart)
- **Contact Section** - LinkedIn integration
- **Responsive Design** - Mobile-friendly layout

## Development

### Install Dependencies
```bash
npm install
```

### Start Dev Server
```bash
npm run dev
```
Server runs at http://localhost:5173

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Notes

- Uses Tailwind CSS v3 for stability
- Plotly charts are fully interactive with zoom, pan, and hover features
- Sample data demonstrates marketing analytics capabilities

## Deployment (Planned)

Will be deployed to GitHub Pages at: `https://lananguyen146.github.io/portfolio`

## Contact

**Lana Nguyen**  
Sydney, Australia  
[LinkedIn](https://www.linkedin.com/in/lana-nguyen-1406)
