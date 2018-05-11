'use strict'

const config = require('config')
const ipFilter = require('ip-filter')
const pathToRegexp = require('path-to-regexp')

const blackProjects = config.get('blackList.projects')
const blackIPs = config.get('blackList.ips')
const request = require('request')

// const {httpProxy} = require('koa-http-proxy-middleware')
const httpsProxyAgent = require('https-proxy-agent')

const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
proxy.on('error', function (err, req, res) {  
  res.writeHead(500, {       
    'Content-Type': 'text/plain'  
  });  
  res.end('Something went wrong. And we are reporting a custom error message.')
})
const codeMap = {
  '-1': 'fail',
  '200': 'success',
  '401': 'token expired',
  '500': 'server error',
  '10001': 'params error'
}

const utilFn = {
  resuccess (data) {
    return {
      code: 200,
      success: true,
      message: codeMap['200'],
      data: data || null
    }
  },
  refail (message, code, data) {
    return {
      code: code || -1,
      success: false,
      message: message || codeMap[code],
      data: data || null
    }
  }
}

module.exports = class Middleware {
  static util (ctx, next) {
    ctx.set('X-Request-Id', ctx.req.id)
    ctx.util = utilFn
    return next()
  }

  static ipFilter (ctx, next) {
    if (ipFilter(ctx.ip, blackIPs, {strict: false})) {
      ctx.body = utilFn.refail('请求频率太快，已被限制访问')
      return
    }
    return next()
  }

  static mockFilter (ctx, next) {
    const pathNode = pathToRegexp('/mock/:projectId/:mockURL*').exec(ctx.path)
    if (!pathNode) ctx.throw(404)
    if (blackProjects.indexOf(pathNode[1]) !== -1) {
      ctx.body = ctx.util.refail('接口请求频率太快，已被限制访问')
      return
    }

    ctx.pathNode = {
      projectId: pathNode[1],
      mockURL: '/' + (pathNode[2] || '')
    }
    if(pathNode[1] == "a"){
      ctx.pathNode = {
        projectId: '5aaaa07c58e0d95fd34b22b4',
        mockURL: '/' + (pathNode[2] || '')
      }
    }

    return next()
  }
  
  static hRouter (ctx, next) {
    // if(ctx.path.indexOf('html5') > -1){
    //   // proxy.web(ctx.req, ctx.res, { target: 'http://www.ctrip.com' })
    //   ctx.response.redirect('http://m.ctrip.com')
    //   return
    // }
    return next()
  }
  
}
