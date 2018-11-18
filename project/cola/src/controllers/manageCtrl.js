define(['language'], function(i18n) {
    var manageCtrl = ['$scope', '$state',
        function($scope, $state) {
            $scope.i18n = i18n;

            $scope.accordionMenu = [{
                name: i18n.main_photo,
                active: true,
                click: function (index) {
                    dealActive(index);
                    $state.go('manage.photo');
                }
            }, {
                name: i18n.main_history,
                active: false,
                click: function (index) {
                    dealActive(index);
                    $state.go('manage.history');
                }
            }];

            function dealActive(index) {
                angular.forEach($scope.accordionMenu, function (item, key) {
                    if (index === key) {
                        item.active = true;
                    } else {
                        item.active = false;
                    }
                });
            }
        }
    ];
    return manageCtrl;
});