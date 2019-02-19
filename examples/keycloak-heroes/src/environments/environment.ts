// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'keycloak-angular',
  clientId: 'keycloak-heroes'
};

export const environment = {
  production: false,
  assets: {
    dotaImages:
      'https://cdn-keycloak-angular.herokuapp.com/assets/images/dota-heroes/'
  },
  apis: { dota: 'http://localhost:3000' },
  keycloak: keycloakConfig
};
