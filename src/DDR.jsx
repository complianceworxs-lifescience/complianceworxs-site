/* ========================================
   DDR PHOTO PAGE (EXACT SCREENSHOT MATCH)
   ======================================== */

.ddr-photo-page {
  background: #fff;
}

/* HERO WITH PHOTO BACKGROUND */
.ddr-photo-hero {
  position: relative;
  min-height: 500px;
  background: 
    linear-gradient(to right, rgba(44, 74, 94, 0.7), rgba(44, 74, 94, 0.5)),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="500"><rect fill="%232c4a5e" width="1920" height="500"/></svg>');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.ddr-photo-hero-overlay {
  width: 100%;
  z-index: 2;
}

.ddr-photo-hero-content {
  max-width: 550px;
  padding: 80px 24px 80px 80px;
  color: #fff;
}

.ddr-photo-hero h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
  color: #fff;
}

.ddr-photo-hero p {
  font-size: 1.15rem;
  line-height: 1.6;
  opacity: 0.95;
  margin: 0;
}

/* GRAY SEPARATOR */
.ddr-photo-separator {
  background: #E9EFF3;
  padding: 24px;
  text-align: center;
}

.ddr-photo-separator p {
  margin: 0;
  font-size: 1rem;
  color: #4A5D73;
  font-weight: 500;
}

/* AUTHORITY SECTION */
.ddr-photo-authority {
  position: relative;
  background: 
    linear-gradient(to bottom, rgba(44, 74, 94, 0.85), rgba(61, 90, 110, 0.85)),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="600"><rect fill="%233d5a6e" width="1920" height="600"/></svg>');
  background-size: cover;
  background-position: center;
  padding: 100px 24px;
}

.ddr-photo-authority-overlay {
  width: 100%;
}

.ddr-photo-authority-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}

.ddr-photo-authority h2 {
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 24px;
  color: #fff;
}

.ddr-photo-authority p {
  font-size: 1.15rem;
  line-height: 1.7;
  opacity: 0.95;
  margin-bottom: 40px;
}

.ddr-photo-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.ddr-photo-btn-teal {
  display: inline-block;
  padding: 16px 32px;
  background: #00C9A7;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.ddr-photo-btn-teal:hover {
  background: #00B396;
  transform: translateY(-2px);
}

.ddr-photo-btn-outline {
  display: inline-block;
  padding: 16px 32px;
  background: transparent;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.ddr-photo-btn-outline:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.8);
}

/* ENGINE SECTION WITH CARDS */
.ddr-photo-engine {
  padding: 80px 24px;
  background: 
    linear-gradient(to bottom, rgba(44, 74, 94, 0.95), rgba(61, 90, 110, 0.95)),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="800"><rect fill="%233d5a6e" width="1920" height="800"/></svg>');
  background-size: cover;
  background-position: center;
}

.ddr-photo-engine-container {
  max-width: 1100px;
  margin: 0 auto;
  background: rgba(233, 239, 243, 0.95);
  border-radius: 16px;
  padding: 0;
  overflow: hidden;
}

.ddr-photo-engine-header {
  padding: 28px 40px;
  background: rgba(233, 239, 243, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.ddr-photo-engine-header h3 {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1B2A4E;
}

.ddr-photo-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(0, 0, 0, 0.08);
  padding: 32px;
}

.ddr-photo-card {
  padding: 28px 24px;
  background: #fff;
  transition: all 0.2s ease;
}

.ddr-photo-card:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
}

.ddr-photo-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1B2A4E;
  margin-bottom: 10px;
}

.ddr-photo-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4A5D73;
  margin: 0;
}

.ddr-photo-engine-cta {
  padding: 32px 40px;
  text-align: center;
  background: rgba(233, 239, 243, 1);
}

/* FINAL CTA */
.ddr-photo-final {
  padding: 120px 24px;
  background: #f8f9fa;
}

.ddr-photo-final-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.ddr-photo-final h2 {
  font-size: 2.75rem;
  font-weight: 700;
  color: #1B2A4E;
  margin-bottom: 20px;
  line-height: 1.2;
}

.ddr-photo-final p {
  font-size: 1.2rem;
  color: #4A5D73;
  margin-bottom: 48px;
}

.ddr-photo-btn-dark {
  display: inline-block;
  padding: 20px 48px;
  background: #1B2A4E;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.ddr-photo-btn-dark:hover {
  background: #0f1a30;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 968px) {
  .ddr-photo-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .ddr-photo-hero {
    min-height: 400px;
  }

  .ddr-photo-hero-content {
    padding: 60px 24px;
    max-width: 100%;
  }

  .ddr-photo-hero h1 {
    font-size: 2.25rem;
  }

  .ddr-photo-authority {
    padding: 60px 24px;
  }

  .ddr-photo-authority h2 {
    font-size: 2rem;
  }

  .ddr-photo-cards {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .ddr-photo-buttons {
    flex-direction: column;
  }

  .ddr-photo-btn-teal,
  .ddr-photo-btn-outline {
    width: 100%;
  }

  .ddr-photo-final h2 {
    font-size: 2rem;
  }

  .ddr-photo-engine {
    padding: 60px 24px;
  }

  .ddr-photo-engine-header {
    padding: 20px 24px;
  }

  .ddr-photo-cards {
    padding: 24px;
  }
}
