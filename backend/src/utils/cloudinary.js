require('dotenv').config();

const cloudinary = require("cloudinary").v2;
import { IncomingForm } from "formidable";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

export function uploadImage(imageUploaded) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      imageUploaded,
      { width: 400, height: 300, crop: "fill" },
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
}

export async function getImage(formData) {
  const data = await new Promise(function (resolve, reject) {
    const form = new IncomingForm({ keepExtensions: true });
    form.parse(formData, function (err, fields, files) {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  return data.files.image;
}