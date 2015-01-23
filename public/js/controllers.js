'use strict';

/* Controllers */

function AppCtrl($scope, $http) {

	$scope.readMethod = "readAsDataURL";

	$scope.addPlayer = function(){
		var newPlayer = {
			name: "",
			img: "",
			pj: 0,
			pts: 0
		};

		$scope.players.push(newPlayer);
	};

	$scope.removePlayer = function(playerIndex){
		$scope.players.splice(playerIndex, 1);
	};

	$scope.onReaded = function( e, file ){
		//console.log(playerIndex);
		$scope.players[e.playerIndex].img = e.target.result;
	};

	$scope.saveData = function(){
		$http({method: 'POST', url: '/api/data', data: $scope.players}).
			success(function(data) {
				console.log('Guardado!');
			}).
			error(function() {
				alert('Error!');
			});
	};

	$http({method: 'GET', url: '/api/data'}).
		success(function(data) {
			console.log(data);
			$scope.players = data;
		}).
		error(function() {
			alert('Error!');
		});
}

function MyCtrl1($scope) {
}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
