# Managed Services - PMO BD Hub
## PwC Philippines — Managed Services PMO

### 📁 Folder Structure
```
pwc-ms-bd-hub/
├── index.html              ← Home Page
├── guidebooks.html         ← Guidebooks Page
├── templates.html          ← Templates Library (19 templates with real links)
├── service-catalogue.html  ← Service Catalogue Page
├── bd-tools.html           ← BD Tools Page
├── team.html               ← Our Team / CVs Page (NEW)
├── css/
│   └── styles.css          ← Global Styles
├── js/
│   ├── main.js             ← Global JS (nav, scroll, animations)
│   ├── templates.js        ← Template data + search/filter engine
│   ├── chatbot.js          ← Chatbot engine with knowledge base
│   └── chatbot-kb.json     ← Standalone JSON KB (LLM-ready)
└── README.md               ← This file
```

### 🚀 Deployment Options

#### Option A: Local (Double-click)
1. Open `index.html` in any browser

#### Option B: VS Code + Live Server
1. Open folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

#### Option C: GitHub Pages
1. Push to GitHub repo
2. Settings → Pages → Source: main branch → Save
3. Site live at `https://username.github.io/repo-name/`

#### Option D: SharePoint
1. Upload all files to a SharePoint Document Library
2. Use an Embed web part to link to `index.html`
3. Or ask SharePoint admin to configure as a site page

### 📝 How to Update

#### Templates
Edit `js/templates.js` — find the `TEMPLATE_DATA` array and add/edit objects:
```javascript
{
    name: "Template Name",
    category: "PMO",         // PMO, VRO, PPE, Admin
    fileType: "Excel",       // Excel, PowerPoint, Word, PDF
    description: "Description here.",
    link: "https://sharepoint-link-here"
}
```

#### Chatbot Knowledge Base
Edit `js/chatbot.js` — find the `knowledgeBase` array and add entries:
```javascript
{
    keywords: ['keyword1', 'keyword2'],
    answer: 'HTML response here with <a href="link">links</a>'
}
```

#### Team / CVs
Edit `team.html` — duplicate a `team-card` div and update the details.

#### Service Catalogue Link
The link is in `service-catalogue.html` — search for "FY26 Managed Service" to find and update.

#### BD Leadership
Jill (BD Lead) and Kat (BD Sponsor) appear in:
- `index.html` (BD Leadership banner)
- `team.html` (BD Leadership banner + team cards)
- All page footers
- `js/chatbot.js` (contacts response)
- `js/chatbot-kb.json` (contacts section)

#### Content Sections
Each HTML file is self-contained. Edit the relevant `.html` file directly.

#### Branding
All colours, fonts, and spacing are in `css/styles.css` using CSS variables at the top.

### 👥 BD Leadership
- **Katherine May Habelito** — Senior Manager, BD Sponsor
- **Jillyen Pagcaliwagan** — Manager, BD Lead
- **Email:** @pwc.com

### ⚠️ Notes
- Download buttons use SharePoint `?action=download` parameter
- For SharePoint-hosted files, ensure the download URL ends with `&action=download`
- Profile photos can be added to team cards by replacing the avatar div with an `<img>` tag
- This is an internal tool — not for external/client-facing use
