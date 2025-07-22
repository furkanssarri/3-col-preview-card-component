import data from "../data";

const Card = () => {
  return (
    <div className="container">
      {data &&
        data.map((car) => (
          <article key={car.id}>
            <img src={car.image} alt={car.title} width={80} />
            <h2>{car.title}</h2>
            <p>{car.description}</p>

            <a className="card-button">Learn More</a>
          </article>
        ))}
    </div>
  );
};

export default Card;
