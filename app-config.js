const NODE_ENV = process.env.NODE_ENV || 'local';
let API_URL;
switch (NODE_ENV) {
  case 'production':
    API_URL = 'https://pickyourtrail.com/api/';
    break;
  default:
    API_URL = 'https://staging.pickyourtrail.com/api/';
    break;
}

export const AppConfig = {
  api_url: API_URL,
  product: 'Learning Grow',
  shortDesc: '',
  socket_url: ''
};