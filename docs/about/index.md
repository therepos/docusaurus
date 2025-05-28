# Docusaurus
This is a template to deploy a basic Docusaurus site on GitHub Pages.

## GitHub Pages
To get started, go to the [repository](https://github.com/therepos/template-docusaurus) and follow the steps below:

1. Click the **Use this template** button (top-right).  
2. Choose **Create a new repository**.  
3. Enable GitHub Pages:  
- Trigger the GitHub Actions workflow by editing any Markdown file.  
- <em>Settings</em> > <em>Pages</em> > <em>Deploy from Branch</em> > **gh-pages**.  
- <em>Settings</em> > <em>Actions</em> > <em>General</em> > <em>Workflow permission</em> > **Read and write permissions**.
4. Visit your published site e.g. https://therepos.github.io/template-docusaurus/

## Local 
1\. To deploy it locally::  
```git
git clone https://github.com/therepos/docusaurus.git
```

2\. Install npm packages:
```git
cd docusaurus
npm install
npm run start
```

3\. Deploy locally:
```git
npm run build
```

4\. Push to GitHub repo:
```git
git add . 
git commit -m "Updates"
git push
```

5\. (Optional) Preview site locally only:
```git
npm run serve
```

## References
- [Official Docusaurus Guide](https://docusaurus.io/docs)
