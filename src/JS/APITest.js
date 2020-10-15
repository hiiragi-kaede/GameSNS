var request = require('sync-request'); // 商用利用アプリケーションでは非推奨

var api_key = 'api_key'; // APIキーをここに
var user_name = 'user_name'; // プロフィールページから確認できます

// 1.ユーザーのSteam IDを取得
var steam_id = getSteamId(api_key, user_name);

// 2.ユーザーの情報を取得
var user_data = getUserData(api_key, steam_id);
console.log('==================================================');
console.log('ユーザー名: ', user_data.personaname);
console.log('プロフィールURL: ', user_data.profileurl);
console.log('プロフィール画像: ', user_data.avatarfull);


// 3.ユーザーの持っているゲーム情報を取得
var user_game_list = getUserGameList(api_key, steam_id);
console.log('==================================================');
console.log('持っているゲーム情報');
console.log('ゲームの数: ', user_game_list.game_count);
user_game_list.games.forEach(function(item){
    console.log('--------------------------------------------------');
    console.log(item.name);
    var play_time = item.playtime_forever;
    console.log(Math.floor( play_time/60 ) + '時間');
});


/**
 * 1.ユーザーのSteam IDを取得
 */
function getSteamId(api_key, user_name) {
    var url = 'http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/';
    var options = {
        qs: {
            key: api_key,
            vanityurl: user_name,
        }
    };

    var res = request('GET', url, options);
    var json = JSON.parse(res.getBody('utf8'));
    return json.response.steamid;
}

/**
 * 2.ユーザーの情報を取得
 */
function getUserData(api_key, steam_id) {
    var url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';
    var options = {
        qs: {
            key: api_key,
            steamids: steam_id,
        }
    };

    var res = request('GET', url, options);
    var json = JSON.parse(res.getBody('utf8'));
    return json.response.players[0];
}

/**
 * 3.ユーザーの持っているゲーム情報を取得
 */
function getUserGameList(api_key, steam_id) {
    var url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/';
    var options = {
        qs: {
            key: api_key,
            steamid: steam_id,
            format: 'json',
            include_appinfo: 1,
        }
    };

    var res = request('GET', url, options);
    var json = JSON.parse(res.getBody('utf8'));
    return json.response;
}

export default{
    getSteamId,
    getUserData,
    getUserGameList,
    api_key,
    user_name
}