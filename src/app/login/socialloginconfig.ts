import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider
  } from 'angularx-social-login';
  
  export function getAuthServiceConfigs(): AuthServiceConfig {
    let config = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("1047779623958-vsduc090mhpq0uqkhvgd92kvsmc72715.apps.googleusercontent.com")
      }
    ]);
  
    return config;
  }