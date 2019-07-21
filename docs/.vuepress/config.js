module.exports = {
    baseUrl : '/',
    displayAllHeaders : true,
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
          lang: 'en-UK', // this will be set as the lang attribute on <html>
          title: "Terms and conditions, legal agreements",
          description: 'Legal details about this website'
        }
      },
    themeConfig: {
        logo: '/ALogo.png',
        lastUpdated: 'Last Updated',
        locales: {
            '/': {
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'English 🇬🇧 🇺🇸 🇦🇺 ',
                sidebar: ['/']
            }
        }
    }
}