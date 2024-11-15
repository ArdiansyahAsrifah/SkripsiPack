import React from 'react';
import { Chrono } from 'react-chrono';
import './Timeline.css';

const Timeline = () => {
  const items = [
    {
      title: "September 2024",
      cardTitle: "Menulis Proposal",
      cardSubtitle: "Menyusun proposal untuk skripsi",
      cardDetailedText: "Pada bulan September 2024, tahap pertama adalah menyusun proposal yang akan menjadi landasan penelitian.",
      media: {
        name: "Proposal",
        type: "image",
        source: "https://via.placeholder.com/150", // Ganti dengan gambar yang relevan
      },
    },
    {
      title: "November 2024",
      cardTitle: "Seminar Proposal (Sempro)",
      cardSubtitle: "Presentasi proposal untuk persetujuan",
      cardDetailedText: "Pada bulan November 2024, seminar proposal (sempro) akan dilaksanakan sebagai bagian dari proses pengajuan penelitian.",
      media: {
        name: "Sempro",
        type: "image",
        source: "https://via.placeholder.com/150", // Ganti dengan gambar yang relevan
      },
    },
    {
      title: "Januari 2025",
      cardTitle: "Seminar Hasil",
      cardSubtitle: "Presentasi hasil skripsi",
      cardDetailedText: "Pada bulan Januari 2025, seminar hasil dilaksanakan untuk memaparkan kemajuan dan hasil penelitian kepada penguji.",
      media: {
        name: "Seminar Hasil",
        type: "image",
        source: "https://via.placeholder.com/150", // Ganti dengan gambar yang relevan
      },
    },
  ];

  return (
    <div className="timeline-container">
      <Chrono 
        items={items} 
        mode="VERTICAL" // Bisa diubah ke "HORIZONTAL" jika ingin tampilan horizontal
      />
    </div>
  );
};

export default Timeline;
