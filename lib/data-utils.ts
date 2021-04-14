import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type data = {
  title: string;
  subtitle: string;
  image: string;
  isFeatured: boolean;
}

const enDataDirectory = path.join(process.cwd(), 'destination-data', 'en');
const esDataDirectory = path.join(process.cwd(), 'destination-data', 'es');

export const getDataFileNames = (locale: string) => {
  let dataFiles;
  switch (locale) {
    case 'en-US':
      dataFiles = fs.readdirSync(enDataDirectory);
      return dataFiles;
    case 'es-AR':
      dataFiles = fs.readdirSync(esDataDirectory);
      return dataFiles;
    default:
      dataFiles = fs.readdirSync(enDataDirectory);
      return dataFiles;
  }
};

export function getFileData(fileIdentifier: string, locale: string) {
  const postSlug = fileIdentifier.replace(/\.md$/, '');
  let filePath;
  switch (locale) {
    case 'es-US': 
      filePath = path.join(enDataDirectory, `${postSlug}.md`);
      break;
    case 'es-AR':
      filePath = path.join(esDataDirectory, `${postSlug}.md`);
      break;
    default: 
      filePath = path.join(enDataDirectory, `${postSlug}.md`);
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data as data,
    content,
  };
  return postData;
}

export function getAllPosts(locale: string) {
  const postFiles = getDataFileNames(locale);

  const allPosts = postFiles.map((postFile) => {
    return getFileData(postFile, locale);
  });

  // const sortedPosts = allPosts.sort((postA, postB) =>
  //   postA.date > postB.date ? -1 : 1
  // );
  return allPosts;
}

export function getFeaturedPosts(locale: string) {
  const allPosts = getAllPosts(locale);
  const featutredPosts = allPosts.filter((post) => post.isFeatured);
  return featutredPosts;
}
