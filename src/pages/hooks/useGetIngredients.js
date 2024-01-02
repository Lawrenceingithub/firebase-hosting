import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";

export const useGetIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsCollectionRef = collection(db, "ingredients");

  const getIngredients = async () => {
    let unsubscribe;
    try {
      const queryIngredients = query(
        ingredientsCollectionRef,
        orderBy("ingredientType"),
        orderBy("createdAt")
      );

      unsubscribe = onSnapshot(queryIngredients, (snapshot) => {
        let docs = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
        });
 

        setIngredients(docs);
      });
    } catch (error) {
      console.log(error);
    }
    return () => unsubscribe();
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return { ingredients};
};
