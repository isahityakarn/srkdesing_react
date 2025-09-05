
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Floral Dress',
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Pink Top',
    price: '₹1,299',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Denim Skirt',
    price: '₹1,799',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Summer Shorts',
    price: '₹999',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Cute Hoodie',
    price: '₹2,199',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
  },
];



function App() {
  return (
    <div className="container-fluid p-0 bg-light min-vh-100">
      {/* Header & Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
        <div className="container">
          <a className="navbar-brand fw-bold text-danger fs-2" href="#home">SRKDesigns</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#product">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Title */}
      <div className="container mb-4">
        <h1 className="text-center text-danger mb-4">Girls Clothing Store</h1>
        {/* Product Grid */}
        <div className="row g-4 justify-content-center">
          {products.map(product => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img src={product.image} alt={product.name} className="card-img-top" style={{height: '250px', objectFit: 'cover'}} />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-danger fw-bold">{product.price}</p>
                  <button className="btn btn-danger mt-auto">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
