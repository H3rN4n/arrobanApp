'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
	$http({method: 'GET', url: '/api/name'}).
		success(function(data, status, headers, config) {
		$scope.name = data.name;
	}).
		error(function(data, status, headers, config) {
		$scope.name = 'Error!';
	});

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

  $scope.players = [
		{
			name: "PEPE1",
			img: "imgs/foto-elalesi.png",
			pj: 2,
			pts: 10
		},
		{
			name: "PEPE1",
			img: "imgs/foto-elalesi.png",
			pj: 2,
			pts: 7
		},
		{
			name: "PEPE1",
			img: "imgs/foto-elalesi.png",
			pj: 2,
			pts: 20
		}
	];
}

function MyCtrl1($scope) {
}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
