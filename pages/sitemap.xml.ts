import { getCountryFileNames, getFileNamesPerCountry } from '../lib/data-utils';
import { GetServerSidePropsContext } from 'next';

type destinationsPerCountry = {
  countryName: string;
  destinations: string[];
};

const BASE_URL = 'https://sinfronteras-travelblog.com';

function generateSiteMap(allDestinations: destinationsPerCountry[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://sinfronteras-travelblog.com/</loc>
    </url>
    <url>
      <loc>https://sinfronteras-travelblog.com/destinations</loc>
    </url>
    <url>
      <loc>https://sinfronteras-travelblog.com/shop</loc>
    </url>
    <url>
      <loc>https://sinfronteras-travelblog.com/contact</loc>
    </url>
    <url>
      <loc>https://sinfronteras-travelblog.com/en-US</loc>
    </url>
    <url>
      <loc>https://sinfronteras-travelblog.com/en-US/destinations</loc>
    </url>
    <url>
      <loc>https://sinfronteras-travelblog.com/en-US/shop</loc>
    </url>
    <url>
      <loc>https://sinfronteras-travelblog.com/en-US/contact</loc>
    </url>
     ${allDestinations
       .map(({ countryName, destinations }) => {
         return `
        <url>
           <loc>${`${BASE_URL}/destinations/${countryName}`}</loc>
        </url>
        <url>
           <loc>${`${BASE_URL}/en-US/destinations/${countryName}`}</loc>
        </url>
        ${destinations
          .map((destination) => {
            return `
              <url>
                <loc>${`${BASE_URL}/destinations/${countryName}/${destination}`}</loc>
              </url>
              <url>
                <loc>${`${BASE_URL}/en-US/destinations/${countryName}/${destination}`}</loc>
              </url>
         `;
          })
          .join('')}
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { res } = context;
  const countries = getCountryFileNames('en-US');
  const destinations = countries.map((country) => ({
    countryName: country.replace(/\.md$/, ''),
    destinations: getFileNamesPerCountry(
      country.replace(/\.md$/, ''),
      'en-US'
    ).map((fileName) => fileName.replace(/\.md$/, '')),
  }));

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(destinations);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
