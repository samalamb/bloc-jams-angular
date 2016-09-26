(function(){
    function AlbumCtrl($scope){
        this.albumData = angular.copy(albumPicasso);
        $scope.albumData = angular.copy(albumPicasso);
        this.songs = [];
    
        for(i = 0; i < this.albumData.songs.length; i++){
            this.songs.push(this.albumData.songs[i]);
        }
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();