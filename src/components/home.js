import MovieImg from '../assets/Image/movie_black2.jpg';

function Home(){

    return (
        <div>
            <div className="container h-100">
                <div className="row justify-content-center align-items-center">
                    <div className="col-10 text-center">
                        <h1 className="display-4">Welcome to the Movie Finder App</h1>
                        <p>Here you can see Popular, Higest Rated or search for movies</p>
                        <img className="rounded movie_img m-3" src={MovieImg} width="500" height="500" alt="MovieIconImage"/>
                    </div>
                </div>
            </div>
        </div>
      );
}


      
export default Home;
