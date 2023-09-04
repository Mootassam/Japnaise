import React from "react";
import "./Brown.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import { IoIosWifi } from "react-icons/io";
import Left from "../../shared/icons/Left";
function Brown(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  const CheckstatusBattery = () => {
    let background = "";

    if (limit >= 20) {
      background = "#fdd60c";
    }

    if (limit <= 20) {
      background = "#FD3731";
    }

    if (limit >= 40) {
      background = "#000";
    }
    return background;
  };
  return (
    <div className="app__brown">
      <div className="brown__header">
        <div className="brownheader__left">
          <span className="time__brown">{Dates.currentTime()}</span>

          {/* <Left /> */}
        </div>
        <div className="brownheader__right">
          <div className="brown__data">
            <div className="brown__1"></div>
            <div className="brown__2"></div>
            <div className="brown__3"></div>
            <div className="brown__4"></div>
          </div>
          <IoIosWifi color="black" size={17} />
          <div className="brown__battery">
            <div className="cadre__battery">
              <div
                className="level__battery"
                style={{ width: `${limit}%`, background: CheckstatusBattery() }}
              ></div>
            </div>
            <div className="samll__border"></div>
          </div>
        </div>
      </div>

      <div className="brown__content">
        <div className="content__first">
          <div className="table">
            <div className="brown__table1">
              <span>金融機関</span>
            </div>
            <div className="brown__table2 ">
              <span className="gmo">GMO</span>
              <span className="text__">あおぞらネット銀行 </span>
              <span className="number">(0310)</span>
            </div>
          </div>
          <div className="table">
            <div className="brown__table1">
              <span>支店</span>
            </div>
            <div className="brown__table2">
              <span className="text__">あおぞらネット銀行 </span>
              <span className="number">(102)</span>
            </div>
          </div>
          <div className="table">
            <div className="brown__table1">
              <span>口座番号</span>
            </div>
            <div className="brown__table2 __center">
              <span className="text__">（普通） </span>
              <span className="number">1565113</span>
            </div>
          </div>
          <div className="table">
            <div className="brown__table1">
              <span>受取人名</span>
            </div>
            <div className="brown__table2">
              <span className="text__">クリーンアツプ° （ト*</span>
            </div>
          </div>
          <div className="table">
            <div className="brown__table11">
              <span>振込先口座の登</span>
              <span>録</span>
            </div>
            <div className="brown__table21 __center __p5">
              <span className="text__">振込先口座として登録する</span>
            </div>
          </div>
        </div>
        <div className="content__second">
          <div className="second__contentheader">
            <span>振込内容</span>
          </div>
          <div className="table">
            <div className="brown__table1">
              <span>受取人名</span>
            </div>
            <div className="brown__table2 __end">
              <span className="brown__amount ">
                {Number.japanesse(props.amount)}{" "}
                <span className="brown__currency">円</span>
              </span>
            </div>
          </div>
          <div className="table">
            <div className="brown__table1 __item">
              <span>振込手数料</span>
              <span>（税込）</span>
            </div>
            <div className="brown__table2 __item2 __ends">
              <div className="__end">
                <span className="brown__amount">
                  {Number.calculatefee(props.amount)}
                  <span className="brown__currency">円</span>
                </span>
              </div>
              <div className="brown__smalltable">
                <div className="smallheader">
                  <span>ポイント利用</span>
                </div>
                <div className="headers__large">
                  <span className="semi__header">利用しない</span>
                  <span className="small__header">利用可能ポイント合計</span>
                </div>
                <div className="semi__amount">
                  <span className="amount__semi">{Number.calculateFee(props.amount)}</span>
                  <span className="title__amount">ポイント</span>
                </div>
                <div className="large__cadre">
                  <div className="cadre__top">
                    <div className="large__left">
                      <div>
                        <div className="bults"></div>
                        <span className="cadre__text">楽天ポイント</span>
                      </div>
                      <div>
                        <div className="bults"></div>
                        <span className="cadre__text">楽天ポイント</span>
                      </div>
                    </div>
                    <div className="large__right">
                      <span className="cadre__amount">{Number.calculateFee(props.amount)}</span>
                      <span className="small__text">ポイント</span>
                    </div>
                  </div>
                  <div className="last__items">
                    <span className="last__amount">
                      0<span className="last__currency">円</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="brown__table1">
              <span>振込予定日</span>
            </div>
            <div className="brown__table2 __center">
              <span className="brown__date"> {Dates.lividate()}</span>
            </div>
          </div>
          <div className="table  ">
            <div className="brown__table1 __lastone">
              <span>管理番号</span>
            </div>
            <div className="brown__table2  __lastone">
              <span className="brown__accountnumber">
                {Dates.generateRandomDateNumber()}-18
                {Number.genrateRandom6Number()}
              </span>
            </div>
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
