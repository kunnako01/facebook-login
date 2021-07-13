import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.APP_ID || '194416942616139',
      clientSecret:
        process.env.APP_SECRET || '552a400cf8df6b5af40412ba80ccf95e',
      callbackURL: 'https://92ef1fcd9c3a.ngrok.io/facebook/redirect',
      scope: 'email,pages_manage_ads',
      display: 'popup',
      enableProof: true,
      profileFields: ['emails', 'name', 'birthday'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void,
  ): Promise<any> {
    console.log(profile);
    const { name, emails, id } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      id: id,
    };
    const payload = {
      user,
      accessToken,
      refreshToken,
    };

    done(null, payload);
  }
}
