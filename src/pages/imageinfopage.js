import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ImageInfoPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("creator");
  const [date, setDate] = useState("");

  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      axios.get(`http://localhost:5000/products/${id}`).then((res) => {
        console.log(res);
        let data = res.data;
        setTitle(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setDate(data.createdAt);
        setPreview(data.url);
      });
    }
  }, []);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  const formattedDate = formatDate(date);

  const handleDownload = () => {
    fetch(preview)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'image.jpg'); // Nama file saat diunduh
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }


  return (
    <div className="shadow-2xl p-3 m-8">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h2 className="text-lg font-bold">{title} | {category}</h2>
          <p className="text-sm text-gray">{description}</p>
          <p>Published on {formattedDate}</p>
        </div>
        <div>
            <button className="uppercase bg-blue p-3 rounded-md text-white" onClick={handleDownload}>Download: ${price}</button>
        </div>
      </div>
      <div>
        <img src={preview} alt="Gambar" className="w-full" />
      </div>
    </div>
  );
};

export default ImageInfoPage;
