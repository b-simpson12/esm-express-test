import './pre-start'; // Must be the first import
import logger from 'jet-logger';

import EnvVars from '@src/constants/EnvVars';
import server from './server';

// **** Run **** //

const SERVER_START_MSG = ('Express server started on port: ' + 
  EnvVars.Port.toString());

server.listen(EnvVars.Port, () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,node/no-unsupported-features/es-syntax
  import('lodash-es').then(({lowerCase}) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    console.log(`test import`, lowerCase('test'));
  });
  logger.info(SERVER_START_MSG);
});
