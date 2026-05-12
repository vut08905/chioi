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
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const api_service_1 = require("./api.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
let ApiController = class ApiController {
    apiService;
    constructor(apiService) {
        this.apiService = apiService;
    }
    async getServices() {
        return this.apiService.getServices();
    }
    async getPackages() {
        return this.apiService.getPackages();
    }
    async getActiveTaskers() {
        return this.apiService.getActiveTaskers();
    }
    async getTaskerHistory(req) {
        return this.apiService.getTaskerHistory(req.user.userId);
    }
    async getAdminDashboard() {
        return this.apiService.getAdminDashboard();
    }
    async submitKyc(req, body) {
        return this.apiService.submitKyc(req.user.userId, body);
    }
    async updateTaskerStatus(req, isOnline) {
        return this.apiService.updateTaskerStatus(req.user.userId, isOnline);
    }
    async createTicket(req, body) {
        return this.apiService.createTicket(req.user.userId, body.subject, body.description);
    }
    async approveTaskerKyc(req, id, status) {
        return this.apiService.approveTaskerKyc(req.user.userId, id, status);
    }
    async createService(body) {
        return this.apiService.manageService('CREATE', body);
    }
    async updateService(id, body) {
        return this.apiService.manageService('UPDATE', body, id);
    }
    async deleteService(id) {
        return this.apiService.manageService('DELETE', {}, id);
    }
    async createPackage(body) {
        return this.apiService.managePackage('CREATE', body);
    }
    async updatePackage(id, body) {
        return this.apiService.managePackage('UPDATE', body, id);
    }
    async deletePackage(id) {
        return this.apiService.managePackage('DELETE', {}, id);
    }
    async approveWithdrawal(req, id, status) {
        return this.apiService.approveWithdrawal(req.user.userId, id, status);
    }
    async resolveTicket(req, id, status) {
        return this.apiService.resolveTicket(req.user.userId, id, status);
    }
    async getAdminUsers() {
        return this.apiService.getAdminUsers();
    }
    async getAdminOrders() {
        return this.apiService.getAdminOrders();
    }
    async adminCancelOrder(req, id) {
        return this.apiService.adminCancelOrder(req.user.userId, id);
    }
    async getAdminTickets() {
        return this.apiService.getAdminTickets();
    }
    async getAdminWithdrawals() {
        return this.apiService.getAdminWithdrawals();
    }
};
exports.ApiController = ApiController;
__decorate([
    (0, common_1.Get)('services'),
    (0, roles_decorator_1.Roles)('CUSTOMER', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách dịch vụ (Cần Token Customer/Admin)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getServices", null);
__decorate([
    (0, common_1.Get)('packages'),
    (0, roles_decorator_1.Roles)('CUSTOMER', 'ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách gói gia đình (Cần Token Customer/Admin)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getPackages", null);
__decorate([
    (0, common_1.Get)('taskers/active'),
    (0, roles_decorator_1.Roles)('CUSTOMER'),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách Tasker đang online' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getActiveTaskers", null);
__decorate([
    (0, common_1.Get)('taskers/history'),
    (0, roles_decorator_1.Roles)('TASKER'),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy lịch sử đơn hàng của Tasker (Cần Token Tasker)' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getTaskerHistory", null);
__decorate([
    (0, common_1.Get)('admin/dashboard'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Thống kê Admin Dashboard (Cần Token Admin)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getAdminDashboard", null);
__decorate([
    (0, common_1.Post)('taskers/kyc'),
    (0, roles_decorator_1.Roles)('TASKER'),
    (0, swagger_1.ApiOperation)({ summary: 'Nộp hồ sơ KYC Tasker' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "submitKyc", null);
__decorate([
    (0, common_1.Patch)('taskers/status'),
    (0, roles_decorator_1.Roles)('TASKER'),
    (0, swagger_1.ApiOperation)({ summary: 'Bật/Tắt trạng thái nhận việc Online' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)('is_online')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "updateTaskerStatus", null);
__decorate([
    (0, common_1.Post)('support/tickets'),
    (0, roles_decorator_1.Roles)('CUSTOMER', 'TASKER'),
    (0, swagger_1.ApiOperation)({ summary: 'Tạo ticket hỗ trợ/khiếu nại' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "createTicket", null);
__decorate([
    (0, common_1.Patch)('admin/taskers/:id/approve'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Duyệt hồ sơ Tasker (KYC)' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "approveTaskerKyc", null);
__decorate([
    (0, common_1.Post)('services'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Tạo dịch vụ mới' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "createService", null);
__decorate([
    (0, common_1.Put)('services/:id'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Cập nhật dịch vụ' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "updateService", null);
__decorate([
    (0, common_1.Delete)('services/:id'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Xóa dịch vụ' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "deleteService", null);
__decorate([
    (0, common_1.Post)('packages'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Tạo gói gia đình mới' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "createPackage", null);
__decorate([
    (0, common_1.Put)('packages/:id'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Cập nhật gói gia đình' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "updatePackage", null);
__decorate([
    (0, common_1.Delete)('packages/:id'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Xóa gói gia đình' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "deletePackage", null);
__decorate([
    (0, common_1.Patch)('admin/withdrawals/:id/approve'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Duyệt yêu cầu rút tiền' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "approveWithdrawal", null);
__decorate([
    (0, common_1.Patch)('admin/tickets/:id/resolve'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Giải quyết khiếu nại' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "resolveTicket", null);
__decorate([
    (0, common_1.Get)('admin/users'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách Users' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getAdminUsers", null);
__decorate([
    (0, common_1.Get)('admin/orders'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách Orders' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getAdminOrders", null);
__decorate([
    (0, common_1.Patch)('admin/orders/:id/cancel'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Admin can thiệp hủy đơn hàng (UC-AD-03)' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "adminCancelOrder", null);
__decorate([
    (0, common_1.Get)('admin/tickets'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách khiếu nại/hỗ trợ (UC-AD-07)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getAdminTickets", null);
__decorate([
    (0, common_1.Get)('admin/withdrawals'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách yêu cầu rút tiền (UC-AD-06)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "getAdminWithdrawals", null);
exports.ApiController = ApiController = __decorate([
    (0, swagger_1.ApiTags)('Data (Dịch vụ, Gói, Lịch sử)'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('api'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], ApiController);
//# sourceMappingURL=api.controller.js.map