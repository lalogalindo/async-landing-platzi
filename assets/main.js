const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCGQP60EC4xP0kOqf0KBylQQ&part=snippet%2Cid&order=date&maxResults=7';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af961b8c29msh64808e2fea7b9f7p1b9f4ejsn78b4c698d9b0',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const content = null || document.getElementById('content');

async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
}

(async () => {
    try {
        const videos = await fetchData(url, options);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).join('')}
      `;
      content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();