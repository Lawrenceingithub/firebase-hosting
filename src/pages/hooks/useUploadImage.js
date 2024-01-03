import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../config/firebase-config";

export const useUploadImage = () => {
  const [imageURL, setImageURL] = useState(null);

  const handleImageUpload = async (file) => {
    try {
      const storageRef = ref(db, "images/" + file.name);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setImageURL(downloadURL);
      console.log("Image uploaded successfully!");
      // 可以在这里执行其他操作，例如将图片URL保存到数据库中的记录中
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageEdit = async (file, currentURL) => {
    try {
      const storageRef = ref(db, "images/" + file.name);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setImageURL(downloadURL);
      console.log("Image edited and uploaded successfully!");
      // 可以在这里执行其他操作，例如更新数据库中的记录等
      // 如果需要删除之前的图片，可以使用 deleteObject 函数删除存储桶中的文件
      // const previousImageRef = ref(db, "images/previousImage.jpg");
      // deleteObject(previousImageRef);
    } catch (error) {
      console.error("Error editing and uploading image:", error);
    }
  };

  return { imageURL, handleImageUpload, handleImageEdit };
};