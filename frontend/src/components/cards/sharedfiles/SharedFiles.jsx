import React from "react";
import "./sharedfiles.css";

const files = [
  {
    id: 1,
    title: "apple-smart-watch.png",
    author: "Antony",
    time: "Just Now",
    image:
      "https://prium.github.io/falcon/v3.24.0/assets/img/products/5-thumb.png",
  },
  {
    id: 2,
    title: "iphone.jpg",
    author: "Antony",
    time: "Yesterday at 1:30 PM",
    image:
      "https://prium.github.io/falcon/v3.24.0/assets/img/products/3-thumb.png",
  },
  {
    id: 3,
    title: "Falcon v1.8.2",
    author: "Jane",
    time: "27 Sep at 10:30 AM",
    image: "https://prium.github.io/falcon/v3.24.0/assets/img/icons/zip.png",
  },
  {
    id: 4,
    title: "iMac.jpg",
    author: "Rowen",
    time: "23 Sep",
    image:
      "https://prium.github.io/falcon/v3.24.0/assets/img/products/2-thumb.png",
  },
  {
    id: 5,
    title: "functions.php",
    author: "John",
    time: "1 Oct at 4:30 PM",
    image: "https://prium.github.io/falcon/v3.24.0/assets/img/icons/docs.png",
  },
];

export default function SharedFiles() {
  return (
    <div className="shared-files-card">
      <div className="card-header">
        <h3>Shared Files</h3>
        <a href="#">View All</a>
      </div>

      <div className="file-list">
        {files.map((file) => (
          <div key={file.id} className="file-row">
            <div className="file-left">
              <img src={file.image} alt={file.title} />
              <div className="file-info">
                <div className="file-title">{file.title}</div>
                <div className="file-meta">
                  {file.author} · {file.time}
                </div>
              </div>
            </div>

            <div className="file-actions">
              <button className="action-btn download">
                <img
                  src="https://prium.github.io/falcon/v3.24.0/assets/img/icons/cloud-download.svg"
                  alt="Download"
                />
                <span className="tooltip">Download</span>
              </button>
              <button className="action-btn edit">
                <img
                  src="	https://prium.github.io/falcon/v3.24.0/assets/img/icons/edit-alt.svg"
                  alt="Edit"
                />
                <span className="tooltip">Edit</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
