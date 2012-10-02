var vodevil = require('vodevil');

// Mockup for posts
var data = {
    posts: [{
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'
    }, {
        title: 'Lorem ipsum2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'
    }]    
};

exports.posts = function ( req, res ) {
    var posts = vodevil.intersect(data.posts, function ( post, id ) {
        return {
            id: id,
            title: post.title,
            text: post.text.substr(0, 50) + '...'
        };
    });

    res.json({
        posts: posts    
    });
};

exports.post = {
    read: function ( req, res ) {
        var output = false,
            post = {
                id: req.params.id 
            };

        if ( post.id >= 0 && post.id < data.posts.length ) {
            output = {
                post: data.posts[ post.id ]    
            };    
        }

        res.json( output );
    },

    new: function ( req, res ) {
        data.posts.push( req.body );
        res.json( req.body );
    },

    edit: function ( req, res ) {
        var output = false,
            post = {
                id: req.params.id
            };


        if ( post.id >= 0 && post.id < data.posts.length ) {
            data.posts[ post.id ] = req.body;    
            output = true;
        }

        res.json( output );
    },
    
    delete: function ( req, res ) {
        var output = false,
            post = {
                id: req.params.id
            };

        if ( post.id >= 0 && post.id < data.posts.length ) {
            data.posts.splice( post.id, 1 );    
            output = true;
        }

        res.json( output );
    }
};
