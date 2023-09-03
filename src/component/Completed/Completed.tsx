import React from "react";
import "./completed.css";
import Dates from "../../shared/dates";
import { MdQuestionMark } from "react-icons/md";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
import { BsFillAlarmFill } from "react-icons/bs";
import Left from "../../shared/icons/Left";

function Completed(props) {
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
    <div className="app__completed">
      {/* styling the header */}
      <div className="completed__header">
        <div className="completed__left">
          <div className="completed__bars">
            <div className="comp__1"></div>
            <div className="comp__2"></div>
            <div className="comp__3"></div>
            <div className="comp__4"></div>
          </div>
          <div className="softbank__">
            <span className="name__bank">SoftBank</span>
            <span className="name__bank">4G</span>
          </div>
        </div>
        <div className="completed__center">
          <div className="completed__time">{Dates.currentTime()}</div>
        </div>
        <div className="completed__right">

          <Left />
          <div className="right__batterycompleted">
            <span className="completed__level">{limit}%</span>
            <div className="completed__battery">
              <div className="battery__completed">
                <div
                  className="level__completed"
                  style={{ width: `${limit}%`, background: CheckstatusBattery(), }}
                ></div>
              </div>
              <div className="border__completed"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="completed__subheader">
        <div className="subheader__fulloptions">
          <div></div>
          <div className="subheadercompleted__title">振込完了</div>
          <div>
            <img src="/completed/cancel.png" alt="" width={76} height={18} />
          </div>
        </div>
        <div className="completed__bar"></div>
      </div>

      {/* styling the content */}
      <div className="completed__content">
        <div className="completed__date">
          <div className="date__jap">振込を正常に受け付けました。</div>
          <div className="detaill__date">
            <div className="date__left">
              <span>受付番号 :</span>
              <span>受付日時 :</span>
            </div>
            <div className="date__right">
              <span>
                {Dates.generateRandomDateNumber()}-
                {Number.generate3RandomNumber()}
              </span>
              <span>
                {Dates.lividate()} {Dates.currentTime()}
              </span>
            </div>
          </div>
        </div>

        <div className="completed__table">
          <div className="table1">
            <div className="table__grey table__centers p__13 p__10">
              振込予定日
            </div>
            <div className="dates__ table__centers p__8 p__10">
              {Dates.lividate()}
            </div>
          </div>
          <div className="table2">
            <div className="table__grey table__centers p__13">振込先口座</div>
            <div className="table2__text p__8 p__11">
              <div>
                <span className="table2__gmo">GMO</span>あおぞらネット銀行
              </div>
              <div>法人第二常業部</div>
              <div>
                <span className="before__num">普通</span>{" "}
                <span className="after__num">1565113</span>
              </div>
              <div className="gras__text">クリーンアツプ（ド</div>
            </div>
          </div>
          <div className="table3">
            <div className="table__grey table__centers p__13 p__11 ">
              振込金額
            </div>
            <div className="table3__amount table__centers p__11 p__8">
              {Number.japanesse(props.amount)}
              <span className="size16">円</span>
            </div>
          </div>
          <div className="table4">
            <div className="table__grey table__centers p__13 p__11">
              振込手数料
            </div>
            <div className="table4__text p__8 p__11">
              <div className="table4__fee">0円</div>
              ※今回の手数料は無料となります。
            </div>
          </div>
          <div className="table5">
            <div className="table__grey table__centers p__13 p__11">
              引落金額合計
            </div>
            <div className="table3__amount table__centers p__8 p__11">
              {Number.totalamount(props.amount)}
              <span className="size16">円</span>
            </div>
          </div>
          <div className="table6">
            <div className="table__grey table__centers p__13">引落口座</div>
            <div className="table6__text p__8 p__11">
              <div>日比谷支店</div>
              <div>普通</div>
              <div className="table6__amount">
                {Number.generateRandom7Number()}
              </div>
            </div>
          </div>
          <div className="table7">
            <div className="table__grey table__centers p__13">振込依頼人名</div>
            <div className="table7__text p__8 p__11">
              {Names.generateRandomFullNameFromJapanese()}
            </div>
          </div>
          <div className="table8">
            <div className="table__grey table__centers p__13 P__8  ">
              電話番号
            </div>
            <div className="table8__code p__8 p__11">
              090-{Number.generate4RandomNumber()}-
              {Number.generateRandom2Number()}**
            </div>
          </div>
        </div>
        <div className="completed__subtable">
          ※振込先金融機関によっては、 実際の取引日と異なる場合がござい ます。
        </div>
        {/* styling  the bottom */}
        <div className="completed__bottom">
          <div className="completed__title">今回の振込先を登録する</div>
          <div className="completed__cadrebtttom">
            <div className="cadrebottom__first">
              <div className="cadre__title__left">
                「振込先匕金額」を登録{" "}
                <span className="small__leftcircle">（マイパターン） </span>
                <img src="/completed/next.png" alt="" width={9} />
              </div>
              <div className="cadre__bottom__completed">
                <div className="question__bottom">
                  <div className="text__second__bottom">マイパターンとは</div>
                  <div className="question__mark">
                    <MdQuestionMark color="white" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completed;
