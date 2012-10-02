exports.template = function ( req, res ) {
    var template = {
        dir: req.params.dir,
        filename: req.params.filename
    };    

    res.render( 'partials/' + template.dir + '/' + template.filename );
};
