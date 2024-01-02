import { doc, addDoc, deleteDoc, updateDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase-config";

export const useAddIngredient = () => {
  const ingredientCollectionRef = collection(db, "ingredients");

  const addIngredient = async ({
    ingredientName,
    ingredientType,
    ingredientPrice,
    ingredientWeight,
    description,
  }) => {
    try {
      await addDoc(ingredientCollectionRef, {
        ingredientName,
        ingredientType,
        ingredientPrice,
        ingredientWeight,
        description,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      // 处理添加材料时出错的情况
      console.error("Error adding ingredient: ", error);
    }
  };

  const deleteIngredient = async (ingredientId) => {
    try {
      const ingredientDocRef = doc(db, "ingredients", ingredientId);
      await deleteDoc(ingredientDocRef);
    } catch (error) {
      // 处理删除材料时出错的情况
      console.error("Error deleting ingredient: ", error);
    }
  };

  const editIngredient = async (ingredientId, updatedIngredient) => {
    try {
      const ingredientDocRef = doc(db, "ingredients", ingredientId);
      await updateDoc(ingredientDocRef, {
        ...updatedIngredient,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      // 处理编辑材料时出错的情况
      console.error("Error editing ingredient: ", error);
    }
  };

  return { addIngredient, deleteIngredient, editIngredient };
};