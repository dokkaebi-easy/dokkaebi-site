export const Navigation = ({ props }) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="/">
            Dokkaebi
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/#/beforeinstall" className="page-scroll">
                설치 및 가이드
              </a>
            </li>
            <li>
              <a href="/#/video" className="page-scroll">
                홍보 및 시연
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dokkaebi-easy/dokkaebi.git"
                className="page-scroll"
                target="_blank"
                rel="noreferrer"
              >
                깃허브
              </a>
            </li>
            <li>
              <a
                href="https://hub.docker.com/r/edh1021/dokkaebi"
                className="page-scroll"
                target="_blank"
                rel="noreferrer"
              >
                도커허브
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
