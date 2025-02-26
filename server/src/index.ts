import app from './app';
import { config } from './config/config';
import { ConnectDB } from './data/myDb';

const PORT = config.PORT;
const HOST = config.HOST;

ConnectDB();

app.listen(PORT, HOST, () => {
  console.log(`Lisa bailando http://${HOST}:${PORT}`);
});
