import { useState } from "react";
import { useAddIngredient } from "../hooks/useAddIngredient";
import { useGetIngredients } from "../hooks/useGetIngredients";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const IngredientTracker = () => {
  const { addIngredient, deleteIngredient, editIngredient } = useAddIngredient();
  const { ingredients } = useGetIngredients();

  const [description, setDescription] = useState("");
  const [ingredientPrice, setIngredientPrice] = useState(0);
  const [ingredientWeight, setIngredientWeight] = useState(0);
  const [ingredientType, setIngredientType] = useState("");
  const [ingredientName, setIngredientName] = useState("");

  const [editingIngredientId, setEditingIngredientId] = useState(null);
  const [updatedIngredientName, setUpdatedIngredientName] = useState("");
  const [updatedIngredientType, setUpdatedIngredientType] = useState("");
  const [updatedIngredientPrice, setUpdatedIngredientPrice] = useState(0);
  const [updatedIngredientWeight, setUpdatedIngredientWeight] = useState(0);
  const [updatedDescription, setUpdatedDescription] = useState("");

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
    // 清空表單字段
    setIngredientName("");
    setIngredientType("");
    setIngredientPrice(0);
    setIngredientWeight(0);
    setDescription("");
  };

  const handleDeleteIngredient = (ingredientId) => {
    deleteIngredient(ingredientId);
  };

  const handleEditIngredient = (ingredientId) => {
    setEditingIngredientId(ingredientId);
    const ingredient = ingredients.find((ingredient) => ingredient.id === ingredientId);
    setUpdatedIngredientName(ingredient.ingredientName);
    setUpdatedIngredientType(ingredient.ingredientType);
    setUpdatedIngredientPrice(ingredient.ingredientPrice);
    setUpdatedIngredientWeight(ingredient.ingredientWeight);
    setUpdatedDescription(ingredient.description);
  };

  const handleUpdateIngredient = () => {
    editIngredient(editingIngredientId, {
      ingredientName: updatedIngredientName,
      ingredientType: updatedIngredientType,
      ingredientPrice: updatedIngredientPrice,
      ingredientWeight: updatedIngredientWeight,
      description: updatedDescription,
    });
    setEditingIngredientId(null);
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
              value={ingredientType}
              onChange={(e) => setIngredientType(e.target.value)}
            />
            <label>材料名稱：</label>
            <input
              type="text"
              placeholder="名稱"
              required
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
            />
            <label>材料價錢：</label>
            <input
              type="number"
              placeholder="材料價錢"
              required
              value={ingredientPrice}
              onChange={(e) => setIngredientPrice(e.target.value)}
            />
            <label>材料重量：</label>
            <input
              type="number"
              placeholder="材料重量"
              required
              value={ingredientWeight}
              onChange={(e) => setIngredientWeight(e.target.value)}
            />
            <label>購買地點：</label>
            <input
              type="text"
              placeholder="購買地點"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">添加材料</button>
          </form>
        </div>
      </div>
      <div className="ingredients">
        <h3>材料</h3>
        <ul>
          {ingredients.map((ingredient) => {
            const {
              id,
              description,
              ingredientName,
              ingredientPrice,
              ingredientType,
              ingredientWeight,
            } = ingredient;

            if (id === editingIngredientId) {
              return (
                <li key={id}>
                  <ul>
                    <label>材料類型：</label>
                    <input
                      type="text"
                      placeholder="類型"
                      required
                      value={updatedIngredientType}
                      onChange={(e) => setUpdatedIngredientType(e.target.value)}
                    />
                    <label>材料名稱：</label>
                    <input
                      type="text"
                      placeholder="名稱"
                      required
                      value={updatedIngredientName}
                      onChange={(e) => setUpdatedIngredientName(e.target.value)}
                    />
                    <label>材料價錢：</label>
                    <input
                      type="number"
                      placeholder="材料價錢"
                      required
                      value={updatedIngredientPrice}
                      onChange={(e) => setUpdatedIngredientPrice(e.target.value)}
                    />
                    <label>材料重量：</label>
                    <input
                      type="number"
                      placeholder="材料重量"
                      required
                      value={updatedIngredientWeight}
                      onChange={(e) => setUpdatedIngredientWeight(e.target.value)}
                    />
                    <label>購買地點：</label>
                    <input
                      type="text"
                      placeholder="購買地點"
                      required
                      value={updatedDescription}
                      onChange={(e) => setUpdatedDescription(e.target.value)}
                    />

                    <button onClick={handleUpdateIngredient}>更新</button>
                  </ul>
                </li>
              );
            }

            return (
              <li key={id}>
                <ul>
                  材料類型：{ingredientType}
                  {"     "}
                  材料名稱：<b>{ingredientName}</b>
                  {"     "}
                  材料價錢：${ingredientPrice}
                  {"     "}
                  材料重量:{ingredientWeight}
                  {"     "}
                  購買地點:{description}
                  {"     "}
                  <button onClick={() => handleDeleteIngredient(id)}>刪除</button>
                  <button onClick={() => handleEditIngredient(id)}>編輯</button>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="ingredient-return">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          返回
        </button>
      </div>
    </>
  );
};