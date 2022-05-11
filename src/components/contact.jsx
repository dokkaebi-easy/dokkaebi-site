export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-9">
            <div className="row">
              <div className="section-title">
                <h2>CONTACT US</h2>
                <p>
                  dockerby를 활용하는 방법에 대해서는 설치 및 가이드에 작성된
                  공식문서를 참고해주세요.
                </p>
                <p>
                  그 밖의 해당 솔루션을 사용하며 발생되는 문의사항이나 개선사항,
                  오류사항에 대해서는 아래 Email로 연락해주세요.
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-github"></i> GitHub
                  </span>
                  {props.data ? props.data.git : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2020 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
