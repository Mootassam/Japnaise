import React from "react";
import "./Brown.css";
function Brown(props) {
  return (
    <div className="app__brown">
      <div className="brown__header"></div>

      <div className="brown__content">
        <div className="content__first">
          <div className="table">
            <div className="brown__table1"></div>
            <div className="brown__table2"></div>
          </div>
          <div className="table">
            <div className="brown__table1"></div>
            <div className="brown__table2"></div>
          </div>
          <div className="table">
            <div className="brown__table1"></div>
            <div className="brown__table2"></div>
          </div>
          <div className="table">
            <div className="brown__table1"></div>
            <div className="brown__table2"></div>
          </div>

          <div className="table">
            <div className="brown__table11"></div>
            <div className="brown__table21"></div>
          </div>
        </div>
        <div className="content__second">
          <div className="second__contentheader">
            <span>振込内容</span>
          </div>
          <div className="table">
            <div className="brown__table1"></div>
            <div className="brown__table2"></div>
          </div>
          <div className="table">
            <div className="brown__table1 __item"></div>
            <div className="brown__table2 __item2"></div>
          </div>
          <div className="table">
            <div className="brown__table1"></div>
            <div className="brown__table2"></div>
          </div>
          <div className="table">
            <div className="brown__table1"></div>
            <div className="brown__table2"></div>
          </div>
        </div>
        <div className="content__third">
          <div className="second__contentheader">
            <span>出金口座</span>
          </div>
          <div className="table">
            <div className="brown__table1"></div>
            <div className="brown__table2"></div>
          </div>
        </div>
      </div>
      <div className="brown__bottom">
        <div className="brownlevel__1">
          <div className="semi__white"></div>
          <div className="brown__search">
            <div>
              <span className="first__span">あ</span>
              <span className="second__span">あ</span>
            </div>
            <div className="search__bar">
              <img src="/Brown/lock.png" alt="" width={11} />
              <span className="search__text">sfes.rakuten-bank.co.jp</span>
            </div>
            <div>
              <img src="/Brown/refresh.png" alt="" width={16} />
            </div>
          </div>
          <div className="semit__whites"></div>
        </div>
        <div className="brownlevel__2">
          <img src="/Brown/prec.png" alt="" width={13} />
          <img src="/Brown/next.png" alt="" width={11} />
          <img src="/Brown/download.png" alt="" width={21} />
          <img src="/Brown/read.png" alt="" width={26} />
          <img src="/Brown/copy.png" alt="" width={25} />
        </div>
        <div className="brownlevel__3"></div>
      </div>
    </div>
  );
}

export default Brown;
