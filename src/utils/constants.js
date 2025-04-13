const API_KEY = 'AIzaSyA5CPiJRmeC2BCOFgl-rPQ2YeOpnuST9KQ';

export const YT_POPULAR_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key='+API_KEY;

export const YT_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';