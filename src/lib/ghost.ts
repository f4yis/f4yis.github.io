import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
export const ghostClient = new GhostContentAPI({
    url: 'https://fayis.digitalpress.blog', // This is the default URL if your site is running on a local environment
    key: 'b689e80c17552ce7847939b838',
    version: 'v5.0',
});