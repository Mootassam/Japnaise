import React from "react";
import "./Orange.css";
import { IoIosWifi } from "react-icons/io";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";
import Left from "../../shared/icons/Left";
function Orange(props) {
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
    <div className="app__orange">
      {/* styling the orange header */}
      <div className="orange__header">
        <div className="orange__left">
          <span className="orange__time">{Dates.currentTime()}</span>

          <Left />
        </div>
        <div className="orange__right">
          <div className="oragne__data">
            <div className="orange1"></div>
            <div className="orange2"></div>
            <div className="orange3"></div>
            <div className="orange4"></div>
          </div>
          <IoIosWifi color="black" size={17} />
          <div className="orange__battery">
            <div className="large__orangebattery">
              <div
                className="orange__level"
                style={{ width: `${limit}%`, background: CheckstatusBattery() }}
              ></div>
            </div>
            <div className="border__batteryorange"></div>
          </div>
        </div>
      </div>

      {/* Styling the orange subheader */}

      <div className="orange__subheader">
        <div className="orange__back">
          <img src="/Orange/back.png" width={11} alt="" />
        </div>
        <div className="orange__confirm">
          <span>振込内容の確認</span>
        </div>
        <div className="orange__cancel">
          <span>中止</span>
        </div>
      </div>

      <div className="orange__bar">
        <img src="/Orange/bar.png" alt="" />
      </div>
      {/* Styling the orange Content */}
      <div className="orange__content">
        <div className="orange__firstline">
          <span className="orange__titles __p14 __down14">出金口座</span>
        </div>
        <div className="image__vector">
          <img src="/Orange/vector.png" alt="" />
        </div>
        <div className="orange__secondline __p14">
          <span className="orange__chinese">
            銀座&nbsp;&nbsp;&nbsp;&nbsp;支店
          </span>
          <div className="orange__text">
            <span className="orange__chinese">残高別普通</span>
            <span className="orange__code">
              {Number.generateRandom7Number()}
            </span>
          </div>
        </div>
        <div className="image__vector">
          <img src="/Orange/vector.png" alt="" />
        </div>

        <div className="orange__thirdline __p14 __p15">
          <span className="orange__titles"> 振込先口座</span>
          <span className="green">
            {" "}
            <img src="/Orange/pen.png" alt="" width="10" height={12} />
            变更
          </span>
        </div>
        <div className="image__vector">
          <img src="/Orange/vector.png" alt="" />
        </div>

        <div className="orange__fourthline __p14">
          <div>
            {" "}
            <img src="/Orange/text.png" alt="" width={84} />
          </div>

          <div>
            <span className="orange__gmo">GMO</span>{" "}
            <span className="chinese__orange">
              あおぞらネッ卜銀行 法人第二堂業部
            </span>
          </div>
          <div>
            <span className="chinese__orange">普通</span>
            <span className="chinse__orangecode"> 1565113</span>
          </div>
        </div>

        <div className="image__vector">
          <img src="/Orange/vector.png" alt="" />
        </div>
        <div className="orange__fifthline __p14">
          <div className="orange__border">
            <span>
              囗座左登録{" "}
              <img src="/Orange/plus.png" alt="" width={9} height={9} />
            </span>
          </div>
          <span className="long__text">
            ※ 次回のお取引からワンタイムパスワードの入カが不要になります。
          </span>
        </div>
        <div className="orange__sithline __p14 __p15">
          <div className="sithline__firstline">
            <span className="sithline__title">振込金額</span>
            <span className="sithline__right">
              <img src="/Orange/pen.png" alt="" width="10" height={12} /> 变更
            </span>
          </div>
          <div className="orange__background">
            <div className="background__first">
              <span>引落金額</span>
            </div>
            <div className="background__first__amout">
              <div className="orange__bigamount">
                {Number.totalamount(props.amount)}
              </div>
              <span className="orange___stlylecurrency">円</span>
            </div>
            <div className="smallbar__orange">
              <img src="/Orange/smallbar.png" alt="" />
            </div>
            <div className="after__bar">
              <div className="bar__oranges">
                <div className="second__orangetitle">振込金額</div>
                <div className="second__amount">
                  {Number.japanesse(props.amount)}{" "}
                  <label className="small__currency">円</label>
                </div>
              </div>
              <div className="bar__oranges">
                <div className="second__orangetitle">振込手数料</div>
                <div className="second__amount">
                  330 <label className="small__currency">円</label>
                </div>
              </div>
            </div>
          </div>
          <div className="orange__lastline">
            <span className="orange__chineses">振込詳細</span>
            <span className="green">
              <img src="/Orange/pen.png" alt="" width="10" height={12} /> 变更
            </span>
          </div>
        </div>
      </div>

      {/* Styling the orange Bottom */}
      <div className="orange__bottom">
        <div className="orange__updwon">
          <div className="orange__transaprent">
            <div className="transparent__content">
              <span className="transparent__1">依赖日(资金引落日）</span>
              <span className="transparent__2">
                {Dates.datetransparent()}(水)
              </span>
            </div>
            <div className="transparent__content">
              <div className="transparent__1">振达日</div>
              <span className="transparent__2">
                {Dates.datetransparent()}(水)
              </span>
            </div>
          </div>
          <div className="orange__stylebutton">
            <div className="orange__textbottom">
              <div className="orange__textbutton">本アプリで登録済みの</div>
              <div className="orange__textbutton">
                ワンタイムパスワードを自動送信し、認証を行います。
              </div>
            </div>
            <div className="orange__button">
              <span>振込</span>
            </div>
          </div>
          <div className="sub__bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Orange;
