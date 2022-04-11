import Image from "next/image";
import React, { useState } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import LRComponent from "./../components/LR/LRComponent";

export default function LR4() {
  const [imgVisible, setImgVisible] = useState(true);

  return (
    <MainLayout title="Laboratory work 4" onSmallNavClick={setImgVisible}>
      <div className="container">
        <main className="main">
          <div className="wrapper">
            <h1>Лабораторная работа №4</h1>
            <br />
            <h3>Проектирование лексического анализатора</h3>
            <LRComponent />
          </div>
          <div>
            <h2>Интегрированный конечный автомат</h2>
            {imgVisible && (
              <Image
                // className="img"
                src="/IKA.svg"
                width={500}
                height={525}
                alt="IKA"
              />
            )}
          </div>
        </main>
        <style jsx>{`
          .main {
            display: flex;
            justify-content: space-between;
          }
          .wrapper {
            display: flex;
            flex-direction: column;
            max-width: 50%;
            margin: 0 2rem 2rem 0;
          }
          .img {
            positon: absolute;
            z-index: -1;
            // position: static;
            // z-index: 1;
          }
          @media screen and (max-width: 1100px) {
            .main {
              flex-direction: column;
            }
            .wrapper {
              max-width: none;
            }
          }
        `}</style>
      </div>
    </MainLayout>
  );
}
