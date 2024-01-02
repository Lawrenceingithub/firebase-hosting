import { useState } from "react";
import { useAddIngredient } from "../hooks/useAddIngredient";
import { useGetIngredients } from "../hooks/useGetIngredients";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Ingredient = () => {
  const { addIngredient } = useAddIngredient();
  const { ingredients } = useGetIngredients();

  const [description, setDescription] = useState("");
  const [ingredientPrice, setIngredientPrice] = useState(0);
  const [ingredientWeight, setIngredientWeight] = useState(0);
  const [ingredientType, setIngredientType] = useState("");
  const [ingredientName, setIngredientName] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    addIngredient({
        ingredientName,
        ingredientType,
        ingredientPrice,
        ingredientWeight,
        description,
    });
  };

  return (
    <>
      <div className="ingredientpage">
        <h1>材料輸入頁</h1>
        <div className="container">
          <form className="add-ingredients" onSubmit={onSubmit}>
            <label>材料類型：</label>
            <input
              type="text"
              placeholder="類型"
              required
              onChange={(e) => setIngredientType(e.target.value)}
            />
            <label>材料名稱：</label>
            <input
              type="text"
              placeholder="名稱"
              required
              onChange={(e) => setIngredientName(e.target.value)}
            />
            <label>材料價錢：</label>
            <input
              type="number"
              placeholder="材料價錢"
              required
              onChange={(e) => setIngredientPrice(e.target.value)}
            />
            <label>材料重量：</label>
            <input
              type="number"
              placeholder="材料重量"
              required
              onChange={(e) => setIngredientWeight(e.target.value)} // 修正函数名称
            />
            <label>購買地點：</label>
            <input
              type="text"
              placeholder="購買地點"
              required
              onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">添加材料</button>
          </form>
        </div>

        <button
          className="return-button"
          onClick={() => {
            navigate("/");
          }}
        >
          返回
        </button>
      </div>
      <div className="ingredients">
        <h3>材料</h3>
        <ul>
          {ingredients.map((Ingredient) => {
            const {
              description,
              ingredientName,
              ingredientPrice,
              ingredientType,
              ingredientWeight,
            } = Ingredient;

            return (
              <li>
                <ul>
                材料名稱：{ingredientName}{"     "}
                材料類型：{ingredientType}{"     "}
                材料價錢：${ingredientPrice}{"     "}
                材料重量:{ingredientWeight}{"     "}
                購買地點:{description}{"     "}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
