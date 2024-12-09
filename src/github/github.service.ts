import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  private readonly BASE_URL = 'https://api.github.com';

  async createRepository(token: string, repoName: string) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/orgs/Dreamerz-Do/repos`,
        {
          name: repoName,
          private: true, // Make the repository private
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github+json',
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error('Error creating repository:', error.response?.data || error.message);
      throw new HttpException(
        error.response?.data || 'Failed to create repository',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
