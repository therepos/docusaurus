# Docusaurus
This is a template to deploy a basic [Docusaurus](https://docusaurus.io/docs) documentation site on GitHub Pages.  

## Deployment

### GitHub Pages
To get started:

1. Click **Use this template** button at the top-right corner of the [repository](https://github.com/therepos/docusaurus).  

2. Choose **Create a new repository**.  

3. Grant read and write permission:

    _Settings_ > _Actions_ > _General_ > _Workflow permission_ > **Read and write permissions**.

    :::note
    - If deployment failed on initial commit:  
        Rerun the `Deploy gh-pages` workflow after granting permission.
    - If the workflow failed due to missing package-lock.json:  
          _Actions_ > _Generate package-lock.json_ > **Run workflow**.  
    :::

4. Configure GitHub Pages:

    _Settings_ > _Pages_ > _Deploy from Branch_ > **gh-pages**.  

5. Commit any file changes to publish the updates.  

6. Visit your published site e.g. https://therepos.github.io/docusaurus/  

### Local Deployment
1. To deploy it locally::  
    ```
    git clone https://github.com/therepos/docusaurus.git
    ```

2. Install npm packages:
    ```
    cd docusaurus
    npm install
    npm run start
    ```

3. Preview site locally:
    ```
    npm run serve
    ```

4. Deploy locally:
    ```
    npm run build
    ```

5. Push to gh-pages:
    ```
    npm run build
    GIT_USER=<username> npm run deploy
    ```

6. Push to GitHub repo:
    ```
    git add . 
    git commit -m "Updates"
    git push
    ```

## Guides

To understand more about how to use or customise the site, please refer to the official [Docusaurus Guides](https://docusaurus.io/docs/category/guides). 

### Structure

Docusaurus file system allows the use of `@import` across files, except the `static` directory where files are served as-is. The following diagram shows the file structure of a multi-sections blog-enabled documentation site. The navigation bar and sidebars items are auto-generated based on the directories under `docs/`. Each sidebar represents a navbar item. Docusaurus expects an index.md landing page for each directory under `docs/`. 

```
docusaurus
├── .github/                    # github workflows
├── blog/  
├── └── yyyy-mm-dd-post.md      # blog post            
├── docs/                       # (build-files) multi-sidebars
│   └── about/index.md          # documents section
│   └── section/index.md        # documents section
├── src/                        # (frontend-files)
│   ├── pages/index.js          # landing page e.g. react/jsx/mdx
│   ├── theme/                  # theme customization
│   └── css/styles.css          # css entrypoint                 
│   └── data/                   # read or imports e.g. json/yaml        
├── static/                     # public as-is i.e. no @import
│   └── font/                   
│   └── img/        
├── i18n/                       # (build-files) localization           
├── scripts/                    # (backend-files)            
├── docusaurus.config.js        # main config
├── package-lock.json           # reproducibility (cache-build)
├── package.json                # dependencies, metadata
├── readme.md                   # optional
└── sidebars.js                 # sidebars config
```

For a simpler dedicated documentation site with a single sidebar:

```
docusaurus
├── .github/          
├── docs/                       # single-sidebar
│   └── about/index.md          # expandable directory
│   └── index.md                # landing page
│   └── documents.md        
├── src/                                     
├── static/                              
├── docusaurus.config.js        
├── package-lock.json           
├── package.json                
└── sidebars.js                 
```

## License
This work is licensed under [Creative Commons Attribution 4.0 International](https://choosealicense.com/licenses/cc-by-4.0/#).   
If you find this template useful, please attribute a link to this repository.

## Resources
- [Base64 Converter](https://base64.guru/converter/encode/image)
- [Google Fonts](https://fonts.google.com/icons)
