var movies = [
    {
        id: 1,
        title: 'a',
        desc: 'desc1'
    },
    {
        id: 2,
        title: 'b',
        desc: 'desc2'
    }
];

var list = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc)
    );
});

var Movie = React.createClass({

    render: function() {
        return  React.createElement('div', {},
                    React.createElement('h1', {}, 'Lista filmów'),
                    React.createElement('ul', {}, list)
                );
    },

    propTypes: {
        list: React.PropTypes.object.isRequired,
    },
})

var element = React.createElement(Movie, {key: list.id});

// var element = movies.map(function(movie) {
//     return React.createElement(item, {movies: movie.title});
// })

// var element =
//     React.createElement('div', {}, 
//         React.createElement('h1', {}, 'Lista filmów'),
//         React.createElement('ul', {}, x)
//     ); //tworzymy obiekt który w reakcie nazywa się 'ReactElement'

ReactDOM.render(element, document.getElementById('app'));