class Deal {
  constructor (client) {
    this.client = client
  }

  get (options, cb) {
    if (typeof options === 'function') {
      cb = options
      options = {}
    }
    return this.client._request({
      method: 'GET',
      path: '/deals/v1/deal/paged',
      qs: options,
      useQuerystring: true
    }, cb)
  }

  getRecentlyModified (options, cb) {
    if (typeof options === 'function') {
      cb = options
      options = {}
    }
    return this.client._request({
      method: 'GET',
      path: '/deals/v1/deal/recent/modified',
      qs: options
    }, cb)
  }

  getRecentlyCreated (options, cb) {
    if (typeof options === 'function') {
      cb = options
      options = {}
    }
    return this.client._request({
      method: 'GET',
      path: '/deals/v1/deal/recent/created',
      qs: options
    }, cb)
  }

  getById (id, cb) {
    return this.client._request({
      method: 'GET',
      path: '/deals/v1/deal/' + id
    }, cb)
  }

  deleteById (id, cb) {
    return this.client._request({
      method: 'DELETE',
      path: '/deals/v1/deal/' + id
    }, cb)
  }

  updateById (id, data, cb) {
    return this.client._request({
      method: 'PUT',
      path: '/deals/v1/deal/' + id,
      body: data
    }, cb)
  }
  
  getAssociatedDeals (vid, cb) {
    return this.client._request({
      method: 'GET',
      path: '/deals/v1/deal/associated/contact/' + vid + '/paged?limit=12&properties=station_de_livraison_pickup&properties=dealstage&properties=amount&properties=cart&properties=cart_json&properties=closedate'
    }, cb)
  }

  create (data, cb) {
    return this.client._request({
      method: 'POST',
      path: '/deals/v1/deal/',
      body: data
    }, cb)
  }

  associate (id, objectType, associatedObjectId, cb) {
    return this.client._request({
      method: 'PUT',
      path: '/deals/v1/deal/' + id + '/associations/' + objectType + '?id=' + associatedObjectId
    }, cb)
  }

  removeAssociation (id, objectType, associatedObjectId, cb) {
    return this.client._request({
      method: 'DELETE',
      path: '/deals/v1/deal/' + id + '/associations/' + objectType + '?id=' + associatedObjectId
    }, cb)
  }
}

module.exports = Deal
