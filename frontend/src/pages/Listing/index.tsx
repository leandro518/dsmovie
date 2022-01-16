import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    // Evita de realizar a chamada varias vezes
    // Com o parametro no final entre colchetes, somente vai atualizar se o valor mudar
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);

            });
    }, [pageNumber]);

    //Muda o pageNumber, com isso o useEffect chama novamente o backend
    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange}/>

            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>

        </>

    );
}

export default Listing;