const RpcServer = require('http-jsonrpc-server');

async function waitEcho(params) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(params);
    }, 1000);
  });
}

async function USM_Auth(params) {
  const { user, password } = params
  if (user === "admin" && password === "123456") {
    return {
      login: false
    }
  }
  else {
    return {
      login: false
    }
  }
}

const rpcServer = new RpcServer({
  methods: {
    waitEcho,
    USM_Auth
  }
});

rpcServer.setMethod('USM_Auth', USM_Auth);
rpcServer.setMethod('DMR_DevList_Get', waitEcho);
rpcServer.setMethod('DMR_EVT_OnOff', waitEcho);
rpcServer.listen(50002, '127.0.0.1').then(() => {
  console.log('server is listening at http://127.0.0.1:50002/');
})