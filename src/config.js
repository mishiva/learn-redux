const rootPath = process.env.NODE_ENV == 'prod' ? 'http://test.com' : '//127.0.0.1:3000'

const CONFIG = {
  apiUrl: `${rootPath}/api/v1`
}

export default CONFIG;