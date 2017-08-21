const{ connect } = dva;
const { Form, Icon, Input, Button, Checkbox } = antd;

const FormItem = Form.FormItem;

const Routers = function ({history, app}) {
    const routes = [
        {
            path: 'login',
            getComponent (nextState, callback) {
                require.ensure([], (require) => {
                    callback(null, { component: require('routes/login/') })
                }, 'login')
            }
        }
    ];

    return (
        <Router history={history} routes={routes} />
    )
};

export default Routers;