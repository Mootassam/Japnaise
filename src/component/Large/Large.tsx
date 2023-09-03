import React from "react";
import "./Large.css";
import Number from "../../shared/Number";
import Names from "../../shared/Names";
import Dates from "../../shared/dates";
function Large(props) {
  return (
    <div className="app__large">
      <div className="header__large"></div>
      <div className="large__content">
        <div className="large__first">
          <div className="first__header">
            <div className="large__firstligne">
              <div className="border__rose"></div>
              <div className="large__title">振込先口座</div>
            </div>
            <div className="large__ligne"></div>
          </div>
          <div className="first__content">
            <div className="__ligne">
              <div className="first__element first__color">
                <span className="chinese__tabletext">金融機関</span>
              </div>
              <div className="second__element second__fristcolor">
                GMO
                <span className="second__gmo">あおぞらネット銀行</span>
              </div>
            </div>
            <div className="__ligne">
              <div className="first__element background first__secondcolor">
                <span className="chinese__tabletext">支店</span>
              </div>
              <div className="second__element second__thirdcolor">
                法人第二常業部
              </div>
            </div>
            <div className="__ligne">
              <div className="first__element first__color">
                <span className="chinese__tabletext">科目</span>
              </div>
              <div className="second__element second__fristcolor">普通</div>
            </div>
            <div className="__ligne">
              <div className="first__element first__secondcolor">
                <span className="chinese__tabletext">囗座番号</span>
              </div>
              <div className="second__element __number second__thirdcolor">
                1565113
              </div>
            </div>
            <div className="__ligne">
              <div className="first__element __last__item">
                <span className="chinese__tabletext">受取人</span>
              </div>
              <div className="second__element __last__item">
                <img src="/Large/tex1.png" alt="" width={112} />
              </div>
            </div>
          </div>
        </div>

        {/* styling the second large */}

        <div className="large__second">
          <div className="second__header">
            <div className="__second__">
              <div className="border__rose"></div>
              <div className="large__title">振込先口座</div>
            </div>
            <div className="large__ligne"></div>

            <div className="subheader__large">
              <span>
                振込先口座 を登録される場合は「振込先登録」ボタンを押し{" "}
              </span>
              <span>てください。</span>
              <span>振込を続ける場合は「次の振込へ」ボタンを押してくださ </span>
              <span>い。</span>
            </div>

            <div className="first__content">
              <div className="__ligne">
                <div className="first__element first__color">
                  <span className="chinese__tabletext">振込指定日</span>
                </div>
                <div className="second__element second__fristcolor">
                  <span className=" __amount__large">{Dates.fulljpaanesedate()}</span>
                </div>
              </div>
              <div className="__ligne">
                <div className="first__element first__secondcolor">
                  <span className="chinese__tabletext">振込金額</span>
                </div>
                <div className="second__element __amount__large second__thirdcolor">
                  {Number.japanesse(props.amount)}円
                </div>
              </div>
              <div className="__ligne">
                <div className="first__element">
                  <span className="chinese__tabletext first__color">
                    手数料
                  </span>
                </div>
                <div className="second__element __amount__large">330円</div>
              </div>
              <div className="__ligne">
                <div className="first__element first__secondcolor">
                  <span className="chinese__tabletext ">合計金額</span>
                </div>
                <div className="second__element __number __amount__large second__thirdcolor ">
                {Number.totalamount(props.amount) }円
                </div>
              </div>
              <div className="__ligne">
                <div className="first__element __last__item">
                  <span className="chinese__tabletext">振込依頼人</span>
                </div>
                <div className="second__element __last__item">
         {Names.generateRandomFullNameFromJapanese()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Large;
