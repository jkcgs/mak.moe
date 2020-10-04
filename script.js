((d, b) => {
    // Nombre, Año, Estudio, Imagen
    const l = [
        ['Angel Beats', 2010, 'P.A. Works', 'angel-beats.jpg'],
        ['Bakuman.', 2010, 'J.C. Staff', 'bakuman.jpg'],
        ['The Dissapearance of Haruhi Suzumiya', 2010, 'Kyoto Animation', 'haruhi.jpg'],
        ['Durarara!!', 2010, 'Brain\'s Base', 'durarara.jpg'],
        ['K-On!', 2010, 'Kyoto Animation', 'k-on.jpg'],
        ['The Tatami Galaxy', 2010, 'Madhouse', 'tatami.jpg'],
        ['AnoHana', 2011, 'A-1 Pictures', 'anohana.jpg'],
        ['Fate/Zero', 2011, 'ufotable', 'fatezero.jpg'],
        ['Gintama\'', 2011, 'Sunrise', 'gintama11.jpg'],
        ['Hunter x Hunter', 2011, 'Madhouse', 'hunterx.jpg'],
        ['Mahou Shoujo Madoka Magica', 2011, 'Shaft', 'madoka.jpg'],
        ['Nichijou', 2011, 'Kyoto Animation', 'nichijou.jpg'],
        ['Steins;Gate', 2011, 'White Fox', 'steins-gate.jpg'],
        ['Usagi Drop', 2011, 'Production I.G', 'usagi-drop.jpg'],
        ['Hyouka', 2012, 'Kyoto Animation', 'hyouka.jpg'],
        ['Jojo\'s Bizarre Adventure', 2012, 'David Production', 'jojos.jpg'],
        ['Psycho-Pass', 2012, 'Production I.G', 'psycho-pass.jpg'],
        ['Shinsekai yori', 2012, 'A-1 Pictures', 'shinsekai.jpg'],
        ['Sword Art Online', 2012, 'A-1 Pictures', 'sao.jpg'],
        ['Attack On Titan', 2013, 'Wit Studio', 'shingeki.jpg'],
        ['Kill la Kill', 2013, 'Trigger', 'kill-la-kill.jpg'],
        ['Monogatari Series: Second Season', 2013, 'Shaft', 'nisemonogatari.jpg'],
        ['Oregairu', 2013, 'Brain\'s Base', 'oregairu.jpg'],
        ['Haikyu!!', 2014, 'Production I.G', 'haikyu.jpg'],
        ['Shirobako', 2014, 'P.A. Works', 'shirobako.jpg'],
        ['Your Lie in April', 2014, 'A-1 Pictures', 'april.jpg'],
        ['One Punch Man', 2015, 'Madhouse', 'one-punch-man.jpg'],
        ['3-gatsu no Lion', 2016, 'Shaft', '3gatsu.jpg'],
        ['Boku no Hero Academia', 2016, 'Bones', 'boku-no-hero.jpg'],
        ['Kimi no Na wa.', 2016, 'CoMix Wave Films', 'kimi-no-nawa.jpg'],
        ['KonoSuba', 2016, 'Studio Deen', 'konosuba.jpg'],
        ['Mob Psycho 100', 2016, 'Bones', 'mobpsycho.jpg'],
        ['Re:Zero', 2016, 'White Fox', 'rezero.jpg'],
        ['Shouwa Genroku Rakugo Shinju', 2016, 'Studio Deen', 'shouwa.jpg'],
        ['A Silent Voice', 2016, 'Kyoto Animation', 'a-silent-voice.jpg'],
        ['Houseki no Kuni', 2017, 'Orange', 'houseki.jpg'],
        ['Made in Abyss', 2017, 'Kinema Citrus', 'made-in-abyss.jpg'],
        ['Sora yori mo Tooi Basho', 2018, 'Madhouse', 'sorayori.jpg'],
        ['Kaguya-sama: Love is War', 2019, 'A-1 Pictures', 'kaguya.jpg'],
        ['Kimetsu no Yaiba', 2019, 'ufotable', 'kimetsu.jpg'],
        ['The Promised Neverland', 2019, 'CleverWorks', 'neverland.jpg'],
        ['Vinland Saga', 2019, 'Wit Studio', 'vinland-saga.jpg']
    ];

    // key: user, value: índices de anime vistos según array anterior
    // Si el índice es decimal, significa que la serie no ha sido vista por completo
    const x = {
        'cacha': [10, 11, 16, 26, 31],
        'chang': [0, 2, 6, 7, 10, 12, 14, 16, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 32, 34, 36, 38, 39, 40, 41],
        'disco': [9, 15, 18, 19, 23, 26, 28, 39, 40],
        'dln': [2, 3, 12, 18, 29, 30, 39, 40, 41],
        'hiko': [0, 7, 10, 12, 15, 26, 30, 32],
        'mak': [4, 10, 11, 12, 15, 17, 18, 19, 20, 21, 26, 28, 29, 30, 31, 32, 36, 38, 39, 40, 41],
        'nicuuut': [19, 28, 41],
        'roy': [9, 18, 19, 26, 28, 29, 39, 41],
        'sketch': [2, 11, 15, 20, 21, 30, 32, 38],
        'yara': [10, 11, 15, 20, 26, 30, 31, 36],
        'yuzu': [0, 2.5, 4, 6, 7.5, 9.5, 10, 11, 15, 16.5, 18.5, 19.5, 20, 26, 28, 31, 36, 39],
        'zero': [0, 1, 2, 4, 5, 6, 8, 11, 12, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30, 32, 34, 37, 38, 40],
        'zipi': [7, 9, 16, 18, 19, 26, 28, 29, 31, 39, 40],
    };

    // Si no hay soporte para Templates, cancelar
    if (!('content' in d.createElement('template'))) return;

    // Generar listado de anime
    const cont = d[b]('.posters');
    l.forEach((i, n) => {
        // Completar datos del anime
        let t = d[b]('template');
        t.content[b]('.title').textContent = i[0];
        t.content[b]('.year').textContent = i[1];
        t.content[b]('.studio').textContent = i[2];
        t.content[b]('.anime-poster img').src = `posters/${i[3]}`;
        t.content[b]('.anime-poster').dataset.idx = n; // Agregar índice al dataset

        // Agregar al contenedor
        let clone = d.importNode(t.content, true);
        cont.appendChild(clone);
    });

    // Rellenar select de usuarios
    const select = d[b]('select');
    for (let k in x) {
        let opt = d.createElement('option');
        opt.value = k;
        opt.textContent = `${k} (${x[k].length})`;
        select.add(opt);
    }

    // Actualizar anime visto al cambiar el select
    function update() {
        // Usuario seleccionado
        let val = select.value;
        // Mapear listado de anime vistos por el usuario como enteros truncados
        let f = x[val].map(n => Math.floor(n));

        // Recorrer los anime
        for (let i = 0; i < l.length; i++) {
            let poster = d[b](`.anime-poster[data-idx='${i}']`);
            
            let seen = f && f.indexOf(i) != -1; // El usuario ha visto la serie
            let full = seen && x[val].indexOf(i) != -1; // El usuario ha visto la serie completa
            poster[b]('.checked').style.display = seen ? 'block' : 'none';
            poster[b]('.checked').textContent = full ? '✓' : '~';
        }
    }
    select.addEventListener('change', update);
})(document, 'querySelector');