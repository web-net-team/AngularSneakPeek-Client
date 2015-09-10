///<reference path="../../typings/angular2/angular2.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var navbar_1 = require('../navbar/navbar');
var board_1 = require('../board/board');
var KanbanApp = (function () {
    function KanbanApp() {
    }
    KanbanApp = __decorate([
        angular2_1.Component({
            selector: 'kanban-app'
        }),
        angular2_1.View({
            styles: ["\n    navbar { \n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      height: 50px;\n    }\n    board {\n      position: fixed;\n      top: 50px;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n  "],
            template: "<div>\n    <navbar></navbar>\n    <board></board>\n  </div>",
            directives: [navbar_1.NavBar, board_1.Board]
        }), 
        __metadata('design:paramtypes', [])
    ], KanbanApp);
    return KanbanApp;
})();
exports.KanbanApp = KanbanApp;
//# sourceMappingURL=app.js.map