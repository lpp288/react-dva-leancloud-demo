import dva from 'dva';
import './index.css';

import createLoading from 'dva-loading';		//自动处理loading状态

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));
app.model(require("./models/users"));
app.model(require("./models/pic"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');




