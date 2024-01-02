import { addDoc, collection, serverTimestamp } from "firebase/firestore";
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
    await addDoc(ingredientCollectionRef, {

      ingredientName,
      ingredientType,
      ingredientPrice,
      ingredientWeight,
      description,
      createdAt: serverTimestamp(),
      
    });
  };
  return { addIngredient };
};
