
Router.route('/api/ok', {where: 'server'})
  .get(function() { this.response.end('get request\n') })
  // .post -> @response.end 'post request\n'
  // .put  -> @response.end 'put request\n'

