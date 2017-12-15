const uaParser = process.env.BROWSER ? require('ua-parser-js') : () => {};

export default function getCommonInfo(customMessages) {
  let md = '';
  const ua = uaParser(navigator.userAgent || '');
  const parsedSuccess =
    ua && ua.browser && ua.browser.name && ua.os && ua.os.name;

  if (parsedSuccess) {
    const majorVersion = (ua.browser.version || '').split('.')[0];
    const browser = ua.browser.name ? `${ua.browser.name} ${majorVersion}` : '';
    const os = ua.os.name ? `${ua.os.name} ${ua.os.version || ''}` : '';
    md += `\<strong>Browser</strong> ${browser} on ${os}     <code>${
      process.env.VERSION
    }</code>`;
  }

  md += `\n${location.href}`;

  customMessages.forEach(msg => (md += `\n${msg}`));
  return md;
}