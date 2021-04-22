import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { postMetaData, countryMetaData } from './types';

// const enDataDirectory = path.join(process.cwd(), 'destination-data', 'en');
// const esDataDirectory = path.join(process.cwd(), 'destination-data', 'es');

// export const getDataFileNames = (locale: string) => {
//   let dataFiles;
//   switch (locale) {
//     case 'en-US':
//       dataFiles = fs.readdirSync(enDataDirectory);
//       return dataFiles;
//     case 'es-AR':
//       dataFiles = fs.readdirSync(esDataDirectory);
//       return dataFiles;
//     default:
//       dataFiles = fs.readdirSync(enDataDirectory);
//       return dataFiles;
//   }
// };

// export function getFileData(fileIdentifier: string, locale: string) {
//   const postSlug = fileIdentifier.replace(/\.md$/, '');
//   let filePath;
//   switch (locale) {
//     case 'es-US':
//       filePath = path.join(enDataDirectory, `${postSlug}.md`);
//       break;
//     case 'es-AR':
//       filePath = path.join(esDataDirectory, `${postSlug}.md`);
//       break;
//     default:
//       filePath = path.join(enDataDirectory, `${postSlug}.md`);
//   }
//   const fileContent = fs.readFileSync(filePath, 'utf-8');
//   const { data, content } = matter(fileContent);

//   const postData = {
//     slug: postSlug,
//     ...(data as postMetaData),
//     content,
//   };
//   return postData;
// }

// export function getAllPosts(locale: string) {
//   const postFiles = getDataFileNames(locale);

//   const allPosts = postFiles.map((postFile) => {
//     return getFileData(postFile, locale);
//   });

//   // const sortedPosts = allPosts.sort((postA, postB) =>
//   //   postA.date > postB.date ? -1 : 1
//   // );
//   return allPosts;
// }

// export function getFeaturedPosts(locale: string) {
//   const allPosts = getAllPosts(locale);
//   const featutredPosts = allPosts.filter((post) => post.isFeatured);
//   return featutredPosts;
// }

// export function getPostsPerCountry(country: string, locale: string) {
//   const allPosts = getAllPosts(locale);
//   const postsPerCountry = allPosts.filter((post) => post.country === country);
//   return postsPerCountry;
// }

const enContryDataDirectory = path.join(process.cwd(), 'countries-data', 'en');
const esCountryDataDirectory = path.join(process.cwd(), 'countries-data', 'es');

export function getCountryFileNames(locale: string) {
  let dataFiles;
  switch (locale) {
    case 'en-US':
      dataFiles = fs.readdirSync(enContryDataDirectory);
      return dataFiles;
    case 'es-AR':
      dataFiles = fs.readdirSync(esCountryDataDirectory);
      return dataFiles;
    default:
      dataFiles = fs.readdirSync(enContryDataDirectory);
      return dataFiles;
  }
}

export function getCountryFileData(fileIdentifier: string, locale: string) {
  const countrySlug = fileIdentifier.replace(/\.md$/, '');
  let filePath;
  switch (locale) {
    case 'es-US':
      filePath = path.join(enContryDataDirectory, `${countrySlug}.md`);
      break;
    case 'es-AR':
      filePath = path.join(esCountryDataDirectory, `${countrySlug}.md`);
      break;
    default:
      filePath = path.join(enContryDataDirectory, `${countrySlug}.md`);
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const countryData = {
    slug: countrySlug,
    ...(data as countryMetaData),
    content,
  };
  return countryData;
}

export function getAllCountriesData(locale: string) {
  const countryFileNames = getCountryFileNames(locale);
  const allCountries = countryFileNames.map((fileName) => {
    return getCountryFileData(fileName, locale);
  });
  return allCountries;
}

export function buildCountryDirectory(country: string, locale: string) {
  const enDataDirectory = path.join(
    process.cwd(),
    'destination-data',
    'en',
    country
  );
  const esDataDirectory = path.join(
    process.cwd(),
    'destination-data',
    'es',
    country
  );
  const directory = locale === 'en-US' ? enDataDirectory : esDataDirectory;
  return directory;
}

export function getFileData(
  country: string,
  locale: string,
  fileIdentifier: string
) {
  const directory = buildCountryDirectory(country, locale);
  const fileSlug = fileIdentifier.replace(/\.md$/, '');
  const filePath = path.join(directory, `${fileSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: fileSlug,
    countrySlug: country,
    ...(data as postMetaData),
    content,
  };
  return postData;
}

export function getFileNamesPerCountry(country: string, locale: string) {

  const directory = buildCountryDirectory(country, locale);

  const fileNames = fs.readdirSync(directory);
  return fileNames;
}

export function getDestinationsPerCountry(country: string, locale: string) {

  const directory = buildCountryDirectory(country, locale);

  const fileNames = fs.readdirSync(directory);
  const filesData = fileNames.map(file => {
    return getFileData(country, locale, file);
  });
  return filesData;
}

export function getFeaturedDestinations(locale: string) {
  const countryFileNames = getCountryFileNames(locale);
   const countrySlugs = countryFileNames.map((fileName) =>
     fileName.replace(/\.md$/, '')
   );
   let allDestinationData: postMetaData[] = [];
  for (const country of countrySlugs) {
    const destinations = getDestinationsPerCountry(country, locale);
    allDestinationData = allDestinationData.concat(destinations);
  }
  const featuredDestinations = allDestinationData.filter(destination => destination.isFeatured === true);
  return featuredDestinations;
}
