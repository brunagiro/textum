import React from 'react';
import styled, { keyframes } from 'styled-components';
import { base } from '@pagerland/common/src/utils';
import { colors } from '../../styles';

const scaleRotate = (scale = 0.8, rotate = `10deg`) => keyframes`
  from {
    transform: scale(${scale}) rotate(${rotate});
  }

  to {
    transform: scale(1) rotate(0);
  }
`;

const opacity = (from = 0, to = 1) => keyframes`
  from {
    opacity: ${from};
  }

  to {
    opacity: ${to};
  }
`;

const AnimatedSvg = styled.svg`
  ${base};

  transform: translate3d(0, 0, 0);
  animation: none !important;

  .liquid & {
    .layer-1 {
      opacity: 0;
      transform-origin: 396px 531px;
      animation: 600ms ${scaleRotate()} forwards, 600ms ${opacity()} forwards;
    }
    .layer-2 {
      opacity: 0;
      transform-origin: 720px 526px;
      animation: 600ms ${scaleRotate(0.8, '-10deg')} forwards, 600ms ${opacity()} forwards;
    }
    .layer-3 {
      opacity: 0;
      transform-origin: 539px 684px;
      animation: 600ms ${scaleRotate(0.8, '-20deg')} forwards 70ms, 600ms ${opacity()} forwards 70ms;
    }
    .layer-4 {
      opacity: 0;
      transform-origin: 320px 195px;
      animation: 600ms ${scaleRotate(0.8, '45deg')} forwards 70ms, 600ms ${opacity()} forwards 70ms;
    }
    .layer-5 {
      opacity: 0;
      transform-origin: 262px 830px;
      animation: 600ms ${scaleRotate(0.8, '-45deg')} forwards 80ms, 600ms ${opacity()} forwards 80ms;
    }
    .layer-6 {
      opacity: 0;
      transform-origin: 493px 802px;
      animation: 600ms ${scaleRotate(0.8, '-30deg')} forwards 80ms, 600ms ${opacity()} forwards 80ms;
    }
    .layer-7 {
      opacity: 0;
      transform-origin: 1030px 650px;
      animation: 600ms ${scaleRotate(0.8, '30deg')} forwards 80ms, 600ms ${opacity()} forwards 80ms;
    }
    .layer-8 {
      opacity: 0;
      transform-origin: 200px 225px;
      animation: 600ms ${scaleRotate(0.8, '-30deg')} forwards 80ms, 600ms ${opacity()} forwards 80ms;
    }
    .layer-9 {
      opacity: 0;
      transform-origin: 0 487px;
      animation: 600ms ${scaleRotate(0.8, '-45deg')} forwards 80ms, 600ms ${opacity()} forwards 80ms;
    }
    .layer-9 {
      opacity: 0;
      transform-origin: 0 487px;
      animation: 600ms ${scaleRotate(0.8, '-45deg')} forwards 80ms, 600ms ${opacity()} forwards 80ms;
    }
    .layer-10 {
      opacity: 0;
      transform-origin: 943px 335px;
      animation: 600ms ${scaleRotate(0.5, '-45deg')} forwards 150ms,
        600ms ${opacity()} forwards 150ms;
    }
    .layer-11 {
      opacity: 0;
      transform-origin: 146px 646px;
      animation: 600ms ${scaleRotate(0.5, '-45deg')} forwards 150ms,
        600ms ${opacity()} forwards 150ms;
    }
    .layer-12 {
      opacity: 0;
      transform-origin: 1011px 130px;
      animation: 600ms ${scaleRotate(0.5, '60deg')} forwards 150ms,
        600ms ${opacity()} forwards 150ms;
    }
    .layer-13 {
      opacity: 0;
      transform-origin: 126px 90px;
      animation: 600ms ${scaleRotate(0.5, '-30deg')} forwards 150ms,
        600ms ${opacity()} forwards 150ms;
    }
  }
`;

