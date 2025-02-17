import React from "react";
import { CardList } from "../components/CardList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = "93ba3f1";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    searchMovies = (str, type = "all") => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    };

    render() {
        const { movies, loading } = this.state;
        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <CardList movies={movies} />}
            </main>
        );
    }
}

export { Main };
