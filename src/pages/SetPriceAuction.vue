<template>
  <div class="set-priceauction">
    <div class="set-priceauction-child" />
    <div class="token">
      <b class="all-items1">Fixed price</b>
    </div>
    <div class="token1">
      <b class="all-items1">Auction</b>
    </div>
    <b class="minimum-bid">Minimum bid</b>
    <div class="youll-receive-bids">You’ll receive bids on this item</div>
    <b class="starting-date">Starting Date</b>
    <b class="expiration-date">Expiration Date</b>
    <div class="eth-parent">
      <b class="eth1">ETH</b>
      <div class="down">
        <div class="down-child" />
        <img class="down-item" alt="" src="/polygon-1.svg" />
      </div>
    </div>
    <div class="text-input">
      <div class="text-input-child" />
      <div class="icon7">
        <img class="close-icon3" alt="" src="/close3.svg" />
      </div>
      <div class="content3">
        <img class="tag-icon4" alt="" src="/tag4.svg" />
        <div class="text3">
          <div class="enter-your-name3">Enter your name</div>
          <div class="first-name3">0.00</div>
        </div>
      </div>
    </div>
    <div class="button17">
      <img class="tag-icon4" alt="" src="/search7.svg" />
      <b class="button18">Mint NFT</b>
    </div>
    <div class="footer3">
      <div class="the-new-creative-container2">
        <span class="the2">
          <span class="th2">Th</span>
          <span class="e2">e</span>
        </span>
        <span class="th2">
          <b class="b6"> </b>
          <span class="new5">New</span>
        </span>
        <b class="b7"> </b>
        <span class="creative2">Creative</span>
        <b>
          <span class="span2"> </span>
          <span class="th2">Economy</span>
        </b>
      </div>
      <div class="button19">
        <img class="tag-icon4" alt="" src="/search5.svg" />
        <b class="button18">Earn now</b>
      </div>
      <div class="button21">
        <img class="tag-icon4" alt="" src="/search6.svg" />
        <b class="button18">Discover more</b>
      </div>
      <div class="footer4">
        <div class="footer-inner" />
        <div class="dividers4">
          <div class="dividers5" />
        </div>
        <div class="instagram-twitter-discord-container2">
          <p class="instagram2">Instagram</p>
          <p class="instagram2">Twitter</p>
          <p class="instagram2">Discord</p>
          <p class="instagram2">Blog</p>
        </div>
        <div class="about-community-guidelines-container2">
          <p class="instagram2">About</p>
          <p class="instagram2">Community Guidelines</p>
          <p class="instagram2">Terms of Service</p>
          <p class="instagram2">Privacy</p>
          <p class="instagram2">Careers</p>
          <p class="instagram2">Help</p>
        </div>
        <div class="openart2">© 2021 Openart</div>
      </div>
      <img class="logo-icon2" alt="" src="/logo2.svg" />
    </div>
    <div class="dropdown">
      <div class="initial">Right after listing</div>
      <div class="down1">
        <div class="down-child" />
        <img class="down-item" alt="" src="/polygon-11.svg" />
      </div>
    </div>
    <div class="dropdown1">
      <div class="initial">3 days</div>
      <div class="down1">
        <div class="down-child" />
        <img class="down-item" alt="" src="/polygon-12.svg" />
      </div>
    </div>
    <div class="header1">
      <img class="menu-icon2" alt="" src="/menu1.svg" />
      <div class="logo4">
        <div class="open-frame">
          <div class="open4"><span class="ope2">Ope</span>n</div>
        </div>
        <img class="group-icon" alt="" src="/group-2521.svg" />
      </div>
      <div class="logo5">
        <img class="open-icon2" alt="" src="/open1.svg" />
        <div class="open5">open</div>
        <img class="union-icon4" alt="" src="/union2.svg" />
        <img class="vector-124-stroke2" alt="" src="/vector-124-stroke1.svg" />
        <img class="vector-126-stroke2" alt="" src="/vector-126-stroke1.svg" />
        <img class="vector-129-stroke2" alt="" src="/vector-129-stroke1.svg" />
        <img class="vector-130-stroke2" alt="" src="/vector-130-stroke1.svg" />
        <img class="logo-child1" alt="" src="/vector-1311.svg" />
        <img class="union-icon5" alt="" src="/union3.svg" />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "SetPriceAuction",
  });
