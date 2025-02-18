import React, { useEffect, useRef, useState } from 'react';
import './LandingPage.css';

function LandingPage() {
  const elementsRef = useRef([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agreeTerms: false,
    agreePrivacy: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const whatsappTemplateMessage = "Halo Hasamitra, saya ingin bergabung dengan Tabungan New Ariska.";

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]+$/;

    if (!namePattern.test(formData.name)) {
      alert("Nama harus berupa huruf saja.");
      return;
    }

    if (!emailPattern.test(formData.email)) {
      alert("Email tidak valid.");
      return;
    }

    if (!phonePattern.test(formData.phone)) {
      alert("Nomor telepon harus berupa angka.");
      return;
    }

    if (!formData.agreeTerms || !formData.agreePrivacy) {
      alert("Anda harus menyetujui syarat dan ketentuan serta kebijakan privasi.");
      return;
    }

    const message = `Halo Hasamitra, saya ingin bergabung dengan Tabungan New Ariska.\n\nSilahkan periksa kembali data anda di bawah ini:\nNama: ${formData.name}\nEmail: ${formData.email}\nNomor Telepon: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/6281371200097?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const closeForm = () => {
    const formElement = document.querySelector('.form-popup');
    formElement.classList.add('hide');
    setTimeout(() => setShowForm(false), 300);
  };

  return (
    <div className="landing-page">
      <header className="header scroll-animate" ref={(el) =>
        elementsRef.current.push(el)}>
        <a href="https://hasamitra.com" target="_blank" rel="noopener noreferrer"
          className="clickable-area"></a>
        <img src="header-icon.png" alt="Hasamitra Logo" className="logo" />
      </header>
      <section className="title scroll-animate" ref={(el) =>
        elementsRef.current.push(el)}>
        <img src="new-ariska.png" alt="New Ariska" title="New Ariska"
          className="feature-image" />
      </section>
      <div className="content-wrapper scroll-animate" ref={(el) =>
        elementsRef.current.push(el)}>
        <div className="main-content">
          <section className="images">
            <img src="promo.png" alt="Promo" className="promo-image scroll-animate"
              ref={(el) => elementsRef.current.push(el)} />
            <img src="benefit.png" alt="Benefit"
              className="benefit-image scroll-animate" ref={(el) =>
                elementsRef.current.push(el)} />
          </section>
          <div className="content">
            <section className="tabungan scroll-animate" ref={(el) =>
              elementsRef.current.push(el)}>
              <p className="tabungan-text"> Tabungan Ariska adalah tabungan
                khusus yang penarikannya hanya dapat dilakukan setelah nasabah
                memenangkan arisan dalam masa arisan atau setelah masa arisan
                dinyatakan selesai.</p>
            </section>
            <section className="benefits scroll-animate" id="benefits" ref={(el) =>
              elementsRef.current.push(el)}>
              <h3>Keuntungan</h3>
              <ul>
                <li>Penghitungan bunga berdasarkan saldo harian.</li>
                <li>Bebas biaya administrasi bulanan.</li>
                <li>Nasabah yang memenangkan nomor arisan pada acara penarikan arisan
                  diberikan hadiah berupa uang tunai sebesar Rp 500.000,- dan
                  dikreditkan langsung ke nomor rekening pendebetan.</li>
                <li>Setiap nasabah yang memenangkan nomor arisan, secara otomatis
                  dinyatakan keluar dari kepesertaan arisan dan berhak untuk
                  menarik seluruh tabungannya.</li>
              </ul>
            </section>
            <section className="requirements scroll-animate" id="requirements"
              ref={(el) => elementsRef.current.push(el)}>
              <h3>Persyaratan</h3>
              <ul>
                <li>Memiliki tabungan Si Mitra.</li>
                <li>Mengisi dan menandatangani formulir data nasabah dan/atau
                  formulir permohonan pembukaan rekening.</li>
                <li>Melengkapi dokumen persyaratan antara lain:</li>
                <ul>
                  <li>Fotocopy kartu identitas (KTP/SIM/Paspor),</li>
                  <li>Fotocopy NPWP (jika ada),</li>
                  <li>Dokumen lainnya.</li>
                </ul>
                <li>Menandatangani kuasa pendebetan rekening.</li>
              </ul>
              <button className="register-button" onClick={() =>
                setShowForm(true)}>Raih Keuntungan</button>
            </section>
          </div>
        </div>
      </div>
      <footer className="footer scroll-animate" id="contact" ref={(el) =>
        elementsRef.current.push(el)}>
        <h3>Ada Pertanyaan?</h3>
        <p>Hubungi Mica</p>
        <a href={`https://api.whatsapp.com/send?phone=6281371200097&text=Halo%20Hasamitra%20:)`}
          target="_blank" rel="noopener noreferrer">
          <img src="mica.png" alt="Mica" className="contact" />
        </a>
        <img src="footer-image.png" alt="Footer" className="footer-image" />
      </footer>

      {showForm && (
        <div className="form-popup">
          <form onSubmit={handleSubmit}>
            <h2>Masukkan Data Diri Anda</h2>
            <label>
              Nama
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="ex. John Doe"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ex. email@example.com"
                required
              />
            </label>
            <label>
              No. Telepon (Whatsapp)
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="ex. 081234567890"
                required
              />
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                required
              />
              Saya menyetujui <a href="https://hasamitra.com/syarat-ketentuan" 
              target="_blank" rel="noopener noreferrer">Syarat dan Ketentuan</a>.
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreePrivacy"
                checked={formData.agreePrivacy}
                onChange={handleInputChange}
                required
              />
              Saya menyetujui <a href="https://hasamitra.com/kebijakan-privasi" 
              target="_blank" rel="noopener noreferrer">Kebijakan Privasi</a>.
            </label>
            <button type="submit">Daftar Sekarang</button>
            <button type="button" onClick={closeForm}>
              <i className="fas fa-times"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LandingPage; 