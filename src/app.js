import "./style.scss";

const images = [
  {
    alt: "",
    key: "iceCave",
    url: "v1560451964/rainawessen.com/IceCave_srsmvm.jpg"
  },
  {
    alt: "",
    key: "rotoiti",
    url: "v1560451957/rainawessen.com/Rotoiti_ajjhb8.jpg"
  },
  {
    alt: "",
    key: "vesuvio",
    url: "v1560451959/rainawessen.com/Vesuvio_qxqrgx.jpg"
  },
  {
    alt: "",
    key: "hvt",
    url: "v1560451957/rainawessen.com/HVT_lwvfnt.jpg"
  },
  {
    alt: "",
    key: "roysPeak",
    url: "v1560451955/rainawessen.com/RoysPeak_amt2sa.jpg"
  },
  {
    alt: "",
    key: "pukaki",
    url: "v1560451954/rainawessen.com/Pukaki_veanhd.jpg"
  },
  {
    alt: "",
    key: "soloRock",
    url: "v1560451954/rainawessen.com/SoloRock_rt46jc.jpg"
  },
  {
    alt: "",
    key: "reinga",
    url: "v1560451952/rainawessen.com/Reinga_m47q10.jpg"
  },
  {
    alt: "",
    key: "elephant",
    url: "v1560451950/rainawessen.com/Elephant_terqoq.jpg"
  },
  {
    alt: "",
    key: "koala",
    url: "v1560451949/rainawessen.com/Koala_iu55ay.jpg"
  },
  {
    alt: "",
    key: "mountainTop",
    url: "v1560451949/rainawessen.com/MountainTop_lcmdta.jpg"
  },
  {
    alt: "",
    key: "icelandChurch",
    url: "v1560451947/rainawessen.com/IcelandChurch_gvapkv.jpg"
  },
  {
    alt: "",
    key: "kea",
    url: "v1560451943/rainawessen.com/Kea_zwaz3w.jpg"
  },
  {
    alt: "",
    key: "castlePoint",
    url: "v1560451942/rainawessen.com/CastlePoint_l7rcqp.jpg"
  },
  {
    alt: "",
    key: "cliffs",
    url: "v1560451941/rainawessen.com/cliffs_hssdmw.jpg"
  },
  {
    alt: "",
    key: "heron",
    url: "v1560451941/rainawessen.com/Heron_frumla.jpg"
  },
  {
    alt: "",
    key: "eclipse",
    url: "v1560451938/rainawessen.com/Eclipse-2149_htxtw9.jpg"
  }
];

const imageGridPrefix =
  "https://res.cloudinary.com/wesspacito/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_400/";
const imageLightboxPrefix =
  "https://res.cloudinary.com/wesspacito/image/upload/c_fit,f_auto,fl_progressive,q_auto:best,w_600,h_600/";

const makeImageNode = image => {
  return `<img class="js-grid-item grid-item"
      data-key="${image.key}"
      src="${imageGridPrefix + image.url}"
    />`;
};

$(document).ready(() => {
  const $grid = $(".js-grid");
  const $gridLoader = $(".js-grid-loader");
  const $lightBox = $(".js-light-box");
  const $lightBoxPhoto = $(".js-light-box-photo");
  const $lightBoxCaption = $(".js-light-box-caption");

  images.forEach(image => {
    let imageNode = makeImageNode(image);
    $grid.append(imageNode);
  });

  $(".js-grid-item").click(function(event) {
    const key = event.currentTarget.dataset.key;
    const image = _.find(images, image => image.key === key);
    // console.log(image);
    $lightBoxPhoto.attr("src", imageLightboxPrefix + image.url);
    $lightBoxPhoto.attr("alt", image.alt);
    $lightBox.addClass("light-box--active");
  });

  $(".js-light-box, .js-light-box-close").click(function() {
    $lightBoxPhoto.attr("src", "");
    $lightBoxPhoto.attr("alt", "");
    $lightBox.removeClass("light-box--active");
  });

  $(".js-light-box-content").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
  });

  setTimeout(() => {
    $grid.removeClass("js-grid-loading");
    $gridLoader.remove();
    $grid.masonry({
      columnWidth: 300,
      gutter: 30,
      itemSelector: ".grid-item"
    });
  }, 2000);
});
