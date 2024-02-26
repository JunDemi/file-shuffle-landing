import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>파일셔플 | 홈</title>
      </Helmet>
      <section className="메인-배경">
        <div className="메인-인덱스">
          <h1>Driver Booster 11 Free</h1>
          <h2>
            No.1 Free 1-click utility for driver management. Trusted by 280
            million users for over 10 years.
          </h2>
          <div className="메인-체크">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              1-click to auto scan, repair, and update all outdated drivers on a
              schedule.
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              6,500,000+ Driver Database keeps your hardware always up to date.
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Fix crashes, and sound/connection/Bluetooth issues for a smoother
              gaming experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
