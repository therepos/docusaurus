# Usage
This is a template to deploy a basic [Docusaurus](https://docusaurus.io/docs) documentation site on GitHub Pages.   
Please refer to the usage guide [here](https://therepos.github.io/docusaurus/about).

# Structure
```
DOCUSAURUS
├─ .github/                                 # Github Action workflows
├─ blog/                                    # Blog
├─ docs/                                    # Documentations
├─ src/                                     # Components
│  ├─ css/                                    # Styles
│  │  ├─ blog.css                               # Blog styles
│  │  ├─ landing.css                            # Index page styles                               
│  │  ├─ styles.css                             # (Docusaurus styles)
│  │  └─ theme.css                              # Common styles
│  ├─ data/
│  │  └─ landing-page-updates.md
│  ├─ pages/                                # Index page (optional)
│  │  └─ index.js
│  └─ theme/                                # Loads Google Fonts Material Symbols
│     └─ Layout/
│        └─ index.js
├─ static/                                  # Raws
│  ├─ fonts/
│  └─ img/
├─ docusaurus.config.js                     # (Docusaurus settings)
├─ footer.js                                # (Docusaurus footer settings)
├─ LICENSE
├─ package-lock.json                        # (Docusaurus locks dependencies version)
├─ package.json                             # (Docusaurus dependencies)
├─ readme.md
└─ sidebars.js                              # (Docusaurus sidebars settings)
```

## Notes
- This work is licensed under [CC4](https://choosealicense.com/licenses/cc-by-4.0/#). 

## Resources
- [Docusaurus](https://docusaurus.io/docs)