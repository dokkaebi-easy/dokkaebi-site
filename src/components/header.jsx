import styled from "@emotion/styled";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-5  intro-text">
                <img src="img/Dockerby_logo_main.png" alt="없음" />
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span>BY</span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
