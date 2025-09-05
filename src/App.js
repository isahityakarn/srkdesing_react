
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
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="SRKDesigns Logo" style={{height: '40px', marginRight: '10px'}} />
            <span className="fw-bold text-danger fs-2">SRKDesigns</span>
          </a>
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

      {/* Hero Section */}
      <section className="hero-section text-white py-5" style={{background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)'}}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Welcome to SRKDesigns</h1>
          <p className="lead mb-4">Discover the latest trends in girls' fashion with our colorful collection</p>
          <button className="btn btn-light btn-lg px-4 py-2 fw-bold">Shop Now</button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="text-danger fw-bold mb-4">About SRKDesigns</h2>
              <p className="lead text-muted mb-3">
                At SRKDesigns, we believe that fashion is more than just clothing—it's about expressing personality, 
                building confidence, and creating memories that last a lifetime.
              </p>
              <p className="mb-3">
                Founded with a passion for creativity and quality, SRKDesigns specializes in designing beautiful, 
                comfortable, and trendy clothing exclusively for girls. Our collection features vibrant colors, 
                unique patterns, and premium fabrics that make every outfit special.
              </p>
              <p className="mb-4">
                We understand that every girl is unique, and our designs reflect that diversity. From playful dresses 
                to stylish tops and cozy hoodies, each piece is crafted with love and attention to detail.
              </p>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="text-center p-3 rounded" style={{background: 'linear-gradient(135deg, #ff9a9e, #fecfef)'}}>
                    <h4 className="text-white fw-bold">Quality</h4>
                    <p className="text-white small">Premium fabrics & craftsmanship</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center p-3 rounded" style={{background: 'linear-gradient(135deg, #a8edea, #fed6e3)'}}>
                    <h4 className="text-white fw-bold">Creativity</h4>
                    <p className="text-white small">Unique designs & patterns</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center p-3 rounded" style={{background: 'linear-gradient(135deg, #d299c2, #fef9d7)'}}>
                    <h4 className="text-white fw-bold">Comfort</h4>
                    <p className="text-white small">Soft, breathable materials</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" 
                  alt="Fashion Design" 
                  className="img-fluid rounded shadow-lg mb-4"
                  style={{maxHeight: '400px', objectFit: 'cover'}}
                />
                <div className="row g-3">
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <h5 className="text-danger">1000+</h5>
                      <p className="text-muted small">Happy Customers</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <h5 className="text-danger">500+</h5>
                      <p className="text-muted small">Unique Designs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <div className="container mb-4">
        <h2 className="text-center text-danger mb-4">Featured Products</h2>
        {/* Product Grid */}
        <div className="row g-4 justify-content-center">
          {products.map(product => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div className="card h-100 shadow-sm border-0" style={{borderRadius: '15px', overflow: 'hidden'}}>
                <img src={product.image} alt={product.name} className="card-img-top" style={{height: '250px', objectFit: 'cover'}} />
                <div className="card-body d-flex flex-column align-items-center" style={{background: 'linear-gradient(to bottom, #ffffff, #fce4ec)'}}>
                  <h5 className="card-title text-dark">{product.name}</h5>
                  <p className="card-text text-danger fw-bold fs-5">{product.price}</p>
                  <button className="btn btn-danger mt-auto rounded-pill px-4">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="cta-section text-white py-5" style={{background: 'linear-gradient(135deg, #ffd93d, #ff6b6b, #ff8e53)'}}>
        <div className="container text-center">
          <h2 className="mb-3">Ready to Style Your Little One?</h2>
          <p className="lead mb-4">Explore our vibrant collection and find the perfect outfit</p>
          <button className="btn btn-light btn-lg px-4 py-2 fw-bold">Browse Collection</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-top mt-5 py-4">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="d-flex align-items-center mb-3 mb-md-0">
            <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="SRKDesigns Logo" style={{height: '40px', marginRight: '12px'}} />
            <span className="fw-bold text-danger fs-5">SRKDesigns</span>
          </div>
          <div className="text-muted small">© {new Date().getFullYear()} SRKDesigns. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
