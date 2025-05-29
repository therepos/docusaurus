# Docusaurus
This is a template to deploy a basic [Docusaurus](https://docusaurus.io/docs) documentation site on GitHub Pages.  

## Deployment

### GitHub Pages
To get started:

1. Click the **Use this template** button (top-right).  

2. Choose **Create a new repository**.  

3. Enable GitHub Pages:  

    _Settings_ > _Pages_ > _Deploy from Branch_ > **gh-pages**.  

4. Grant read and write permission:  

    _Settings_ > _Actions_ > _General_ > _Workflow permission_ > **Read and write permissions**.

5. Commit any file changes to publish the updates.  

6. Visit your published site e.g. https://therepos.github.io/template-docusaurus/  

### (Alternative) Local Deployment
1\.     To deploy it locally::  
```
git clone https://github.com/therepos/template-docusaurus.git
```

2\.&nbsp;&nbsp; Install npm packages:
```
cd template-docusaurus
npm install
npm run start
```

3\.&nbsp;&nbsp; Preview site locally:
```
npm run serve
```

4\.&nbsp;&nbsp; Deploy locally:
```
npm run build
```

5\.&nbsp;&nbsp; Push to gh-pages:
```
npm run build
GIT_USER=<username> npm run deploy
```

6\.&nbsp;&nbsp; Push to GitHub repo:
```
git add . 
git commit -m "Updates"
git push
```

## Guides

To understand more about how to use or customise the site, please refer to the official [Docusaurus Guides](https://docusaurus.io/docs/category/guides). 

### Structure

```
template-docusaurus
├── .github/
├── blog/  
├── └── yyyy-mm-dd-post.md      # your blog post            
├── docs/               
│   └── about/                  # your section
│       └── index.md            # your document
├── src/
├── static/
├── docusaurus.config.js
├── package.json
├── readme.md           
└── sidebars.js
```

## License
This project is licensed under MIT. If you find this template useful, please attribute a link to this repository.