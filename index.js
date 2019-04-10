addEventListener('click', (e) => {
    e = e || window.event;

    console.log(e.target);

    let target = e.target || e.srcElement;
    let text = target.textContent.trim() || target.innerText.trim();

    if (text === '') return;
    if (text !== target.innerHTML) return;

    let words = text.replace(/\./g, '').toLowerCase().split(' ');

    let out = '';

    let completedWords = [];

    words.forEach((word) => {
        out += '<div style="background-color: #fff; color: #000; border-radius: 3px; padding: 2px; margin: 2px; display: inline-block; text-align: center"><div style="margin: auto; width: 50px; height: 50px; background-size: cover;" class="symboltranslator-' + word + '"></div><div>' + word + '</div></div>';

        if (completedWords.indexOf(word) === -1) {
            completedWords.push(word);

            aw.request('https://www.opensymbols.org/api/v1/symbols/search?q=' + word).then(response => {
                if (response.length === 0) return;

                let imageUrl = response[0].image_url;
                let els = document.getElementsByClassName('symboltranslator-' + word);
                for (let i = 0; i < els.length; i++) {
                    els[i].style.backgroundImage = 'url(' + imageUrl + ')';
                }
            })
        }
    });

    target.innerHTML = out;
});