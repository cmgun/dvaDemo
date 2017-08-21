const { message } = antd;
const createLoading = dva-loading;
const { browserHistory } = dva.router;

// 1. Initialize
const app = dva({
    ...createLoading({
        effects: true,
    }),
    history: browserHistory,
    onError (error) {
        message.error(error.message)
    },
})

// 2. Model
app.model(require('./models/app'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')