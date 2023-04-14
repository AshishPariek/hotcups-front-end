import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="w3l-error-9">
        <div className="error-page">
          <div className="wrapper-full">
            <div className="main-content">
              <h2>Don't be Over Smart</h2>
              <h4>You have to Login First or go to Home Page...</h4>
              <p>
                You can either return to the previous page, visit our homepage
                or contact our support team.
              </p>
              <div className="buttons">
                <button
                  onClick={() => navigate("/")}
                  className="btn brk-btn-bg brk-btn"
                >
                  Go to Homepage
                </button>
              </div>
            </div>
            <div className="bottom-header">
              <div className="copyrights text-center">
                <p>
                  © 2019 Pug Error Page. All rights reserved | Design by{" "}
                  <a href="http://w3layouts.com/" target="_blank">
                    W3layouts
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
