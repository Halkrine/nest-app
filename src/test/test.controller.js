"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const common_1 = require("@nestjs/common");
const test_service_1 = require("./test.service");
let TestController = class TestController {
    constructor(testService) {
        this.testService = testService;
    }
    async getAll() {
        const allList = await this.testService.getAll();
        return Object.assign({
            data: allList,
            statusCode: 200,
            statusMsg: ' Data 조회 성공',
        });
    }
    findName(first_name, last_name) {
        return this.testService.findName(first_name, last_name);
    }
    getHello() {
        return this.testService.getHello();
    }
};
__decorate([
    common_1.Get('/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestController.prototype, "getAll", null);
__decorate([
    common_1.Get('/findName'),
    __param(0, common_1.Query('first_name')),
    __param(1, common_1.Query('last_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "findName", null);
__decorate([
    common_1.Get('/hellor'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], TestController.prototype, "getHello", null);
TestController = __decorate([
    common_1.Controller('test'),
    __metadata("design:paramtypes", [test_service_1.TestService])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=test.controller.js.map