import "./style.scss";

const images = [
  {
    alt: "",
    description:
      `This photo was taken inside of an ice cave in Vatnajökull, Iceland. There are a few different ice caves you can experience while in Iceland, and this one was inside Treasure Island.`,
    etsyLink: "https://www.etsy.com/listing/682930632/ice-cave-is",
    isPortrait: true,
    key: "iceCave",
    url: "v1560451964/rainawessen.com/IceCave_srsmvm.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken at Lake Rotoiti (also known as Lake Arthur), New Zealand. This lake is in the Tasman Region, within the border of Nelson Lakes National Park.",
    etsyLink: "https://www.etsy.com/listing/684513358/rotoiti-nz",
    key: "rotoiti",
    url: "v1560451957/rainawessen.com/Rotoiti_ajjhb8.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken on top of Mount Vesuvius, Italy. Mount Vesuvius is a somma-stratovolcano located on the Gulf of Naples in Campania, and it is one of several volcanoes which form the Campanian volcanic arc. The volcano is most notably famous for the eruption in AD 79, where it destroyed a city and left behind the skeletons (Or as we know it, the Ruins of Pompeii).",
    etsyLink: "https://www.etsy.com/listing/698372401/vesuvius-it",
    isPortrait: true,
    key: "vesuvio",
    url: "v1560451959/rainawessen.com/Vesuvio_qxqrgx.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken at one of the most famous day tracks in Aoraki/Mount Cook National Park, New Zealand. The mountain ranges in Mount Cook National Park are known as the “Southern Alps”, and they extend the length of the Southern Island.",
    etsyLink: "https://www.etsy.com/listing/696761987/hooker-valley-track-nz",
    isPortrait: true,
    key: "hvt",
    url: "v1560451957/rainawessen.com/HVT_lwvfnt.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken at one of the most instagram-famous hikes in Wanaka, New Zealand. The track is called “Roys Peak”, and is a 16km return hike with a 1,500m elevation gain.",
    etsyLink: "https://www.etsy.com/listing/684514192/roys-peak-nz",
    isPortrait: true,
    key: "roysPeak",
    url: "v1560451955/rainawessen.com/RoysPeak_amt2sa.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken at Lake Pukaki, New Zealand. Lake Pukaki is the largest of three alpine lakes that runs north to south, along the northern edge of the Mackenzie Basin in the South Island of New Zealand.",
    etsyLink: "https://www.etsy.com/listing/684511792/pukaki-nz",
    isPortrait: true,
    key: "pukaki",
    url: "v1560451954/rainawessen.com/Pukaki_veanhd.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken at Punakaiki, New Zealand. Punakaiki is a small community located on the West Coast of the South Island, and is most famous for its tourist attraction of “The Pancake Rocks”.",
    etsyLink: "https://www.etsy.com/listing/698372109/solo-rock-nz",
    isPortrait: true,
    key: "soloRock",
    url: "v1560451954/rainawessen.com/SoloRock_rt46jc.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken at Cape Reinga, New Zealand. Cape Reinga is the most northwestern tip of the Aupouri Peninsula, or as most people refer to it the most northern part of the North Island in New Zealand.",
    etsyLink: "https://www.etsy.com/listing/698367461/regina-nz",
    key: "reinga",
    url: "v1560451952/rainawessen.com/Reinga_m47q10.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken in Chaing Mai, Thailand. The forests and tropical weather in Northern Thailand are ideal weather for the Asian Elephant.",
    etsyLink: "https://www.etsy.com/listing/696676025/elephant-th",
    isPortrait: true,
    key: "elephant",
    url: "v1560451950/rainawessen.com/Elephant_terqoq.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken near Adelaide, Australia. We went to a sanctuary, called the Hanson Bay Wildlife Sanctuary, where we were lucky enough to witness multiple koalas roaming free, doing what they do best!",
    etsyLink: "https://www.etsy.com/listing/684448912/koala-au",
    key: "koala",
    url: "v1560451949/rainawessen.com/Koala_iu55ay.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken at one of the most instagram-famous hikes in Wanaka, New Zealand. The track is called “Roys Peak”, and is a 16km return hike with a 1,500m elevation gain.",
    etsyLink: "https://www.etsy.com/listing/698359449/mountain-top-nz",
    key: "mountainTop",
    url: "v1560451949/rainawessen.com/MountainTop_lcmdta.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken in midday, on the shore of Keflavík, Iceland. The church is located next to a graveyard, where locals can come and pay their respect.",
    etsyLink: "https://www.etsy.com/listing/682930946/iceland-church-is",
    key: "icelandChurch",
    url: "v1560451947/rainawessen.com/IcelandChurch_gvapkv.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken in Arthur's Pass, New Zealand. Arthur's Pass is a town located in the Southern Alps on the South Island of New Zealand.",
    etsyLink: "https://www.etsy.com/listing/684314576/kea-nz",
    isPortrait: true,
    key: "kea",
    url: "v1560451943/rainawessen.com/Kea_zwaz3w.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken at one of the 23 active lighthouses in Wellington, New Zealand. With a bit of walking by the shoreline, and a gradual staircase going upwards the lighthouse, you can watch view this beauty. Even though I hadn't had many hours of sleep the night before, I knew it was a morning I didn't want to miss.",
    etsyLink: "https://www.etsy.com/listing/696574201/castle-point-nz",
    key: "castlePoint",
    url: "v1560451942/rainawessen.com/CastlePoint_l7rcqp.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken at the infamous Piha Beach, in Auckland, New Zealand. With a bit of walking along the shore, then some climbing over the rocks, you are rewarded with a beauty and completely different scenery than the rest of the beach.",
    etsyLink:
      "https://www.etsy.com/listing/694508753/black-and-white-piha-rocks-nz",
    isPortrait: true,
    key: "piha",
    url: "v1560451941/rainawessen.com/cliffs_hssdmw.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken in Northern California, USA. It was one of my more random, trying to shoot something else completely, and coming back with a photo of a bird.",
    etsyLink: "https://www.etsy.com/listing/696679291/heron-usa",
    isPortrait: true,
    key: "heron",
    url: "v1560451941/rainawessen.com/Heron_frumla.jpg"
  },
  {
    alt: "",
    description:
      "This photo was taken at the museum of Idaho, USA in 2017. The eclipse that year spanned across the entire contiguous United States, passing from the Pacific to the Atlantic coasts. Even if you were not in a state that was going to see a complete solar eclipse (path of totality), the other sates were still getting a partial eclipse. ",
    etsyLink: "https://www.etsy.com/listing/696671857/eclipse-2017-usa",
    key: "eclipse",
    url: "v1560451938/rainawessen.com/Eclipse-2149_htxtw9.jpg"
  }
];

