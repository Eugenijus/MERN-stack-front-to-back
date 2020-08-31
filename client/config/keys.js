import { DEV_GITHUB_API } from './keys_dev';
import { PROD_GITHUB_API } from './keys_prod';

if(process.env.NODE_ENV === 'production') {
  module.exports = PROD_GITHUB_API;
} else {
  module.exports = DEV_GITHUB_API;
};
