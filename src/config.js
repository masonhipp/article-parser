var config = {};

config.wordsPerMinute = 300;

config.blackList = [

];

config.adsDomain = [
  'lifehacker.com',
  'deadspin.com',
  'gizmodo.com',
  'stocktwits.com',
  'dailyjs.com'
];

config.htmlRules = {
  allowedTags: [
    'html', 'body', 'meta', 'link', 'title',
    'head', 'nav',
    'h1', 'h2', 'h3', 'h4', 'h5',
    'u', 'b', 'i', 'em', 'strong',
    'div', 'span', 'p', 'article', 'blockquote',
    'ul', 'ol', 'li',
    'dd', 'dl',
    'table', 'th', 'tr', 'td', 'thead', 'tbody', 'tfood',
    'img', 'picture',
    'br',
    'a'
  ],
  allowedAttributes: {
    'a': ['href'],
    'img': ['src', 'alt'],
    'meta': ['content', 'name', 'property', 'charset', 'viewport'],
    'link': ['href', 'type']
  }
}

config.SoundCloudKey = 'd5ed9cc54022577fb5bba50f057d261c';
config.YouTubeKey = 'AIzaSyBsMo0x1tEOHLS4XnxHQjdj8pqOSOWcDak';

module.exports = config;