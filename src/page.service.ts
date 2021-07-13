import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
  constructor(private readonly httpService: HttpService) {}
  async getPage(data: any) {
    console.log('Facebook link');
    const headersRequest = {
      'Content-Type': 'application/json', // afaik this one is not needed
      Authorization: `Bearer ${data.accessToken}`,
    };
    const fblink = await this.httpService
      .get(`https://graph.facebook.com/v11.0/${data.user.id}/accounts`, {
        headers: headersRequest,
      })
      .toPromise();
    console.log(fblink.data);
    // .map(events => events.json().events.data);
  }
}
