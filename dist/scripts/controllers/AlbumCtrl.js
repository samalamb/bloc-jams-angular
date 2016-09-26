(function(){
    function AlbumCtrl(Fixtures, SongPlayer){
        this.albumData = Fixtures.getAlbum();
        this.songs = [];
        this.songPlayer = SongPlayer;
    
        for(i = 0; i < this.albumData.songs.length; i++){
            this.songs.push(this.albumData.songs[i]);
        }
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();