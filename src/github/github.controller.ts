import { Controller, Post, Body } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post('create-repo')
  async createRepo(@Body() body: { token: string; repoName: string }) {
    const { token, repoName } = body;
    return await this.githubService.createRepository(token, repoName);
  }
}
