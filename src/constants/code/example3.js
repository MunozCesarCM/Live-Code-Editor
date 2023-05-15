export const codeHTML =
  `<svg id="svg_building" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240 240" style="enable-background:new 0 0 240 240;" xml:space="preserve">
<style type="text/css">
  .shadowMatOpacity{animation: nightSkyAnim 12s infinite linear;}
  .shadowMat{fill:#AAC0CD; mix-blend-mode: multiply; animation: shadowFade 12s infinite;}
  .starMat1{fill:#FDF4EB;}
  .starMat2{fill:#AAC0CD;}
  .starMat3{fill:#FE877F;}

  .frontWallMat{fill:#FDF4EB; animation: frontWallAnim 12s infinite linear;}
  .frontRoofMat{fill:#FE877F; animation: frontRoofAnim 12s infinite linear;}
  .frontWindowMat{fill:#2D78AF; animation: frontWindowAnim 12s infinite linear;}
  .backWallMat{fill:#AAC0CD; animation: backWallAnim 12s infinite linear;}
  .backRoofMat{fill:#87361B; animation: backRoofAnim 12s infinite linear;}
  .backWindowMat{fill:#205E84; animation: backWindowAnim 12s infinite linear;}
  .bottomMat{fill:#83A0B1; animation: bottomAnim 12s infinite linear;}

  .skyMat{fill:#2D78AF; animation: skyMatAnim 12s infinite linear;}
  .wireThinMat{fill:none;stroke:#5A5277;stroke-width:1;stroke-miterlimit:10; animation: wiresAnim 12s infinite;}
  .wireThiccMat{fill:none;stroke:#5A5277;stroke-width:2;stroke-miterlimit:10; animation: wiresAnim 12s infinite;}
  @keyframes shadowFade{
    0% {opacity: 0}
    20% {opacity: 1}
    40% {opacity: 1}
    100% {opacity: 0}
  }
  @keyframes wiresAnim{
    0% {stroke: #5A5277}
    84% {stroke: #111227}
    100% {stroke: #5A5277}
  }
  @keyframes skyMatAnim{
    0% {fill: #b2ddde}
    20% {fill: #2d77ad}
    40% {fill: #a5ceda}
    66% {fill: #ca7577}
    84% {fill: #272652}
    100% {fill: #b2ddde}
  }
  @keyframes frontWallAnim{
    0% {fill: #e9deb4}
    20% {fill: #FDF4EB}
    40% {fill: #64a2bc}
    66% {fill: #bd5363}
    84% {fill: #272652}
    100% {fill: #e9deb4}
  }
  @keyframes backWallAnim{
    0% {fill: #83c8d6}
    20% {fill: #a8becb}
    40% {fill: #ded2c6}
    66% {fill: #d99a94}
    84% {fill: #2e457d}
    100% {fill: #83c8d6}
  }
  @keyframes bottomAnim{
    0% {fill: #5dafb6}
    20% {fill: #829eaf}
    40% {fill: #45508a}
    66% {fill: #2a2232}
    84% {fill: #111227}
    100% {fill: #5dafb6}
  }
  @keyframes backWindowAnim{
    0% {fill: #44949b}
    20% {fill: #205d83}
    40% {fill: #dab5a5}
    66% {fill: #ca7577}
    84% {fill: #272652}
    100% {fill: #44949b}
  }
  @keyframes frontWindowAnim{
    0% {fill: #f3d3b0}
    20% {fill: #2d77ad}
    40% {fill: #a14536}
    66% {fill: #181420}
    84% {fill: #111227}
    100% {fill: #f3d3b0}
  }
  @keyframes frontRoofAnim{
    0% {fill: #ff9c89}
    20% {fill: #fb867e}
    40% {fill: #45508a}
    66% {fill: #411e11}
    84% {fill: #111227}
    100% {fill: #ff9c89}
  }
  @keyframes backRoofAnim{
    0% {fill: #615322}
    20% {fill: #86361b}
    40% {fill: #b05f5e}
    66% {fill: #ba3e32}
    84% {fill: #111227}
    100% {fill: #615322}
  }
  @keyframes nightSkyAnim{
    0% {opacity: 0}
    70% {opacity: 0}
    84% {opacity: 1}
    100% {opacity: 0}
  }
</style>
<defs>

</defs>

<g id="window">
  <rect id="backgroundSky" class="skyMat" width="240.5" height="240"/>
  <rect x="127.3" y="90.2" class="frontWindowMat" width="113.2" height="149.8"/>
  <g class="backWindowMat">
    <polygon points="101.2,123 101.2,240 127.3,240 127.3,90.2"/>
    <rect x="157.1" y="94.4" width="9.1" height="145.6"/>
  </g>
</g>

<g id="misc">
  <path class="wireThinMat" d="M-1.2,189.8c0,0,82.9-12.9,100.3-86.5"/>
  <path class="wireThiccMat" d="M-1.2,193.2c13,10.5,85.7-4.1,100.3-80"/>
  <g id="moon" class="shadowMatOpacity">
    <circle class="starMat1" cx="49" cy="34.5" r="16"/>
    <circle class="starMat2" cx="46.9" cy="23.4" r="2.7"/>
    <circle class="starMat2" cx="41.1" cy="31.9" r="5.7"/>
  </g>
  <g id="stars" class="shadowMatOpacity">
    <circle class="starMat1" cx="87.1" cy="46.7" r="1"/>
    <circle class="starMat1" cx="181.6" cy="23.4" r="1"/>
    <circle class="starMat1" cx="181.6" cy="23.4" r="1"/>
    <circle class="starMat2" cx="110.1" cy="12.5" r="1"/>
    <circle class="starMat2" cx="142.9" cy="22.9" r="0.5"/>
    <circle class="starMat1" cx="90.8" cy="18.4" r="0.5"/>
    <circle class="starMat1" cx="24.4" cy="64.3" r="0.5"/>
    <circle class="starMat3" cx="189.8" cy="11" r="0.5"/>
  </g>
</g>
<g id="back">
  <polygon class="backRoofMat" points="132.1,54.5 96.4,101 96.4,106.6 132.1,60.6   "/>
  <g class="backWallMat">
    <rect x="155.4" y="100.4" width="3.3" height="139.6"/>
    <path d="M96.4,134.9l3.1-4.1v24l-3.1,4.1v18.8l3.1-4.1v24.9l-3.1,4.1v19.3l3.1-4.1v19.9l-1.7,2.3h1.7h4.1h7.5h1.8h3.2 l2.9-3.8v3.8h1.8v-6.2l6.4-8.4V240h1.8v-17l3.1-4.1l-0.1-20l-3,3.6v-23.4l3-3.9v-19.9l-3,4v-24.4l3-3.9v-19.3l-3,4V92l3-3.9V60.6 l-35.7,46.1L96.4,134.9L96.4,134.9z M120.9,102.8l6.4-8.4V118l-6.4,8.5V102.8z M120.9,145.7l6.4-8.4v24.4l-6.4,8.5V145.7z M120.9,189.9l6.4-8.4v23.2l-6.4,7.6V189.9z M113,113.2l6.1-8v23.7L113,137V113.2z M113,156.1l6.1-8v24.6l-6.1,8.2V156.1z M113,200.3l6.1-8v22.2l-6.1,7.3V200.3z M103.6,125.5l7.5-9.8v23.9l-7.5,9.9V125.5z M103.6,168.3l7.5-9.8v24.7l-7.5,10V168.3z M103.6,212.6l7.5-9.8V224l-7.5,9V212.6z"/>
  </g>
  <path class="st8" d="M0,156"/>
</g>
<g id="front">
  <g id="wall" class="frontWallMat">
    <path d="M132.1,60.6v27.5l58.2,5.3v23.2l-22.7-2V93.3l-3.1-0.9v22l-32.5-2.8v20.7l58.2,5v23l-22.7-2v-23l-3.1-0.7V158 l-32.5-2.8V176l58.2,5v23l-22.7-2v-22.5l-3.1-0.8v23l-32.5-2.8v20.7l58.2,5V240h19.9v-13.6l25.3,2.2V240h5.3v-11v-20.7v-22.9 v-20.7v-22.9v-20.7V98v-5V69.9L132.1,60.6z M235.6,207.8l-25.3-2.2v-22.9l25.3,2.2V207.8z M235.6,164.2l-25.3-2.2v-22.9l25.3,2.2 V164.2z M235.6,120.5l-25.3-2.2v-23l25.3,2.3V120.5z"/>
    <polygon points="164.6,240 167.7,240 167.7,223.1 164.6,222.4"/>
  </g>
  <polygon id="roof" class="frontRoofMat" points="132.1,54.5 240.5,64.5 240.5,69.9 132.1,60.6"/>
</g>
<g id="bottom" class="bottomMat">
  <path d="M96.8,134"/>
  <polyline points="132.1,88.1 131.8,88.4 96.4,134.9 99.5,134.9 127.2,100.8 157.9,102.6 164.6,94.6 190.3,97.1 190.3,93.4"/>
  <polygon points="235.6,101.2 210.3,98.9 210.3,95.3 235.6,97.6"/>
  <polyline points="132.1,131 131.8,131.3 96.4,177.8 99.5,177.8 127.2,143.7 157.9,145.5 164.6,137.5 190.3,140 190.3,136.3"/>
  <polygon points="235.6,144 210.3,141.7 210.3,138.1 235.6,140.5"/>
  <polyline points="132.1,175.2 131.8,175.6 96.4,222.1 99.5,222.1 127.2,188 157.9,189.7 164.6,181.8 190.3,184.3 190.3,180.6"/>
  <polygon points="235.6,188.3 210.3,186 210.3,182.4 235.6,184.7"/>
  <polygon points="235.6,232 210.3,229.7 210.3,226.1 235.6,228.4"/>
  <polygon points="120.5,240 127.2,231.7 157.9,233.5 164.6,225.5 190.3,228 190.3,224.3 132.1,218.9 131.8,219.3 116.1,240"/>
</g>
<g id="shadow">
  <path class="shadowMat">
    <animate attributeName="d" dur="12s" repeatCount="indefinite" calcMode="linear" keyTimes="0;0.15;0.3;1"
      values="M240.5,240h-93.6v-21h-9.7v-7.2l1.6-5.1v-14l7.6-18l0.9-6.1H137v-8l1.5-3.9v-22.4l-2.4-2.8 l36-73.2l67.9,6.2L240.5,240z;
          M240.5,240H190v-6h-9.7v-6.2l1.6-4.4v-12.1l7.6-15.6l0.9-5.3h-10.3v-6.9l1.5-3.4v-19.4 l-2.4-2.4l38.7-86.9l22.1,2.3L240.5,240z;
          M270.4,240h-24.6v-5.4H241V229l0.8-4v-10.9l3.7-14.1l0.4-4.8h-5v-6.2l0.7-3.1v-17.5l-1.2-2.2 l18.9-78.3l10.8,2.1L270.4,240z;
          M270.4,240h-24.6v-5.4H241V229l0.8-4v-10.9l3.7-14.1l0.4-4.8h-5v-6.2l0.7-3.1v-17.5l-1.2-2.2 l18.9-78.3l10.8,2.1L270.4,240z"/>
    </path>
</g>
</svg>`;

export const codeCSS =
  `body,html {height: 100%}
body{
  animation: bgColorAnim 12s infinite linear;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}
#svg_building{
  width: 70vh;
  max-width: 640px;
  max-height: 640px;
}

@keyframes bgColorAnim{
  0% {background-color: #e9deb4}
  20% {background-color: #FDF4EB}
  40% {background-color: #64a2bc}
  66% {background-color: #bd5363}
  84% {background-color: #272652}
  100% {background-color: #e9deb4}
}`;

export const codeJS =
  ` `;
