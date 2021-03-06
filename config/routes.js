/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

    '/institute-management': {view: 'institute-management/institute-management'},
    '/': function(req, res){
        return res.view('static/landing',{layout:'layout-landing'});
        // view: 'static/login'
    },
    '/static/create_tree':function(req, res){
      return res.view('static/create_tree',{layout:'layout-landing', step:1});
    },
    '/new_user': function(req, res){
        return res.view('static/register_user');
    },
    
    '/admin/dashboard' : { view: 'superadmin/dashboard' },
    '/super/admin/dashboard': 'AdminController.dash_view',                                                                    //  Superadmin dashboard        
    '/lead-management': {view: 'lead-management/lead-management'},                                                            //  Campaign list page   
    '/campaign/detail/view': {view: 'lead-management/lead-management-details'},                                               //  Single campaign details page
    
    'post /rest/create/new_lead' : {controller: "LeadsController", action: "create_lead_api", model: 'Leads'},                //  Create or update LEAD
    'post /create_team_tree': 'RegisterController.create_tree',                                                               //  Create new tree
                                                                 

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
