import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {AbstractInterface} from './abstracts';

export function getSortedPostsData( type:string, num?:number ) {
    const postsDirectory = path.join(process.cwd(), 'src/posts/'+type);
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use markdown gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Get content
        const content = matterResult.content;

        // Combine the data with the id
        return {
            id,
            content,
            ...matterResult.data as AbstractInterface,
        };
    });
    // Sort posts by date
    allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
    if (num) {
        return allPostsData.slice(0, num);
    }
    else {
        return allPostsData;
    }
}