const imageGridPrefix =
  "https://res.cloudinary.com/wesspacito/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_400/";

const imageLightboxPrefix =
  "https://res.cloudinary.com/wesspacito/image/upload/c_fit,dpr_auto,f_auto,fl_progressive,q_auto:best,w_1200,h_1200/";

const makeImageNode = image => {
  return `<img class="js-grid-item grid-item"
      data-key="${image.key}"
      src="${imageGridPrefix + image.url}"
    />`;
};

$(document).ready(() => {
  images.forEach(image => {
    let imageNode = makeImageNode(image);
    $(".js-grid").append(imageNode);
  });

  $(".js-grid-item").click(handleGridItemClick);

  $(".js-light-box, .js-light-box-close").click(handleLightBoxClose);

  $(".js-light-box-content").click(function(e) {
    e.stopPropagation();
  });

  setTimeout(() => {
    $("body").removeClass("no-scroll");
    $(".js-grid").removeClass("js-grid-loading");
    $(".js-grid-loader").remove();
    $(".js-grid").masonry({
      columnWidth: 300,
      gutter: 30,
      itemSelector: ".grid-item",
      isFitWidth: true
    });
  }, 2000);
});

function handleGridItemClick(event) {
  const key = event.currentTarget.dataset.key;
  const image = _.find(images, image => image.key === key);
  $(".js-light-box-photo").attr("src", imageLightboxPrefix + image.url);
  $(".js-light-box-photo").attr("alt", image.alt);
  $(".js-photo-etsy-link").attr("href", image.etsyLink);
  $(".js-light-box-caption").html(image.description);
  $(".js-light-box").addClass("light-box--active");
  if (image.isPortrait) {
    $(".js-light-box-figure").addClass("light-box__figure--portrait");
  }
  $("body").addClass("no-scroll");
}

function handleLightBoxClose(event) {
  $(".js-light-box-photo").attr("src", "");
  $(".js-light-box-photo").attr("alt", "");
  $(".js-light-box-caption").text("");
  $(".js-light-box").removeClass("light-box--active");
  $(".js-light-box-figure").removeClass("light-box__figure--portrait");
  $("body").removeClass("no-scroll");
}
