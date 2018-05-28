let app = angular.module('myApp', []);

// app.controller("mainCtrl",function($scope) {
//     $scope.names = ["Ivana","Ana","Marija","Danilo"];
// })
// app.controller("secondCtrl",function($scope) {
//     $scope.name = "Ivana";
// })

// app.controller("mainCtrl", function($scope) {
//     $scope.db = [
//       {
//         id: "1",
//         name: "Danilo",
//         deposit: "12000",
//         cCard: "Visa"
//       },
//       {
//         id: "2",
//         name: "Danilo2",
//         deposit: "121000",
//         cCard: "Visa2"
//       }
//     ];
//     // $scope.car = "Volvo"
//
//   })
// app.controller("mainCtrl", function($scope) {
//     $scope.info = function() {
//       alert("1")
//     }
//
//   })


//APLIKACIJA
app.controller("mainCtrl", function($scope) {
    $scope.tasks = [
      {
        msg : "Kupiti hleb",
        done : false,
      },
      {
        msg : "Prosetati psa",
        done : false,
      },
      {
        msg : "Nahraniti Marlu",
        done : false,
      }
    ];
    //primili smo index iz index.html
    $scope.deleteTask = function(index) {
      $scope.tasks.splice(index,1)
    }
    $scope.addTask = function() {
      $scope.tasks.push({
        msg : $scope.newTask,
        done : false,
      })
      $scope.newTask = "";
    }

  })
