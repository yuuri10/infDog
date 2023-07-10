const music = document.getElementById('music');
const movie = document.getElementById('movie');
const youtube = document.getElementById('youtube');
const divination = document.getElementById('divination');
const karaoke = document.getElementById('karaoke');
const alcohol = document.getElementById('alcohol');
const money = document.getElementById('money');
const global = document.getElementById('global');
const beauty = document.getElementById('beauty');
const sports = document.getElementById('sports');
const feature = document.getElementById('feature');
const fashion = document.getElementById('fashion');

clickEvent(music);
clickEvent(movie);
clickEvent(youtube);
clickEvent(divination);
clickEvent(karaoke);
clickEvent(alcohol);
clickEvent(money);
clickEvent(global);
clickEvent(beauty);
clickEvent(sports);
clickEvent(feature);
clickEvent(fashion);

function clickEvent(event) {
    event.onclick = () => {
        var roomNameInput = event.name;
        var searchWord = event.value;
        location.href=`room.html?name=${roomNameInput}&value=${searchWord}`;
    }
};