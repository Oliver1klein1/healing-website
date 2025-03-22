import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export function getBookContent(filename: string): string {
  const contentDirectory = path.join(process.cwd(), 'src/content/books');
  const fullPath = path.join(contentDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = remark()
    .use(html)
    .processSync(content)
    .toString();

  return processedContent;
} 