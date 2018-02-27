# -*- coding: utf-8 -*-
from odoo import http

# class MlabRevslider(http.Controller):
#     @http.route('/mlab_revslider/mlab_revslider/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/mlab_revslider/mlab_revslider/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('mlab_revslider.listing', {
#             'root': '/mlab_revslider/mlab_revslider',
#             'objects': http.request.env['mlab_revslider.mlab_revslider'].search([]),
#         })

#     @http.route('/mlab_revslider/mlab_revslider/objects/<model("mlab_revslider.mlab_revslider"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('mlab_revslider.object', {
#             'object': obj
#         })