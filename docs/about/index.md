# Docusaurus
This is a template to deploy a basic [Docusaurus](https://docusaurus.io/docs) documentation site on GitHub Pages.  

## 1. Deployment

### 1.1. GitHub Pages
To get started, go to the [repository](https://github.com/therepos/template-docusaurus) and follow the steps below:

1\. Click the **Use this template** button (top-right).  

2\. Choose **Create a new repository**.  

3\. Enable GitHub Pages:  

&nbsp;&nbsp;&nbsp; _Settings_ > _Pages_ > _Deploy from Branch_ > <strong class="dr">gh-pages</strong>.  

4\. Grant read and write permission:  

&nbsp;&nbsp;&nbsp; _Settings_ > _Actions_ > _General_ > _Workflow permission_ > **Read and write permissions**.

5\. Commit any file changes to publish the updates.  

6\. Visit your published site e.g. https://therepos.github.io/template-docusaurus/  

### 1.2. (Alternative) Local Deployment
1\. To deploy it locally::  
```
git clone https://github.com/therepos/template-docusaurus.git
```

2\. Install npm packages:
```
cd template-docusaurus
npm install
npm run start
```

3\. Deploy locally:
```bash
npm run build
```

4\. Push to GitHub repo:
```bash
git add . 
git commit -m "Updates"
git push
```

5\. (Optional) Preview site locally only:
```bash
npm run serve
```

## 2. Guides

To understand more about how to use or customise the site, please refer to the official [Docusaurus Guides](https://docusaurus.io/docs/category/guides). 

### 2.1. Structure

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

## 3. License
This project is licensed under MIT. If you find this template useful, please attribute a link to this repository.