import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <img src="header-icon.png" alt="Hasamitra Logo" className="logo" />  
      </header>
      <section className="title">
      </section>
        <img src="new-ariska.png" alt="New Ariska" className="feature-image" />
      <div className="content-wrapper">
        <div className="main-content">
          <section className="images">
            <img src="promo.png" alt="Promo" className="promo-image" />
            <img src="benefit.png" alt="Benefit" className="benefit-image" />
          </section>
          <div className="content">
            <section className="tabungan">
              <p> Tabungan Ariska adalah tabungan khusus yang penarikannya hanya 
                dapat dilakukan setelah nasabah memenangkan arisan dalam masa arisan 
                atau setelah masa arisan dinyatakan selesai.</p>
            </section>
            <section className="benefits" id="benefits">
              <h3>Keuntungan</h3>
              <ul>
                <li>Penghitungan bunga berdasarkan saldo harian</li>
                <li>Bebas biaya administrasi bulanan</li>
                <li>Nasabah yang memenangkan nomor arisan pada acara penarikan arisan
                     diberikan hadiah berupa uang tunai sebesar Rp 500.000,- dan 
                     dikreditkan langsung ke nomor rekening pendebetan</li>
                <li>Setiap nasabah yang memenangkan nomor arisan, secara otomatis 
                    dinyatakan keluar dari kepesertaan arisan dan berhak untuk
                     menarik seluruh tabungannya</li>
              </ul>
            </section>
            <section className="requirements" id="requirements">
              <h3>Persyaratan</h3>
              <ul>
                <li>Memiliki tabungan Si Mitra</li>
                <li>Mengisi dan menandatangani formulir data nasabah dan/atau 
                    formulir permohonan pembukaan rekening</li>
                <li>Melengkapi dokumen persyaratan antara lain:</li>
                <ul>
                  <li>Fotocopy kartu identitas (KTP/SIM/Paspor)</li>
                  <li>Fotocopy NPWP (jika ada)</li>
                  <li>Dokumen lainnya</li>
                </ul>
                <li>Menandatangani kuasa pendebetan rekening</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <footer className="footer" id="contact">
        <h3>Ada Pertanyaan?</h3>
        <p>Hubungi Mica</p>
        <img src="mica.png" alt="Mica" className="contact" />
        <img src="footer-image.png" alt="Footer" className="footer-image" />
      </footer>
    </div>
  );
}

export default LandingPage; 