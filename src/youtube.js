const youtube = document.getElementById("youtube");

function fetchData(keyword){
  //APIkey
  fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDq5ryRKysoKd7leLLNHqb_UIgqRVNOeuc&type=video&part=snippet&q=${keyword}`)
  .then(response => response.json())
  .then(data => {
    //ユーチューブを4つ出力。
    for(let i=0; i < 4; i++){
      console.log(data.items[i].id.videoId);
      //dataの中のitemsのi番目のidの中のvideoIdを取得
      const videoID = data.items[i].id.videoId;
      //iframeをファイルのどこかに生成＝youtubeAppend
      const youtubeAppend = document.createElement('iframe');
      //取得したvideoIDをユーチューブ閲覧のURL末尾に挿入し、それを下記のsrc属性に追加する。
      youtubeAppend.src=`https://www.youtube.com/embed/${videoID}`;
      //1行目で取得したid、youtubeタグの子要素にyoutubeAppendを当てる。
      youtube.appendChild(youtubeAppend);
    }
  })
    .catch(error => {
    console.log(error);
  })
}
//クエリ文字取得
const params = decodeURI(location.search);
//paramsから検索に必要な部分だけを取得
const search = params.slice(23);
fetchData(search);