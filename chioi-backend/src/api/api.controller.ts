import { Controller, Get, Post, Patch, Put, Delete, Body, UseGuards, Request, Param, ParseIntPipe } from '@nestjs/common';
import { ApiService } from './api.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('Data (Dịch vụ, Gói, Lịch sử)')
@ApiBearerAuth()
@Controller('api')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('services')
  @Roles('CUSTOMER', 'ADMIN') // Tasker doesn't typically need this, but we can allow
  @ApiOperation({ summary: 'Lấy danh sách dịch vụ (Cần Token Customer/Admin)' })
  async getServices() {
    return this.apiService.getServices();
  }

  @Get('packages')
  @Roles('CUSTOMER', 'ADMIN')
  @ApiOperation({ summary: 'Lấy danh sách gói gia đình (Cần Token Customer/Admin)' })
  async getPackages() {
    return this.apiService.getPackages();
  }

  @Get('taskers/active')
  @Roles('CUSTOMER')
  @ApiOperation({ summary: 'Lấy danh sách Tasker đang online' })
  async getActiveTaskers() {
    return this.apiService.getActiveTaskers();
  }

  @Get('taskers/history')
  @Roles('TASKER')
  @ApiOperation({ summary: 'Lấy lịch sử đơn hàng của Tasker (Cần Token Tasker)' })
  async getTaskerHistory(@Request() req) {
    // req.user is set by JwtAuthGuard
    return this.apiService.getTaskerHistory(req.user.userId);
  }

  @Get('admin/dashboard')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Thống kê Admin Dashboard (Cần Token Admin)' })
  async getAdminDashboard() {
    return this.apiService.getAdminDashboard();
  }

  // --- Tasker APIs ---
  @Post('taskers/kyc')
  @Roles('TASKER')
  @ApiOperation({ summary: 'Nộp hồ sơ KYC Tasker' })
  async submitKyc(@Request() req, @Body() body: any) {
    return this.apiService.submitKyc(req.user.userId, body);
  }

  @Patch('taskers/status')
  @Roles('TASKER')
  @ApiOperation({ summary: 'Bật/Tắt trạng thái nhận việc Online' })
  async updateTaskerStatus(@Request() req, @Body('is_online') isOnline: boolean) {
    return this.apiService.updateTaskerStatus(req.user.userId, isOnline);
  }

  // --- Support APIs ---
  @Post('support/tickets')
  @Roles('CUSTOMER', 'TASKER')
  @ApiOperation({ summary: 'Tạo ticket hỗ trợ/khiếu nại' })
  async createTicket(@Request() req, @Body() body: any) {
    return this.apiService.createTicket(req.user.userId, body.subject, body.description);
  }

  // --- Admin APIs ---
  @Patch('admin/taskers/:id/approve')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Duyệt hồ sơ Tasker (KYC)' })
  async approveTaskerKyc(@Request() req, @Param('id', ParseIntPipe) id: number, @Body('status') status: string) {
    return this.apiService.approveTaskerKyc(req.user.userId, id, status);
  }

  @Post('services')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Tạo dịch vụ mới' })
  async createService(@Body() body: any) {
    return this.apiService.manageService('CREATE', body);
  }

  @Put('services/:id')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Cập nhật dịch vụ' })
  async updateService(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.apiService.manageService('UPDATE', body, id);
  }

  @Delete('services/:id')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Xóa dịch vụ' })
  async deleteService(@Param('id', ParseIntPipe) id: number) {
    return this.apiService.manageService('DELETE', {}, id);
  }

  @Post('packages')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Tạo gói gia đình mới' })
  async createPackage(@Body() body: any) {
    return this.apiService.managePackage('CREATE', body);
  }

  @Put('packages/:id')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Cập nhật gói gia đình' })
  async updatePackage(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.apiService.managePackage('UPDATE', body, id);
  }

  @Delete('packages/:id')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Xóa gói gia đình' })
  async deletePackage(@Param('id', ParseIntPipe) id: number) {
    return this.apiService.managePackage('DELETE', {}, id);
  }

  @Patch('admin/withdrawals/:id/approve')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Duyệt yêu cầu rút tiền' })
  async approveWithdrawal(@Request() req, @Param('id', ParseIntPipe) id: number, @Body('status') status: string) {
    return this.apiService.approveWithdrawal(req.user.userId, id, status);
  }

  @Patch('admin/tickets/:id/resolve')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Giải quyết khiếu nại' })
  async resolveTicket(@Request() req, @Param('id', ParseIntPipe) id: number, @Body('status') status: string) {
    return this.apiService.resolveTicket(req.user.userId, id, status);
  }

  @Get('admin/users')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Lấy danh sách Users' })
  async getAdminUsers() {
    return this.apiService.getAdminUsers();
  }

  @Get('admin/orders')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Lấy danh sách Orders' })
  async getAdminOrders() {
    return this.apiService.getAdminOrders();
  }

  @Patch('admin/orders/:id/cancel')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Admin can thiệp hủy đơn hàng (UC-AD-03)' })
  async adminCancelOrder(@Request() req, @Param('id', ParseIntPipe) id: number) {
    return this.apiService.adminCancelOrder(req.user.userId, id);
  }

  @Get('admin/tickets')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Lấy danh sách khiếu nại/hỗ trợ (UC-AD-07)' })
  async getAdminTickets() {
    return this.apiService.getAdminTickets();
  }

  @Get('admin/withdrawals')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Lấy danh sách yêu cầu rút tiền (UC-AD-06)' })
  async getAdminWithdrawals() {
    return this.apiService.getAdminWithdrawals();
  }
}
