const currentYear = new Date().getFullYear();
const org = 'therepos';

export default {
  style: 'dark',
  links: [],
  copyright: `
    <div class="footer-row">
      <div class="footer-left">
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" style="color: #ebedf0;">CC BY 4.0</a> © ${currentYear} ${org}.<br/>
        Made with Docusaurus.
      </div>
      <div class="footer-icons">
        <a href="https://archives-nine.vercel.app/" class="icon icon-notes" target="_blank" aria-label="Notes"></a>        
      </div>
    </div>
  `,
};
