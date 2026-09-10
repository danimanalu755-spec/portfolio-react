import React from 'react';

const Experience = () => {
  const educationData = [
    { id: 1, institution: "STMIK BUDI DARMA MEDAN", degree: "S1 Teknik Informatika", period: "2013 - 2017", desc: "Lulus dengan IPK 3.38. Aktif dalam organisasi web development club." },
    { id: 2, institution: "SMA N 1 BARUS", degree: "Jurusan IPA", period: "2009 - 2012", desc: "Mempelajari ilmu komputer masih pengenalan dasar." }
  ];

  const workData = [
    { id: 1, company: "Tech Startup Corp", role: "Frontend Developer", period: "2024 - Sekarang", desc: "Membangun antarmuka web menggunakan React.js dan Tailwind CSS, meningkatkan performa visual sebesar 20%." },
    { id: 2, company: "Digital Agency Inc", role: "Web Developer Intern", period: "2023 (6 Bulan)", desc: "Membantu slicing desain Figma menjadi komponen HTML/CSS yang responsif." }
  ];

  return (
    <section id="experience" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Seksi Pengalaman Kerja */}
      <div style={{ marginBottom: '40px' }}>
        <h2>💼 Pengalaman Kerja</h2>
        {workData.map((work) => (
          <div key={work.id} style={{ borderLeft: '2px solid #0070f3', paddingLeft: '15px', margin: '20px 0' }}>
            <h3 style={{ margin: '0 0 5px 0' }}>{work.role} - <span style={{ color: '#0070f3' }}>{work.company}</span></h3>
            <small style={{ color: '#666' }}>{work.period}</small>
            <p style={{ marginTop: '8px' }}>{work.desc}</p>
          </div>
        ))}
      </div>

      {/* Seksi Riwayat Pendidikan */}
      <div>
        <h2>🎓 Riwayat Pendidikan</h2>
        {educationData.map((edu) => (
          <div key={edu.id} style={{ borderLeft: '2px solid #10b981', paddingLeft: '15px', margin: '20px 0' }}>
            <h3 style={{ margin: '0 0 5px 0' }}>{edu.degree} - <span style={{ color: '#10b981' }}>{work.company}</span>{edu.institution}</h3>
            <small style={{ color: '#666' }}>{edu.period}</small>
            <p style={{ marginTop: '8px' }}>{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
