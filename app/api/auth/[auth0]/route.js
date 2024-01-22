import { handleAuth, handleLogin  } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    login: handleLogin({
        authorizationParams: {
            // audience: process.env.AUTH0_AUDIENCE,
            // scope: 'openid profile email read:shows',
            // redirect_uri: 'https://2nd-next-app-for-custom-domains-git-deploy-test-marybethhunter.vercel.app/api/auth/callback'
        },
        returnTo: '/profile'
    })
});
