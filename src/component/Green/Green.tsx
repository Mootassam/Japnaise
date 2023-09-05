import React from "react";
import "./Green.css";
import Number from "../../shared/Number";
import Dates from "../../shared/dates";
import Names from "../../shared/Names";
function Green(props) {
  return (
    <div className="app__green">
      <div className="green__header">
        <div></div>
        <div className="text__header">振り込み</div>
        <div></div>
      </div>
      <div className="green__content">
        <div className="content__circle">
          <div className="circle__content">
            <img src="/green/logo.png" alt="" width="43" />
          </div>
        </div>

        <div className="green__bigtitle">
          <h1>クリーンアツプ（ド</h1>
        </div>

        <div className="green__amount">
          <h1>{Number.japanesse(props.amount)}</h1>
          <span className="symbole">円</span>
        </div>

        <div className="green__description">
          <div className="description__145">
            <span>振込手数料</span>
            <span>（消費税含七）</span>
            <span>：{Number.calculatefee(props.amount)} 円</span>
          </div>
          <div className="description__button">
            <span>受付済</span>
          </div>
          <div className="grenn__smalldescription">振込指定日</div>
          <div className="green__dardescription">
            <span>{Dates.formatDateToJapanese()}</span>
            {/* <span>（水曜日）</span> */}
          </div>
          <img src="/green/bar.png" alt="" />
          <div className="green__blue">
            <span>詳細を閉じる</span>
            <img src="/green/up.png" alt="" width={20} height={10} />
          </div>
        </div>
        <div>
          <div className="green__detaill">
            <div className="details">
              <span className="first__detail">振込先金融機関名</span>
              <span className="second__detail"> あおぞらネット銀行</span>
            </div>
            <div className="details">
              <span className="first__detail">振込先支店名</span>
              <span className="second__detail">法人第二堂業部</span>
            </div>
            <div className="details">
              <span className="first__detail">预金科目 囗座番号</span>
              <span className="second__detail">
                普通 {Number.generateRandom7Number()}
              </span>
            </div>
            <div className="details">
              <span className="first__detail">振込受付日</span>
              <span className="second__detail">
                {Dates.formatDateToJapanese()}
              </span>
            </div>
            <div className="last">
              <span className="first__detail">依頼人名</span>
              <span className="second__detail">
                {Names.generateRandomFullNameFromJapanese()}
              </span>
            </div>
            <div className="bar__detail">
              <img src="/green/bar.png" alt="" />
            </div>
            <div>
              <span className="first__detail">受付番号</span>
              <span className="second__detail">
                {Dates.generateRandomDateNumber()}011
                {Number.generateRandom4Number()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Green;
