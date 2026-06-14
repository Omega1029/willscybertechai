export function formatBlogContent(content: string): string {
  const lines = content.split('\n');
  const formatted: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = i < lines.length - 1 ? lines[i + 1] : '';

    if (line.trim() === '---') {
      formatted.push('<div class="section-divider"></div>');
    } else if (line.trim() && !line.startsWith(' ') && nextLine.trim() === '') {
      const prevLine = i > 0 ? lines[i - 1] : '';
      if (prevLine.trim() === '' || prevLine.trim() === '---') {
        if (line.length < 80 && !line.includes('.') && !line.includes(',')) {
          formatted.push(`<h2>${line.trim()}</h2>`);
        } else {
          formatted.push(`<p>${line}</p>`);
        }
      } else {
        formatted.push(`<p>${line}</p>`);
      }
    } else if (line.trim() && line.match(/^[A-Z][a-zA-Z\s]+:$/)) {
      formatted.push(`<h3>${line.trim()}</h3>`);
    } else if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
      const text = line.trim().replace(/^\*\*/, '').replace(/\*\*$/, '');
      formatted.push(`<h3>${text}</h3>`);
    } else if (line.trim()) {
      formatted.push(`<p>${line}</p>`);
    } else {
      formatted.push('<br/>');
    }
  }

  return formatted.join('\n');
}
