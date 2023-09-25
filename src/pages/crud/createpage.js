import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Createpage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("creator");
  const [rating, setRating] = useState("");

  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("")

  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image)
    setPreview(URL.createObjectURL(image))
  }

  const saveProduct = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("rating", rating);
    formData.append("file", file);
    
    try {
        await axios.post('http://localhost:5000/products', formData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        });
        navigate('/dashboard')
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center font-poppins">
      <h1 className="text-2xl mt-5">NSPLASH</h1>
      <h2>Upload Your Creation</h2>
      <form className="shadow-2xl p-4" onSubmit={saveProduct}>
        <div className="shadow-xl p-4 mb-4">
          <label htmlFor="name">Title: </label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="shadow-xl p-4 mb-4">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="shadow-xl p-4 mb-4">
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="shadow-xl p-4 mb-4">
          <label htmlFor="rating">Rating: </label>
          <input
            type="text"
            placeholder="Rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div className="shadow-xl p-4 mb-4">
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.category)}
            disabled
            required
          />
        </div>

        <div className="shadow-xl p-4 mb-4">
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            onChange={loadImage}
          />
        </div>
        <div>
          <img src={file} width={200} alt="" />
        </div>


        {preview ? (
            <figure className="w-40">
                <img src={preview} alt="Preview Image" />
            </figure>
        ) : (
            ''
        )}

        <button
          type="submit"
          className="bg-dark text-white w-full p-3 hover:opacity-95"
        >
          Upload
        </button>

      </form>
    </div>
  );
};

export default Createpage;
