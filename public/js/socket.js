/**
 * Created by Giggiux on 05/12/15.
 */
var socket = io.connect();


socket.on('initialData', function (data) {
    webApp.$.social.twitter = data;
    var newsTweetArr = [];
    data.forEach(function(item){
        if(webApp.info.twitterMain.indexOf('@'+item.name) != -1){
            newsTweetArr.push(item)
        }
    });
    webApp.$.news.twitter = newsTweetArr;
});

socket.on('newsTweet', function(data) {
    webApp.$.social.twitter.push(data);
    webApp.$.news.twitter.push(data)
});

socket.on('newTweet', function(data) {
    webApp.$.social.twitter.push(data)
});