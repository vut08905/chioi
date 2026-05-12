import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(phone: string, pass: string): Promise<any> {
    const user = await this.prisma.users.findUnique({ where: { phone } });
    if (user && await bcrypt.compare(pass, user.password_hash)) {
      const { password_hash, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { phone: user.phone, sub: user.user_id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async register(data: any) {
    const existingUser = await this.prisma.users.findUnique({ where: { phone: data.phone } });
    if (existingUser) {
      throw new BadRequestException('Phone number already exists');
    }

    const saltOrRounds = 10;
    const password_hash = await bcrypt.hash(data.password, saltOrRounds);

    const user = await this.prisma.users.create({
      data: {
        phone: data.phone,
        password_hash,
        full_name: data.full_name,
        role: data.role,
        status: 'ACTIVE',
      },
    });

    if (data.role === 'CUSTOMER') {
      await this.prisma.customers.create({
        data: { customer_id: user.user_id },
      });
    } else if (data.role === 'TASKER') {
      await this.prisma.taskers.create({
        data: { tasker_id: user.user_id },
      });
    } else if (data.role === 'ADMIN') {
      await this.prisma.admins.create({
        data: { admin_id: user.user_id, access_level: 'SUPPORT' },
      });
    }

    // Auto login after register
    return this.login(user);
  }

  async requestPasswordReset(phone: string) {
    const user = await this.prisma.users.findUnique({ where: { phone } });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    // Mock OTP logic
    return {
      message: 'OTP sent to phone number',
      mock_otp: '123456'
    };
  }

  async resetPassword(data: any) {
    const user = await this.prisma.users.findUnique({ where: { phone: data.phone } });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    // In real app, check OTP here.
    if (data.otp !== '123456') {
      throw new BadRequestException('Invalid OTP');
    }

    const saltOrRounds = 10;
    const password_hash = await bcrypt.hash(data.new_password, saltOrRounds);

    await this.prisma.users.update({
      where: { phone: data.phone },
      data: { password_hash },
    });

    return { message: 'Password reset successfully' };
  }
}
