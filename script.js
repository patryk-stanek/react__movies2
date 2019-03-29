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


var MovieTitle = React.createClass({
    render: function() {
        return  React.createElement('h2', {}, this.props.movie.title)
    },

    propTypes: {
        movies: React.PropTypes.object.isRequired,
    }
});

var MovieDesc = React.createClass({
    render: function() {
        return  React.createElement('p', {}, this.props.movie.desc)
    },

    propTypes: {
        movies: React.PropTypes.object.isRequired,
    }
});

var Movie = React.createClass({
    render: function() {
        return  React.createElement('li', {key: this.props.movie.id},
                    React.createElement(MovieTitle, {title: this.props.movie.title}),
                    React.createElement(MovieDesc, {desc: this.props.movie.desc})
                )
    }
});

var MovieList = React.createClass({
    render: function() {
        return  React.createElement('ul', {key: this.props.movies.map}, Movie)
    }
});

// var list = movies.map(function(movie) {
//     return  React.createElement('ul', {},
//                 React.createElement(Movie, {movies: movie},
//                 React.createElement(MovieTitle, {movies: movie}),
//                 React.createElement(MovieDesc, {movies: movie}))
//     );
// });


var x = React.createElement('div', {}, MovieList);
console.log(x);

ReactDOM.render(x, document.getElementById('app'));