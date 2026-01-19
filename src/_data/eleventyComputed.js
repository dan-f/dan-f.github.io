import { navigation } from "@11ty/eleventy-navigation";

export default {
  siteUrl: "www.dan-f.xyz",
  mailUrl: "dan@dan-f.xyz",
  rcUrl: "https://www.recurse.com/",

  eleventyNavigation: {
    key: (data) => data.eleventyNavigation.key || data.title?.toLowerCase(),
  },

  globalLastModified: (data) =>
    data.collections.all
      .map((c) => c.date)
      .reduce(
        (lastModified, cur) => (cur > lastModified ? cur : lastModified),
        0,
      ),
  getUrl: (data) => (navKey) => findPageByKey(data.collections.all, navKey).url,
  getTitle: (data) => (navKey) =>
    findPageByKey(data.collections.all, navKey).data.title,
  getNavChildren: (data) => (navKey) =>
    navigation.find(data.collections.all, navKey),
};

function findPageByKey(collection, key) {
  for (const page of collection) {
    if (page.data.eleventyNavigation.key === key) {
      return page;
    }
  }

  throw new Error(`Could not find page with navigation key "${key}"`);
}
