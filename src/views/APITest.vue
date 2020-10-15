<template>
  <div>
    <div class="APITest">
      <h1>
        This is an APITest Page
      </h1>
      <button @click="Test()">APITest</button>
    </div>
  </div>
</template>

<script>
import APITest from "../JS/APITest.js"

export default {
    methods:{
        Test(){
            // 1.ユーザーのSteam IDを取得
            var steam_id = APITest.getSteamId(APITest.api_key, APITest.user_name);

            // 2.ユーザーの情報を取得
            var user_data = APITest.getUserData(APITest.api_key, steam_id);
            console.log('==================================================');
            console.log('ユーザー名: ', user_data.personaname);
            console.log('プロフィールURL: ', user_data.profileurl);
            console.log('プロフィール画像: ', user_data.avatarfull);


            // 3.ユーザーの持っているゲーム情報を取得
            var user_game_list = APITest.getUserGameList(APITest.api_key, APITest.steam_id);
            console.log('==================================================');
            console.log('持っているゲーム情報');
            console.log('ゲームの数: ', user_game_list.game_count);
            user_game_list.games.forEach(function(item){
                console.log('--------------------------------------------------');
                console.log(item.name);
                var play_time = item.playtime_forever;
                console.log(Math.floor( play_time/60 ) + '時間');
            });
        }
    }
}
</script>>