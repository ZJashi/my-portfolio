export type TOCHeading = {
  id: string;
  text: string;
  level: number;
};

export function extractHeadings(htmlContent: string): TOCHeading[] {
  const headingRegex = /<h([2-4])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[2-4]>/gi;
  const headings: TOCHeading[] = [];
  let match;

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1], 10);
    const id = match[2];
    // Strip HTML tags from text
    const text = match[3].replace(/<[^>]*>/g, "");
    headings.push({ id, text, level });
  }

  return headings;
}
