import passport from 'passport';import { Strategy as GithubStrategy } from 'passport-github';// @ts-ignoreimport { User } from '../models';passport.use(  'github',  new GithubStrategy(    {      clientID: process.env.GITHUB_CLIENT_ID ?? '',      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',      callbackURL: 'http://localhost:3001/auth/github/callback'    },    async (accessToken, refreshToken, profile, cb) => {      const params = {        fullname: profile?.displayName,        avatarUrl: profile?.photos?.[0].value,        isActive: 0,        username: profile?.username,        phone: '',      };      const user = await User.create(params);      console.log('user: ', user);      cb();    }  ));export { passport };