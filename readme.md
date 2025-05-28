# Docusaurus
This is a template to deploy a basic Docusaurus site on GitHub Pages.

## GitHub Pages
To get started:

1. Click the <strong>Use this template</strong> button (top-right).  
2. Choose <strong>Create a new repository</strong>.  
3. Enable GitHub Pages:  
- Trigger the GitHub Actions workflow by editing any Markdown file.  
- <em>Settings</em> > <em>Pages</em> > <em>Deploy from Branch</em> > <strong>gh-pages</strong>.  
- <em>Settings</em> > <em>Actions</em> > <em>General</em> > <em>Workflow permission</em> > <strong>Read and write permissions</strong>.
4. Visit your published site e.g. https://therepos.github.io/template-docusaurus/

## Local 
1\. To deploy it locally::  
```
git clone https://github.com/therepos/docusaurus.git
```

2\. Install npm packages:
```
cd docusaurus
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

## References
- [Official Docusaurus Guide](https://docusaurus.io/docs)
