import React from "react";
import "./Grey.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
function Grey(props) {
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
    <div className="app__grey">
      <div className="grey__header">
        <div className="header__time">
          <div className="time">
            <span>{Dates.currentTime()}</span>
          </div>
          <div className="battery">
            <div className="battery__global">
              <div className="battery__black" style={{ width: `${limit}%`, background: CheckstatusBattery(), }}></div>
              <span className="percentage">{limit}</span>
            </div>
          </div>
        </div>
        <div className="grey__subheader">振込完了</div>
      </div>
      <div className="grey__content">
        <div className="level__1">
          <div className="number__1">
            <div className="circle__1"> 1 </div>
            <span>振込情報入力</span>
          </div>
          <div className="triangle__">
            {" "}
            <img src="Grey/triangle.png" alt="" width={10} height={10} />
          </div>
          <div className="number__1">
            <div className="circle__1"> 2 </div>
            <span>振込情報入力</span>
          </div>
          <div className="triangle__">
            {" "}
            <img src="Grey/triangle.png" alt="" width={10} height={10} />
          </div>

          <div className="square__yellow">完 了</div>
        </div>
        <div className="level__2">
          <div className="level__2__header">
            以下の振込依頼を受け付けました。
          </div>
          <div className="level2__box">
            <span> 管理番号：</span>
            <span> 2144180332{Dates.generateRandomDateNumber()}1{Number.generateRandom7Number()}</span>
          </div>
          <div className="level2__detail">
            <div>
              <span>金融機関</span>
              <span>みんなの銀行</span>
            </div>
            <div>
              <span>支店</span>
              <span>ゴールデンゲートブリッジ支店</span>
            </div>
            <div>
              <span>依頼人名</span>
              <span>{Names.generateRandomFullNameFromJapanese()}</span>
            </div>
            <div>
              <span>预金科目</span>
              <span>普通</span>
            </div>
            <div>
              <span>口座番号</span>
              <span>{Number.generateRandom7Number()}</span>
            </div>
            <div>
              <span>受取人名</span>
              <span>ホリキリ ヤスシ</span>
            </div>
            <div>
              <span>振込金額</span>
              <span>{Number.japanesse(props.amount)} 円</span>
            </div>
            <div>
              <span>振込手数料</span>
              <span>145 円</span>
            </div>
            <div>
              <span>ポイント利用</span>
              <span>ポイントを利用しない</span>
            </div>
            <div>
              <span>振込予定日</span>
              <span>{Dates.fulljpaanes()}</span>
            </div>
          </div>
        </div>
        <div className="level__3">
          <div className="button__">
            続けて振込{" "}
            <img src="/public/Grey/right.png" alt="" width="9" height={12} />
          </div>
          <div className="button__second">
            <div className="button__1">振込トップ</div>
            <div className="button__1">楽天银行木一厶</div>
            <div className="button__1">ログアウト</div>
          </div>
        </div>
        <div className="level__4">
          <span>PR</span>
        </div>
      </div>
      <div className="grey__bottom">
        <div className="grey__border"></div>
      </div>
    </div>
  );
}

export default Grey;
