import Toast from "../components/Toast";

const handleImageUpload = async (e, setUploading, setUrl) => {
  const env = import.meta.env.VITE_CLOUDINARY_ENV;
  const file = e.target.files[0];
  if (!file) return;

  try {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "portfolio-build");
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${env}/image/upload`;
    const response = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.secure_url) {
      setUrl(data.secure_url);
      Toast(true, "Uploaded successfully");
    }
  } catch (error) {
    Toast(false, error.message);
  } finally {
    setUploading(false);
  }
};

export default handleImageUpload;
