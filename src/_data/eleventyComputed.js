import { navigation } from "@11ty/eleventy-navigation";

const siteUrl = "https://www.dan-f.xyz";

export default {
  siteUrl,
  siteUrlPretty: siteUrl.replace("https://", ""),
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
  // Get the URL (possibly to the dev server) for the given nav key
  getUrl: (data) => (navKey) => findPageByKey(data.collections.all, navKey).url,
  // Get the URL to the prod site for the given nav key
  getProdUrl: function (data) {
    return (navKey) =>
      this.htmlBaseUrl(
        findPageByKey(data.collections.all, navKey).url,
        siteUrl,
      );
  },
  getTitle: (data) => (navKey) =>
    findPageByKey(data.collections.all, navKey).data.title,
  getSummary: (data) => (navKey) =>
    findPageByKey(data.collections.all, navKey).data.summary,
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
