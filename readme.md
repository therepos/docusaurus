# Usage
This is a template to deploy a basic [Docusaurus](https://docusaurus.io/docs) documentation site on GitHub Pages.   
Please refer to the usage guide [here](https://therepos.github.io/docusaurus/about).

# Structure
```
docusaurus
├─ .github/                                 # Github workflows
├─ blog/                                    # Blog (optional)
├─ docs/                                    # Documentations
├─ src/                                     # Components
│  ├─ css/                                    # Styles
│  │  ├─ blog.css                               # Blog styles
│  │  ├─ landing.css                            # Index page styles                               
│  │  ├─ styles.css                             # (Required docusaurus styles)
│  │  └─ theme.css                              # Main styles
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
├─ docusaurus.config.js                     # (Required docusaurus settings)
├─ footer.js                                # Docusaurus footer settings
├─ LICENSE
├─ package-lock.json                        # Docusaurus locks dependencies version
├─ package.json                             # (Required docusaurus dependencies)
├─ readme.md
└─ sidebars.js                              # Docusaurus sidebars settings
```

## Resources

- [Docusaurus](https://docusaurus.io/docs)
