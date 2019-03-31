var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        poster: '1.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o lwie',
        poster: '2.jpg'
    },
    {
        id: 3,
        title: 'Pingwiny z Madagaskaru',
        desc: 'Film o pingwinach',
        poster: '3.jpg'
    },
    {
        id: 4,
        title: 'Chłopaki z Ferajny',
        desc: 'Film o chłopakach z ferajny',
        poster: '4.jpg'
    }
];


var MovieTitle = React.createClass({
    render: function() {
        return (
            React.createElement('h2', {}, this.props.movie.title)
        );
    }
});

var MovieDesc = React.createClass({
    render: function() {
        return (
            React.createElement('p', {}, this.props.movie.desc)
        );
    }
});

var Movie = React.createClass({
    render: function() {
        return (
            React.createElement('li', {key: this.props.movie.id},
                React.createElement(MovieTitle, {movie: this.props.movie}),
                React.createElement(MovieDesc, {movie: this.props.movie})
            )
        );
    }
});

var MovieList = movies.map(function(movie) {
    return (
        React.createElement(Movie, {key: movie.id, movie: movie})
    )
});


var element = React.createElement('ul', {}, MovieList);

ReactDOM.render(element, document.getElementById('app'));