</script>
<style scoped>
  .set-priceauction-child {
    position: absolute;
    top: 107.86px;
    left: 16px;
    border-radius: var(--br-21xl);
    background-color: var(--grayscale-body);
    box-shadow: var(--smooth-shadow);
    width: 343px;
    height: 56px;
  }
  .all-items1 {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 24px;
  }
  .token {
    position: absolute;
    top: 113.43px;
    left: 22px;
    border-radius: var(--br-11xl);
    background-color: var(--grayscale-title-active);
    width: 158px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-xs) var(--padding-xl) var(--padding-5xs);
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    color: var(--grayscale-input-bg);
  }
  .token1 {
    position: absolute;
    top: 113.43px;
    left: 194px;
    border-radius: var(--br-11xl);
    background: linear-gradient(114.44deg, #0038f5, #9f03ff);
    width: 158px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-xs) var(--padding-xl) var(--padding-5xs);
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
  .minimum-bid {
    position: absolute;
    top: 194.93px;
    left: 26px;
    font-size: var(--mobile-display-small-bold-size);
    letter-spacing: 0.01em;
    line-height: 32px;
  }
  .youll-receive-bids {
    position: absolute;
    top: 230.7px;
    left: 26px;
    line-height: 22px;
    color: var(--grayscale-background);
  }
  .starting-date {
    position: absolute;
    top: 370.11px;
    left: 26px;
    letter-spacing: 0.01em;
    line-height: 24px;
    color: var(--grayscale-background);
  }
  .expiration-date {
    position: absolute;
    top: 462px;
    left: 26px;
    letter-spacing: 0.01em;
    line-height: 24px;
    color: var(--grayscale-background);
  }
  .eth1 {
    position: absolute;
    top: 0px;
    left: 0px;
    letter-spacing: 0.01em;
    line-height: 32px;
  }
  .down-child {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 24px;
    height: 24px;
  }
  .down-item {
    position: absolute;
    top: 9.66px;
    left: 6.8px;
    width: 10.39px;
    height: 7.02px;
  }
  .down {
    position: absolute;
    top: 0.34px;
    left: 46px;
    width: 24px;
    height: 24px;
  }
  .eth-parent {
    position: absolute;
    top: 283.99px;
    left: 26px;
    width: 70px;
    height: 32px;
    font-size: var(--mobile-display-small-bold-size);
  }
  .text-input-child {
    position: absolute;
    height: 98.9%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 1.1%;
    left: 0%;
    border-radius: var(--br-5xs);
    background-color: var(--grayscale-body);
    border: 1px solid var(--grayscale-background);
    box-sizing: border-box;
  }
  .close-icon3 {
    position: relative;
    width: 24px;
    height: 24px;
  }
  .icon7 {
    position: absolute;
    height: 98.25%;
    width: 22.86%;
    top: 1.43%;
    right: -3.19%;
    bottom: 0.33%;
    left: 80.34%;
    display: flex;
    flex-direction: row;
    padding: var(--padding-base);
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
  .tag-icon4 {
    position: relative;
    width: 24px;
    height: 24px;
    display: none;
  }
  .enter-your-name3 {
    position: relative;
    letter-spacing: 0.75px;
    line-height: 20px;
    font-weight: 500;
    display: none;
  }
  .first-name3 {
    position: relative;
    font-size: var(--mobile-link-medium-bold-size);
    letter-spacing: 0.01em;
    line-height: 24px;
    font-weight: 500;
    color: var(--grayscale-background);
  }
  .text3 {
    display: flex;
    flex-direction: column;
    padding: 0px var(--padding-base) 0px 0px;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-9xs);
  }
  .content3 {
    position: absolute;
    top: 16.62px;
    left: 24px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-12xs) 0px 0px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xs);
  }
  .text-input {
    position: absolute;
    top: 270px;
    left: 105px;
    border-radius: var(--br-5xs);
    width: 245px;
    height: 57px;
    font-size: var(--desktop-text-x-small-regular-size);
    color: var(--grayscale-placehoder);
  }
  .button18 {
    position: relative;
    line-height: 28px;
  }
  .button17 {
    position: absolute;
    top: 576.89px;
    left: 16px;
    border-radius: var(--br-5xs);
    background: linear-gradient(114.44deg, #0038f5, #9f03ff);
    width: 343px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-mini) var(--padding-61xl) var(--padding-smi);
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xs);
    font-size: var(--mobile-link-large-bold-size);
  }
  .th2 {
    letter-spacing: 0.01em;
  }
  .e2 {
    letter-spacing: -0.16em;
  }
  .the2 {
    font-weight: 200;
  }
  .b6 {
    font-family: var(--mobile-link-medium-bold);
  }
  .new5 {
    font-weight: 300;
  }
  .b7 {
    letter-spacing: -0.13em;
  }
  .creative2 {
    letter-spacing: 0.01em;
    font-weight: 500;
  }
  .span2 {
    letter-spacing: -0.12em;
  }
  .the-new-creative-container2 {
    position: absolute;
    height: 5.17%;
    width: 89.91%;
    top: 11.12%;
    left: 5.04%;
    font-size: 25.72px;
    line-height: 34.3px;
    text-align: center;
    display: inline-block;
  }
  .button19 {
    position: absolute;
    height: 8.43%;
    width: 91.05%;
    top: 20.65%;
    right: 4.25%;
    bottom: 70.91%;
    left: 4.7%;
    border-radius: var(--br-5xs);
    background: linear-gradient(114.44deg, #0038f5, #9f03ff);
    display: flex;
    flex-direction: row;
    padding: var(--padding-mini) var(--padding-61xl) var(--padding-smi);
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xs);
  }
  .button21 {
    position: absolute;
    height: 8.43%;
    width: 91.05%;
    top: 31.49%;
    right: 4.25%;
    bottom: 60.07%;
    left: 4.7%;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    padding: var(--padding-mini) var(--padding-61xl) var(--padding-smi);
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xs);
  }
  .footer-inner {
    position: absolute;
    height: 100%;
    width: 99.74%;
    top: 0%;
    right: 0.26%;
    bottom: 0%;
    left: 0%;
    background-color: var(--grayscale-body);
  }
  .dividers5 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--grayscale-line);
  }
  .dividers4 {
    position: absolute;
    height: 0.32%;
    width: 99.28%;
    top: 74.55%;
    right: 0.26%;
    bottom: 25.13%;
    left: 0.45%;
  }
  .instagram2 {
    margin: 0;
  }
  .instagram-twitter-discord-container2 {
    position: absolute;
    top: 8.2%;
    left: 4.69%;
    line-height: 32.5px;
  }
  .about-community-guidelines-container2 {
    position: absolute;
    top: 8.2%;
    left: 51.81%;
    line-height: 32.5px;
  }
  .openart2 {
    position: absolute;
    top: 84.53%;
    left: 4.95%;
    font-size: var(--mobile-text-small-regular-size);
    line-height: 20px;
    font-weight: 500;
    color: var(--grayscale-input-bg);
  }
  .footer4 {
    position: absolute;
    height: 46.68%;
    width: 100.27%;
    top: 53.32%;
    right: -0.27%;
    bottom: 0%;
    left: 0%;
    font-size: var(--mobile-link-medium-bold-size);
    color: var(--grayscale-background);
  }
  .logo-icon2 {
    position: absolute;
    height: 7.06%;
    width: 47.07%;
    top: 3.46%;
    right: 27.26%;
    bottom: 89.48%;
    left: 25.67%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .footer3 {
    position: absolute;
    top: 801.99px;
    left: -0.85px;
    width: 376.7px;
    height: 664.01px;
    font-size: var(--mobile-link-large-bold-size);
  }
  .initial {
    position: absolute;
    height: 47.83%;
    width: 73.24%;
    top: 28.26%;
    left: 4.61%;
    line-height: 22px;
    display: inline-block;
  }
  .down1 {
    position: absolute;
    height: 52.17%;
    width: 6.92%;
    top: 26.09%;
    right: 2.59%;
    bottom: 21.74%;
    left: 90.49%;
  }
  .dropdown {
    position: absolute;
    top: 400px;
    left: 14px;
    border-radius: var(--br-5xs);
    background-color: var(--grayscale-body);
    width: 342px;
    height: 45px;
    color: var(--grayscale-background);
  }
  .dropdown1 {
    position: absolute;
    top: 491.89px;
    left: 14px;
    border-radius: var(--br-5xs);
    background-color: var(--grayscale-body);
    width: 342px;
    height: 45px;
    color: var(--grayscale-background);
  }
  .menu-icon2 {
    position: absolute;
    height: 42.99%;
    width: 7%;
    top: 37.99%;
    right: 0%;
    bottom: 19.03%;
    left: 93%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .ope2 {
    letter-spacing: -2.1px;
  }
  .open4 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    left: 0%;
    line-height: 50.33px;
    font-weight: 300;
    display: inline-block;
  }
  .open-frame {
    position: absolute;
    height: 100%;
    width: 71.47%;
    top: 0%;
    right: 28.53%;
    bottom: 0%;
    left: 0%;
  }
  .group-icon {
    position: absolute;
    height: 45.8%;
    width: 35.96%;
    top: 24.72%;
    right: 4.06%;
    bottom: 29.48%;
    left: 59.98%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .logo4 {
    position: absolute;
    top: 7px;
    left: -1px;
    width: 141.8px;
    height: 50.72px;
    display: none;
  }
  .open-icon2 {
    position: absolute;
    height: 97.87%;
    width: 60.98%;
    top: 1.36%;
    right: 38.9%;
    bottom: 0.77%;
    left: 0.12%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    display: none;
  }
  .open5 {
    position: absolute;
    top: -33.41%;
    left: -2.15%;
    letter-spacing: -2.9px;
    line-height: 59.75px;
    font-weight: 300;
  }
  .union-icon4 {
    position: absolute;
    height: 63.99%;
    width: 9.62%;
    top: 14.81%;
    right: 0.5%;
    bottom: 21.19%;
    left: 89.88%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-124-stroke2 {
    position: absolute;
    height: 58.51%;
    width: 10.54%;
    top: 19.27%;
    right: 26.7%;
    bottom: 22.22%;
    left: 62.76%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-126-stroke2 {
    position: absolute;
    height: 52.85%;
    width: 3.81%;
    top: 25.3%;
    right: 15.42%;
    bottom: 21.85%;
    left: 80.76%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-129-stroke2 {
    position: absolute;
    height: 23.27%;
    width: 8.8%;
    top: 26.2%;
    right: 10.44%;
    bottom: 50.53%;
    left: 80.76%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .vector-130-stroke2 {
    position: absolute;
    height: 13.23%;
    width: 7.96%;
    top: 27.93%;
    right: 2.16%;
    bottom: 58.84%;
    left: 89.88%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .logo-child1 {
    position: absolute;
    height: 6.26%;
    width: 3.8%;
    top: 41.22%;
    right: 6.31%;
    bottom: 52.53%;
    left: 89.89%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    opacity: 0.2;
    mix-blend-mode: overlay;
  }
  .union-icon5 {
    position: absolute;
    height: 58.51%;
    width: 11.86%;
    top: 19.27%;
    right: 19.97%;
    bottom: 22.22%;
    left: 68.17%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
  }
  .logo5 {
    position: absolute;
    top: 15px;
    left: 0px;
    width: 140px;
    height: 37px;
    text-align: center;
    font-size: 38.41px;
    color: var(--color-white);
  }
  .header1 {
    position: absolute;
    top: 9px;
    left: 16px;
    width: 343px;
    height: 55.83px;
    font-size: 35.95px;
    color: var(--grayscale-title-active);
  }
  .set-priceauction {
    position: relative;
    background-color: var(--grayscale-title-active);
    width: 100%;
    height: 1466px;
    overflow: hidden;
    text-align: left;
    font-size: var(--mobile-link-medium-bold-size);
    color: var(--grayscale-off-white);
    font-family: var(--mobile-link-medium-bold);
  }
</style>
