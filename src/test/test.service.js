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
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_decorators_1 = require("@nestjs/typeorm/dist/common/typeorm.decorators");
const typeorm_1 = require("typeorm");
const test_entity_1 = require("../entity/test.entity");
let TestService = class TestService {
    constructor(testRepository) {
        this.testRepository = testRepository;
    }
    getAll() {
        return this.testRepository.find();
    }
    async findName(first_name, last_name) {
        const found = await this.testRepository.findOne({
            where: { first_name, last_name },
        });
        return found;
    }
    getHello() {
        return 'Hello World!';
    }
};
TestService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_decorators_1.InjectRepository(test_entity_1.TestEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map