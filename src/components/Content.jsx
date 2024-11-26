import movies from "../movies";

export function Content() {
  return (
    <>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Nuestra colección de películas</h1>
              <p className="lead text-muted">
                Explora una variedad de géneros y emocionantes historias.
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {movies.map((movie) => (
                <div className="col" key={movie.id}>
                  <div className="card shadow-sm">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="bd-placeholder-img card-img-top"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h3 className="card-title">{movie.title}</h3>
                      <p className="card-text">{movie.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
