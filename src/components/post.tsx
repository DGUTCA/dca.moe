import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { AbstractInterface } from "./abstracts";

const root = "src/posts/"

export function getSortedPostsData(type: string, num?: number) {
  const postsDirectory = path.join(process.cwd(), root + type);
  // Get file names under postsDirectory
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    return getPostData(type, fileName.replace(/\.md$/, ""));
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
  } else {
    return allPostsData;
  }
}

export function getPostData(type: string, id: string) {
  const postsDirectory = path.join(process.cwd(), root + type);

  // Read markdown file as string
  const fullPath = path.join(postsDirectory, id + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use markdown gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Get content
  const content = matterResult.content;

  // Combine the data with the id
  return {
    id,
    content,
    ...(matterResult.data as AbstractInterface),
  };
}
