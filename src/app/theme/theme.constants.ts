// 常量（不知道干嘛的）
export const IMAGES_ROOT = 'assets/img/';

export const layoutSizes = {
  resWidthCollapseSidebar: 1200,
  resWidthHideSidebar: 500
};

export const layoutPaths = {
  images: {
    root: IMAGES_ROOT,
    profile: IMAGES_ROOT + 'app/profile/',
    amMap: 'assets/img/theme/vendor/ammap/',
    amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'
  }
};

export class colorHelper {
  static shade = (color, weight) => {
    return colorHelper.mix('#000000', color, weight);
  };

  static tint = (color, weight) => {
    return colorHelper.mix('#ffffff', color, weight);
  };


  static mix = (color1, color2, weight) => {

    let d2h = (d) => d.toString(16);
    let h2d = (h) => parseInt(h, 16);

    let result = "#";
    for (let i = 1; i < 7; i += 2) {
      let color1Part = h2d(color1.substr(i, 2));
      let color2Part = h2d(color2.substr(i, 2));
      let resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
      result += ('0' + resultPart).slice(-2);
    }
    return result;
  };
}

export const isMobile = () => (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
