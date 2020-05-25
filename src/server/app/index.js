import reactSsr from '../middlewares/react-ssr';
import Koa from 'koa2';
import koaStatic from 'koa-static';
import { nodeServerPort } from '../../share/pro-config';

const port = nodeServerPort || process.env.PORT;
const app = new Koa();

app.use(koaStatic('./dist/static'))

app.use(reactSsr);

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})