const LiquidA = props => (
  <AnimatedSvg viewBox="0 0 1099 962" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      className="layer-1"
      // d="M635.427 729.498C664.673 737.743 721.248 700.172 720.132 654.526C718.975 607.379 677.357 571.992 672.145 525.113C666.37 473.125 722.293 434.834 734.116 383.887C746.555 330.277 720.864 266.359 680.636 228.801C646.397 196.831 589.719 178.787 543.594 186.96C487.542 196.894 453.78 259.445 398.706 273.867C354.158 285.533 308.307 272.732 264.898 257.35C231.856 245.639 203.584 245.595 172.958 243.889C139.21 242.004 35.5415 292.974 59.5795 394.633C67.2929 427.242 98.3966 448.64 128.04 464.263C157.688 479.887 200.06 517.007 221.967 542.362C257.421 583.403 245.487 619.55 244.304 673.771C243.12 727.993 218.957 784.613 260.575 833.761C277.524 853.783 322.228 875.843 350.313 878.134C369.96 879.737 398.871 872.864 411.792 863.239C489.815 805.078 472.593 683.588 635.427 729.498Z"
      d="M 599 518 C 722 473 722.293 434.834 734.116 383.887 C 746.555 330.277 720.864 266.359 680.636 228.801 C 646.397 196.831 589.719 178.787 543.594 186.96 C 487.542 196.894 453.78 259.445 398.706 273.867 C 354.158 285.533 308.307 272.732 264.898 257.35 C 231.856 245.639 203.584 245.595 172.958 243.889 C 139.21 242.004 35.5415 292.974 59.5795 394.633 C 67.2929 427.242 98.3966 448.64 128.04 464.263 C 157.688 479.887 200.06 517.007 264 530 C 323 544 364 533 520 536 Z"
      fill={colors.tertiary}
    />
    <path
      className="layer-2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M 376.851 486.783 C 348.945 500.263 331.156 567.213 362.876 601.31 C 395.65 636.531 449 654 522 616 C 568 603 549 554 653 597 C 1088 511 1130.13 414.392 1043.02 353.029 C 1015.08 333.346 976.853 338.04 943.655 346.164 C 910.452 354.28 852.992 354.592 819.119 350.046 C 764.286 342.681 748.957 307.017 713.186 264.814 C 677.419 222.611 657.58 163.039 592.563 153.655 C 566.082 149.837 517.023 163.222 494.031 180.467 C 477.943 192.53 460.52 217.332 457.165 233.42 C 436.919 330.59 532.236 411.713 376.851 486.783 Z"
      fill={colors.primary}
    />
    <path
      className="layer-3"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M 146.3845 327.567 C 136.343 332.568 129.9415 357.408 141.3555 370.058 C 153.149 383.126 173.1955 382.7085 186.0355 394.681 C 200.2735 407.9595 194.2275 432.839 203.3785 450.24 C 213.0055 468.5475 235.622 480.2085 255.8145 480.7555 C 273.002 481.221 292.9665 472.112 303.651 458.2225 C 316.634 441.3415 310.689 415.1525 322.3105 397.248 C 331.7125 382.7645 347.4245 374.885 363.0945 368.3495 C 375.023 363.3765 382.8035 356.296 391.633 349.096 C 401.3645 341.16 417.4445 300.7085 386.0995 277.9415 C 376.0465 270.639 362.291 272.3805 350.3445 275.3945 C 338.3965 278.4055 317.7205 278.5215 305.5315 276.8345 C 285.8 274.102 280.284 260.87 267.412 245.2125 C 254.542 229.5545 247.4025 207.452 224.007 203.9705 C 214.478 202.5535 196.8245 207.52 188.5505 213.918 C 182.7615 218.394 176.492 227.5955 175.285 233.5645 C 167.9995 269.6165 202.2985 299.7145 146.3845 327.567 Z"
      fill={colors.secondary}
    />
    <path
      className="layer-4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M323.619 154.571C314.311 150.811 303.681 147.84 293.793 152.07C285.186 155.75 278.759 164.549 276.32 173.826C273.882 183.107 275.038 192.75 278.04 201.28C286.816 226.23 323.217 254.738 350.064 231.625C384.379 202.084 349.055 164.862 323.619 154.571Z"
      fill={colors.primary}
    />
    <path
      className="layer-5"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M264.379 810.291C259.711 808.406 254.383 806.919 249.421 809.036C245.106 810.885 241.886 815.298 240.662 819.947C239.438 824.601 240.019 829.438 241.524 833.717C245.924 846.223 264.178 860.52 277.639 848.929C294.844 834.114 277.13 815.454 264.379 810.291Z"
      fill={colors.primary}
    />
    <path
      className="layer-6"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M465.409 780.212C458.379 785.634 451.363 792.414 450.17 801.856C449.129 810.065 452.971 818.9 458.96 824.911C464.949 830.919 472.823 834.344 480.675 835.867C503.632 840.325 541.659 825.3 536.022 794.482C528.823 755.098 484.633 765.411 465.409 780.212Z"
      fill={colors.primary}
    />
    <path
      className="layer-7"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1041.1 667.586C1043.49 666.434 1045.71 664.835 1047.31 662.718C1048.94 660.561 1049.89 657.939 1050.32 655.268C1053.49 635.808 1027.04 620.328 1013.97 637.246C1000.82 654.272 1023.02 676.296 1041.1 667.586Z"
      fill={colors.quaternary}
    />
    <path
      className="layer-8"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M210.103 242.586C212.492 241.43 214.708 239.835 216.311 237.718C217.946 235.561 218.893 232.939 219.326 230.264C222.488 210.808 196.038 195.328 182.974 212.246C169.825 229.272 192.023 251.296 210.103 242.586Z"
      fill={colors.primary}
    />
    <path
      className="layer-9"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.81244 508.392C12.6772 520.647 27.5815 527.852 41.4495 525.614C50.1857 524.207 58.2162 519.482 67.0373 518.829C77.5958 518.043 88.9046 523.068 98.3956 518.378C101.401 516.891 103.912 514.524 105.966 511.866C114.693 500.593 115.06 484.032 108.235 471.517C81.9996 423.437 -26.0104 451.571 5.81244 508.392Z"
      fill={colors.primary}
    />
    <path
      className="layer-10"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1053.86 335.431C1053.86 396.419 1004.42 445.857 943.431 445.857C882.443 445.857 833 396.419 833 335.431C833 274.438 882.443 225 943.431 225C1004.42 225 1053.86 274.438 1053.86 335.431Z"
      fill={colors.secondary}
    />
    <path
      className="layer-11"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M69.8879 594.164C63.3598 604.401 58.8699 616.065 56.9902 628.583L127.629 554.676C115.24 557.114 103.774 562.127 93.8121 569.134L69.8879 594.164ZM153.027 553.367L56.8208 654.024C57.61 659.808 58.9555 665.415 60.8017 670.789L169.956 556.582C164.512 554.985 158.851 553.895 153.027 553.367ZM187.007 563.588L68.5728 687.497C71.1037 691.724 73.9758 695.723 77.151 699.456L199.334 571.614C195.466 568.614 191.345 565.926 187.007 563.588ZM212.014 583.607L89.7 711.583C93.5278 714.618 97.6115 717.345 101.913 719.726L220.703 595.445C218.131 591.257 215.222 587.298 212.014 583.607ZM228.749 612.313L119.131 726.998C124.533 728.632 130.152 729.764 135.935 730.343L232.852 628.942C232.015 623.203 230.628 617.642 228.749 612.313ZM233.027 653.584L160.549 729.415C172.059 727.37 182.804 723.11 192.326 717.091L222.168 685.87C227.732 676.114 231.501 665.202 233.027 653.584Z"
      fill={colors.quaternary}
    />
    <path
      className="layer-12"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M936.454 79.7923C929.236 90.3525 924.236 102.549 922.125 115.711L991.762 42.8507C978.743 45.5488 966.767 51.0942 956.512 58.8067L936.454 79.7923ZM1017.38 41.3108L921.735 141.381C922.486 147.197 923.798 152.838 925.617 158.246L1034.41 44.4226C1028.93 42.8547 1023.24 41.799 1017.38 41.3108ZM1051.54 51.3389L933.305 175.048C935.812 179.291 938.662 183.308 941.816 187.06L1063.93 59.3005C1060.04 56.32 1055.9 53.6536 1051.54 51.3389ZM1076.68 71.2258L954.303 199.266C958.11 202.321 962.175 205.069 966.459 207.473L1085.43 83.0027C1082.84 78.8341 1079.91 74.8959 1076.68 71.2258ZM1093.55 99.7614L983.576 214.828C988.944 216.49 994.529 217.657 1000.28 218.275L1097.75 116.29C1096.88 110.583 1095.46 105.056 1093.55 99.7614ZM1098.13 140.739L1024.71 217.56C1035.86 215.69 1046.3 211.746 1055.63 206.139L1088.14 172.124C1093.3 162.579 1096.77 151.983 1098.13 140.739Z"
      fill={colors.quaternary}
    />
    <path
      className="layer-13"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.9739 46.0749C41.6792 55.6894 38.1122 66.3892 36.6913 77.7559L109.79 1.27816C98.5232 3.20668 87.9807 7.2554 78.5873 12.999L46.9739 46.0749ZM134.65 0.529236L37.0566 102.641C37.9411 108.339 39.367 113.859 41.2798 119.145L151.338 3.99918C145.975 2.33071 140.395 1.15631 134.65 0.529236ZM168.173 11.228L49.266 135.635C51.8514 139.81 54.7729 143.754 57.9925 147.431L180.35 19.4138C176.535 16.365 172.463 13.6239 168.173 11.228ZM192.856 31.5896L70.7198 159.379C74.6015 162.367 78.737 165.042 83.0883 167.365L201.392 43.5852C198.876 39.347 196.018 35.3358 192.856 31.5896ZM209.219 60.6822L100.525 174.407C106.01 175.967 111.711 177.014 117.573 177.492L213.074 77.5666C212.334 71.7438 211.03 66.0969 209.219 60.6822ZM212.712 102.773L142.722 176.001C155.496 173.401 167.274 168.061 177.415 160.622L198.938 138.103C205.887 127.669 210.688 115.682 212.712 102.773Z"
      fill={colors.quaternary}
    />
    
  </AnimatedSvg>
);

export default LiquidA;