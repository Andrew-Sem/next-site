import React, { useState } from "react";
import MyBtn from "../UI/MyBtn/MyBtn";
import MyInput from "./../UI/MyInput/MyInput";

const LRComponent = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  const analysis = () => {
    setResult([]);
    const regLetter = /[a-z]/;
    const regNumber = /[0-9]/;
    let i = 0;
    let currentWord = "";

    function S() {
      console.log("Вызвалась S");
      currentWord = "";
      while (value[i] === " " || value[i] === ".") i++;
      if (i === value.length) return;
      if (value[i].match(regLetter)) A();
      if (i === value.length) return;
      if (value[i].match(regNumber)) D();
    }

    function A() {
      console.log("Вызвалась A");
      currentWord += value[i];
      i++;
      if (!value[i]) return S();
      while (value[i].match(regNumber)) {
        currentWord += value[i];
        i++;
        if (!value[i]) return S();
      }
      if (value[i].match(regLetter)) B();
      S();
    }

    function B() {
      console.log("Вызвалась B");

      currentWord += value[i];
      i++;
      const newLex = {
        lexeme: currentWord,
        lexClass: "Идентификатор",
        id: Math.random(),
      };
      setResult((result) => [...result, newLex]);
      S();
    }

    function D() {
      console.log("Вызвалась D");
      console.log(value[i]);
      currentWord += value[i];
      i++;
      if (!value[i]) {
        const newLex = {
          lexeme: currentWord,
          lexClass: "Десятичная константа",
          id: Math.random(),
        };
        setResult((result) => [...result, newLex]);
        return S();
      }
      console.log("losos");
      while (value[i].match(regNumber)) {
        currentWord += value[i];
        i++;
        if (!value[i]) break;
      }
      if (value[i] === ".") return F();
      const newLex = {
        lexeme: currentWord,
        lexClass: "Десятичная константа",
        id: Math.random(),
      };
      setResult((result) => [...result, newLex]);
      console.log(i);
      S();
    }

    function F() {
      console.log("Вызвалась F");
      currentWord += value[i];
      i++;
      if (!value[i]) return S();
      if (!value[i].match(regNumber)) return S();
      while (value[i].match(regNumber)) {
        currentWord += value[i];
        i++;
        if (!value[i]) break;
      }
      const newLex = {
        lexeme: currentWord,
        lexClass: "Вещественная константа",
        id: Math.random(),
      };
      setResult((result) => [...result, newLex]);
      S();
    }

    S();
  };

  return (
    <div>
      <div className="form-wrapper">
        <p>Введите входную цепочку</p>
        <div className="form-inner">
          <MyInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Цепочка..."
          />
          <MyBtn onClick={analysis}>Выполнить анализ</MyBtn>
        </div>
      </div>
      {result.length ? (
        <div className="result">
          <h3>Итог анализа:</h3>
          <br />
          <ul>
            {result.map((item) => (
              <li key={item.id}>
                <p>Класс: {item.lexClass}</p>
                <p>Лексема: {item.lexeme}</p>
                <br />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="result">
          <h3>Здесь появятся результаты анализа</h3>
        </div>
      )}
      <style jsx>{`
        .form-wrapper {
          margin-top: 3rem;
        }
        .form-inner {
          display: flex;
          flex-direction: column;
          justify-content: start;
        }
        .result {
          background: var(--color-header-bg);
          border-radius: 1rem;
          padding: 1.5rem;
          margin-top: 2rem;
        }
        ul,
        li {
          list-style: none;
        }
      `}</style>
    </div>
  );
};

export default LRComponent;
