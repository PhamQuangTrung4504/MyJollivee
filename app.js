const profileData = [
  {
    name: "Phạm Quang Trung",
    birthday: "04/05/2004",
    school: "Sinh viên trường Đại học Công nghệ TP.HCM (HUTECH)",
    hobbies:
      "Sở thích: chơi game, ăn uống, xem phim, nghe nhạc, du lịch, đi chơi.",
    strengths: "Ưu điểm: thân thiện, nhiệt tình, dui vẻ, biết nấu ăn.",
    weaknesses: "Nhược điểm: não cá vàng, học dở.",
    job: "Nghề nghiệp: sinh viên chuẩn bị tốt nghiệp, có thể thất nghiệp, chạy shipper ShopeeFood part time.",
    image: "assets/image/pic00.jpg",
    alt: "Ảnh giới thiệu Trung",
    side: "right",
  },
  {
    name: "Trần Thúy Vy",
    birthday: "30/10/2005",
    school: "Sinh viên trường Đại học Giao thông Vận tải (UTH)",
    hobbies:
      "Sở thích: hát, ăn uống, xem phim, xem phim kinh dị nhưng lại nhát ma, nghe nhạc, nghe truyện ma, chơi game, đi chơi.",
    strengths:
      "Ưu điểm: xinh xắn, dễ thương, thân thiện, nhiệt tình, dui vẻ, thông minh, nhanh nhẹn, đầu óc thám tử, biết nấu ăn, học bá, biết hát.",
    weaknesses:
      "Nhược điểm: không có nhược điểm cụ thể vì ẻm quá mạnh, quá toàn năng.",
    job: "Nghề nghiệp: sinh viên, cựu nhân viên cứng cựa bartender coffee.",
    image: "assets/image/pic01.jpg",
    alt: "Ảnh giới thiệu Vy",
    side: "left",
  },
];

const storyData = [
  {
    date: "28/05/2026 - 21:53",
    title: "Tin nhắn mở lời đầu tiên",
    summary:
      "Một tin nhắn đầu tiên được gửi đi, mở ra khởi đầu của rất nhiều điều đẹp đẽ về sau.",
    media: [
      {
        type: "image",
        src: "assets/image/pic1.jpg",
        title: "Tin nhắn đầu tiên",
        kicker: "Mốc khởi đầu",
        description:
          "Tin nhắn mở lời đầu tiên của Trung gửi đến Vy vào 28/05/2026 lúc 21:53.",
      },
    ],
    reverse: false,
  },
  {
    date: "03/06/2026 - 11:35",
    title: "Chính thức kết bạn Facebook",
    summary:
      "Từ một kết nối nhỏ trên mạng xã hội, câu chuyện bắt đầu đi vào nhịp quen thuộc hơn.",
    media: [
      {
        type: "image",
        src: "assets/image/pic2.jpg",
        title: "Kết bạn Facebook",
        kicker: "Bước tiến tiếp theo",
        description:
          "Trung và Vy chính thức kết bạn Facebook vào lúc 11:35 ngày 03/06/2026.",
      },
    ],
    reverse: true,
  },
  {
    date: "14/06/2026 - Buổi date đầu tiên",
    title:
      "Quà tặng đầu tiên khi gặp mặt. Bữa ăn đầu tiên tại Jollibee và một buổi đi chơi rất đáng nhớ",
    summary:
      "Trung đến nơi tặng quà và rước ẻm đi ăn Jollibee, uống nước và đi dạo quanh Thanh Đa - Bình Quới.",
    media: [
      {
        type: "image",
        src: "assets/image/pic3.jpg",
        title: "Quà tặng đầu tiên",
        kicker: "Gấu bông + hoa",
        description: "Trung tặng quà cho Vy vào buổi hẹn đầu tiên.",
      },
      {
        type: "image",
        src: "assets/image/pic4.jpg",
        title: "Jollibee",
        kicker: "Cùng nhao ăn bữa đầu tiênn",
        description:
          "Cùng đi ăn Jollibee, combo gà giòn vui vẻ. Trung rất có ấn tượng mạnh khi ẻm suýt quên quà tôi tặng tại quán Hmmm...",
      },
      {
        type: "image",
        src: "assets/image/pic5.jpg",
        title: "An Tea & Dessert",
        kicker: "Cùng nhau đi uống nước",
        description:
          "Tiếp tục uống nước và tràn đầy năng lượng trước khi bị bà cô nào đấy hù trêu đô thị tới nên đành đi về... Khúc sau được đèo ẻm đi dạo rất là chill",
      },
    ],
    reverse: false,
  },
  {
    date: "Trước date 2",
    title: "Buổi sáng rửa xe trước khi đi hẹn hò",
    summary:
      "Trước buổi date thứ hai, Trung dậy rửa xe để mọi thứ chỉn chu hơn cho buổi gặp gỡ.",
    media: [
      {
        type: "video",
        src: "assets/video/vid1.mp4",
        title: "Rửa xe trước bữa date 2",
        kicker: "Video rửa xe",
        description:
          "Sáng đó, Trung rửa xe chuẩn bị cho buổi đi chơi với một người siu đặc biệc.",
      },
    ],
    reverse: true,
  },
  {
    date: "21/06/2026 - Buổi date thứ 2",
    title:
      "Tặng kẹo, đi ăn ốc và hẹn hò tại bờ kè Thanh Đa view cầu Bình Triệu",
    summary:
      "Buổi tối thứ hai có quà kẹo, bữa ăn ốc và một đoạn dạo chơi tại công viên Thanh Đa thật nhẹ nhàng.",
    media: [
      {
        type: "image",
        src: "assets/image/pic6.jpg",
        title: "Kẹo tặng Vy",
        kicker: "Chuẩn bị quà",
        description: "Trung mua kẹo làm quà cho Vy.",
      },
      {
        type: "image",
        src: "assets/image/pic7.jpg",
        title: "Đi ăn ốc",
        kicker: "Đi ăn tối",
        description: "Cùng nhau đi ăn ốc tại quán quen của em ý.",
      },
      {
        type: "image",
        src: "assets/image/pic8.jpg",
        title: "Bờ kè Thanh Đa view cầu Bình Triệu",
        kicker: "Tám chuyện",
        description:
          "Kết thúc bằng một buổi tâm sự mỏng tại view sông cầu Bình Triệu.",
      },
    ],
    reverse: false,
  },
  {
    date: "19/07/2026 - Buổi đi date thứ 3",
    title: "Hoa, bò sốt hàu, Katinat và một đêm rất dài",
    summary:
      " Trung mua hoa, tặng Vy rồi cùng nhau đi ăn bò sốt hàu, tiếp đó ghé Katinat Bến Bình An và dạo công viên đến tận 3 giờ sáng hôm sau.",
    media: [
      {
        type: "image",
        src: "assets/image/pic9.jpg",
        title: "Hoa tặng em ấy",
        kicker: "Hoa tặng Vy",
        description: "Hoa được chọn để gửi đến em Vy.",
      },
      {
        type: "image",
        src: "assets/image/pic10.jpg",
        title: "Bò sốt hàu",
        kicker: "Ăn tối",
        description: "Tôi kiếm được quán bò sốt hàu khá okelaa.",
      },
      {
        type: "image",
        src: "assets/image/pic11.jpg",
        title: "Katinat Bến Bình An",
        kicker: "Cafe cùng ng depp",
        description:
          "Tiếp tục ghé Katinat Bến Bình An để ngồi lại với nhau, chúng tôi có những phút giây cực kì dui dẻ.",
      },
      {
        type: "image",
        src: "assets/image/pic12.jpg",
        title: "Phóng xe dề",
        kicker: "Sau một buổi hẹn hè cực kì duii",
        description:
          "Sau cùng là một đêm dạo chơi tại công viên Thanh Đa tới 3 giờ sáng.",
      },
    ],
    reverse: true,
  },
  {
    date: "24/07/2026 - Buổi đi date thứ 4 (ngày tỏ tình)",
    title: "Mì cay, Conan Movie 29, sleepbox và lời tỏ tình lúc rạng sáng",
    summary:
      "Buổi hẹn thứ tư là một chuỗi trải nghiệm từ mì cay Sasin, xem phim, nghỉ ngơi và cùng nhau xem phim tại sleepbox, rồi đi dạo công viên Tầm Vu Bình Thạnh sau đó Trung chính thức tỏ tình lúc 2 giờ sáng ngày 25/07/2026.",
    media: [
      {
        type: "image",
        src: "assets/image/pic13.jpg",
        title: "Mì cay Sasin",
        kicker: "Đi ăn Mì cayy cùng em dy",
        description: "Khởi động buổi date bằng mì cay Sasin nóng bỏng.",
      },
      {
        type: "image",
        src: "assets/image/pic14.jpg",
        title: "Conan Movie 29",
        kicker: "Xem phim",
        description: "Cùng xem Conan Movie 29 tại rạp CGV, phim hay nhooo.",
      },
      {
        type: "image",
        src: "assets/image/pic15.jpg",
        title: "Sleepbox & Netflix and Chill",
        kicker: "Sleepbox",
        description: "Sau đó nghỉ tại sleepbox, xem Netflix và chill nhẹ.",
      },
    ],
    reverse: false,
  },
  {
    date: "01/08/2026 - Buổi date thứ 5 (Đã là người yêu chính thức)",
    title: "Photobooth, pasta và Spider-Man",
    summary:
      "Chúng tôi quất ngay mấy tấm ảnh tại photobooth, đi ăn pasta tại Bình Thạnh và một buổi xem Spider-Man: Brand New Day.",
    media: [
      {
        type: "image",
        src: "assets/image/pic16.jpg",
        title: "Photobooth",
        kicker: "Tấm ảnh xịn nhất từ trước tới giờ nèee",
        description: "Khoảnh khắc chụp photobooth cùng nhau.",
      },
      {
        type: "video",
        src: "assets/video/vid2.mp4",
        title: "Video photobooth",
        kicker: "Edit video photobooth",
        description:
          "Video ghi lại khoảnh khắc cực dễ thươngg khi chụp photobooth ngày 01/08/2026.",
      },
      {
        type: "image",
        src: "assets/image/pic17.jpg",
        title: "Chease pasta Bình Thạnh",
        kicker: "Ăn tối với em người iu siu cấp dễ thươnggg",
        description: "Ăn chease pasta Bình Thạnh sau khi chụp ảnh.",
      },
      {
        type: "image",
        src: "assets/image/pic18.jpg",
        title: "Spider-Man: Brand New Day",
        kicker: "Xem phim",
        description:
          "Chúng tôi ii xem phim Spider-Man: Brand New Day và sau đó là đi cafe lười cực kì thân mật :>>.",
      },
    ],
    reverse: true,
  },
];

const galleryData = [
  {
    src: "assets/image/pic20.jpg",
    title: "Ảnh đáng yêu của hai đứa",
    description:
      "Một khung ảnh riêng để giữ lại nụ cười và năng lượng dịu dàng nhất.",
    kicker: "Khỉ và gà connn",
  },
  {
    src: "assets/image/pic19.jpg",
    title: "Selfie cùng nhau nèe",
    description: "Cùng nhau đi qua những ngày bình thường thành đáng nhớ.",
    kicker: "Em Vy siu đáng iuu",
  },
  {
    src: "assets/image/pic21.jpg",
    title: "Khoảnh khắc ngọt ngào",
    description: "Thêm một khung hình lưu giữ kỉ niệm dịu dàng của hai đứa.",
    kicker: "Sleepbox nèee",
  },
];

const profileGrid = document.getElementById("profile-grid");
const storyTimeline = document.getElementById("story-timeline");
const galleryGrid = document.getElementById("gallery-grid");
const modal = document.getElementById("media-modal");
const modalMedia = document.getElementById("modal-media");
const modalTitle = document.getElementById("modal-title");
const modalKicker = document.getElementById("modal-kicker");
const modalDescription = document.getElementById("modal-description");
const modalClose = document.getElementById("modal-close");
const heartField = document.getElementById("heart-field");
const loveFab = document.getElementById("love-fab");
const loveSound = document.getElementById("love-sound");

function buildPlaceholderSvg(title, subtitle, kind = "image") {
  const safeTitle = String(title).replace(/[<>&"]/g, "");
  const safeSubtitle = String(subtitle).replace(/[<>&"]/g, "");
  const playMarkup =
    kind === "video"
      ? `
        <g transform="translate(400 430)">
          <circle r="92" fill="#ffffff" fill-opacity="0.52" />
          <circle r="72" fill="#ffffff" fill-opacity="0.82" />
          <path d="M-22 -34 L42 0 L-22 34 Z" fill="#b85b4b" />
        </g>
      `
      : "";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" role="img" aria-label="${safeTitle}">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f7ddd4" />
          <stop offset="100%" stop-color="#dfe9df" />
        </linearGradient>
      </defs>
      <rect width="800" height="1000" rx="54" fill="url(#g)" />
      <circle cx="680" cy="150" r="120" fill="#ffffff" fill-opacity="0.32" />
      <circle cx="140" cy="820" r="150" fill="#ffffff" fill-opacity="0.18" />
      ${playMarkup}
      ${kind === "video" ? `<text x="50%" y="71%" text-anchor="middle" fill="#735d53" font-size="24" font-family="Segoe UI, Arial, sans-serif" letter-spacing="0.22em">VIDEO PREVIEW</text>` : ""}
      <text x="50%" y="46%" text-anchor="middle" fill="#5b4b43" font-size="42" font-family="Segoe UI, Arial, sans-serif" font-weight="700">${safeTitle}</text>
      <text x="50%" y="54%" text-anchor="middle" fill="#735d53" font-size="26" font-family="Segoe UI, Arial, sans-serif">${safeSubtitle}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const RELATIONSHIP_START = new Date(2026, 4, 28);

function getVideoPreviewTime(videoElement) {
  const duration = Number(videoElement.duration);

  if (Number.isFinite(duration) && duration > 0.2) {
    return duration / 2;
  }

  return 0.1;
}

function formatDateVN(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function countDaysInclusive(startDate, endDate) {
  const startUtc = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
  );
  const endUtc = Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate(),
  );

  return Math.max(0, Math.round((endUtc - startUtc) / 86400000));
}

function setupRelationshipCounter() {
  const counter = document.getElementById("relationship-counter");
  if (!counter) {
    return;
  }

  const today = new Date();
  const dayCount = countDaysInclusive(RELATIONSHIP_START, today);

  counter.textContent = `Thời gian quen nhau từ 28/05/2026 tới hiện tại (${dayCount} ngày)`;
}

function setupScrollTopButton() {
  const scrollTopButton = document.getElementById("scroll-top-btn");
  if (!scrollTopButton) {
    return;
  }

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setImageFallback(imageElement) {
  imageElement.addEventListener(
    "error",
    () => {
      const title = imageElement.alt || imageElement.dataset.title || "Media";
      const subtitle = imageElement.dataset.subtitle || "Ảnh sẽ hiển thị ở đây";
      imageElement.src = buildPlaceholderSvg(
        title,
        subtitle,
        imageElement.dataset.kind || "image",
      );
    },
    { once: true },
  );
}

function captureVideoPoster(videoElement) {
  const drawPoster = () => {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = videoElement.videoWidth || 800;
      canvas.height = videoElement.videoHeight || 1000;
      const context = canvas.getContext("2d");

      if (!context) {
        return;
      }

      context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      videoElement.poster = canvas.toDataURL("image/jpeg", 0.86);
      const previewImage = document.querySelector(
        `button[data-src="${CSS.escape(videoElement.dataset.src || "")}"] img[data-preview-role="video-thumbnail"]`,
      );

      if (previewImage) {
        previewImage.src = videoElement.poster;
      }
    } catch (error) {
      videoElement.poster = buildPlaceholderSvg(
        videoElement.dataset.title || "Video",
        videoElement.dataset.subtitle || "Video preview",
        "video",
      );
    }
  };

  const seekAndCapture = () => {
    const previewTime = getVideoPreviewTime(videoElement);

    if (Math.abs(videoElement.currentTime - previewTime) <= 0.05) {
      drawPoster();
      return;
    }

    videoElement.addEventListener("seeked", drawPoster, { once: true });

    try {
      videoElement.currentTime = previewTime;
    } catch (error) {
      drawPoster();
    }
  };

  if (videoElement.readyState >= 1) {
    seekAndCapture();
    return;
  }

  videoElement.addEventListener("loadedmetadata", seekAndCapture, {
    once: true,
  });
}

function createRevealClass(side) {
  if (side === "left") {
    return "reveal from-left";
  }

  if (side === "right") {
    return "reveal from-right";
  }

  return "reveal";
}

function buildProfiles() {
  profileGrid.innerHTML = profileData
    .map(
      (person, index) => `
        <article class="profile-card ${index % 2 === 1 ? "reverse" : ""} ${createRevealClass(person.side)}" data-reveal>
          <div class="profile-copy">
            <p class="profile-label">${index === 0 ? "Trung" : "Vy"}</p>
            <h3>${person.name}</h3>
            <p><strong>Ngày sinh:</strong> ${person.birthday}</p>
            <p>${person.school}</p>
            <div class="profile-facts">
              <p class="fact-line">${person.hobbies}</p>
              <p class="fact-line">${person.strengths}</p>
              <p class="fact-line">${person.weaknesses}</p>
              <p class="fact-line">${person.job}</p>
            </div>
          </div>
          <div class="profile-media">
            <div class="media-frame">
              <img src="${person.image}" alt="${person.alt}" data-kind="image" data-subtitle="Ảnh giới thiệu" loading="lazy" decoding="async" />
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function createMediaMarkup(item) {
  const isVideo = item.type === "video";
  const preview = buildPlaceholderSvg(
    item.title,
    item.kicker,
    isVideo ? "video" : "image",
  );

  return `
    <button
      class="story-thumb ${isVideo ? "story-thumb-video" : ""}"
      type="button"
      data-action="open-media"
      data-type="${item.type}"
      data-src="${item.src}"
      data-title="${item.title}"
      data-kicker="${item.kicker}"
      data-description="${item.description}"
      data-caption="${item.title}"
      aria-label="Mở ${item.title}"
    >
      <span class="story-thumb-visual">
        <img src="${isVideo ? preview : item.src}" alt="${item.title}" data-kind="image" data-preview-role="${isVideo ? "video-thumbnail" : "image-thumbnail"}" data-src="${isVideo ? item.src : ""}" data-subtitle="${item.kicker}" loading="lazy" decoding="async" />
      </span>
      ${
        isVideo
          ? `<span class="story-play-center" aria-hidden="true"><span class="story-play-center-icon">▶</span></span>`
          : ""
      }
    </button>
  `;
}

function buildStoryRow(mediaItem, mediaIndex, totalCount) {
  const reverse = mediaIndex % 2 === 1;

  return `
    <article class="story-media-row ${reverse ? "reverse" : ""}">
      <div class="story-row-copy">
        <p class="story-row-kicker">${mediaItem.kicker}</p>
        <h4>${mediaItem.title}</h4>
        <p>${mediaItem.description}</p>
      </div>
      <div class="story-row-media">
        ${createMediaMarkup(mediaItem)}
      </div>
    </article>
  `;
}

function buildStory() {
  storyTimeline.innerHTML = storyData
    .map(
      (entry, index) => `
        <article class="story-item ${entry.reverse ? "reverse" : ""} ${index % 2 === 0 ? "reveal from-left" : "reveal from-right"}" data-reveal>
          <div class="story-copy">
            <span class="story-date">${entry.date}</span>
            <h3>${entry.title}</h3>
            <p>${entry.summary}</p>
            <div class="story-media-stack">
              ${entry.media.map((mediaItem, mediaIndex) => buildStoryRow(mediaItem, mediaIndex, entry.media.length)).join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function buildGallery() {
  galleryGrid.innerHTML = galleryData
    .map(
      (item) => `
        <article class="gallery-card reveal" data-reveal>
          <button
            class="gallery-thumb"
            type="button"
            data-action="open-media"
            data-type="image"
            data-src="${item.src}"
            data-title="${item.title}"
            data-kicker="${item.kicker}"
            data-description="${item.description}"
            data-caption="${item.title}"
            aria-label="Mở ${item.title}"
          >
            <img src="${item.src}" alt="${item.title}" data-kind="image" data-subtitle="${item.kicker}" loading="lazy" decoding="async" />
          </button>
          <div class="gallery-copy">
            <span class="gallery-pill">${item.kicker}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function openMedia({ type, src, title, kicker, description }) {
  modalMedia.innerHTML = "";
  modalTitle.textContent = title;
  modalKicker.textContent = kicker;
  modalDescription.textContent = description;

  if (type === "video") {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.poster = buildPlaceholderSvg(title, kicker, "video");
    modalMedia.appendChild(video);
  } else {
    const image = document.createElement("img");
    image.src = src;
    image.alt = title;
    image.loading = "eager";
    image.decoding = "async";
    image.dataset.kind = "image";
    image.addEventListener(
      "error",
      () => {
        image.src = buildPlaceholderSvg(title, kicker, "image");
      },
      { once: true },
    );
    modalMedia.appendChild(image);
  }

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "open");
  }
}

function closeMedia() {
  if (modal.open) {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }

  modalMedia.innerHTML = "";
}

function triggerHeartBurst() {
  const heartCount = 36;
  const symbols = ["❤", "♥", "❥", "♡"];

  for (let index = 0; index < heartCount; index += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-particle";
    heart.textContent = symbols[index % symbols.length];

    const left = Math.random() * 100;
    const top = -10 + Math.random() * 14;
    const drift = -120 + Math.random() * 240;
    const spin = -520 + Math.random() * 1040;
    const size = 14 + Math.random() * 20;
    const duration = 2.6 + Math.random() * 2.1;

    heart.style.setProperty("--left", `${left}%`);
    heart.style.setProperty("--top", `${top}%`);
    heart.style.setProperty("--drift", `${drift}px`);
    heart.style.setProperty("--spin", `${spin}deg`);
    heart.style.setProperty("--size", `${size}px`);
    heart.style.setProperty("--duration", `${duration}s`);

    heartField.appendChild(heart);
    window.setTimeout(() => heart.remove(), duration * 1000 + 500);
  }
}

function setupRevealObserver() {
  const elements = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  elements.forEach((element) => observer.observe(element));
}

function setupScrollButtons() {
  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.scrollTarget);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupMediaTriggers() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-action='open-media']");
    if (!trigger) {
      return;
    }

    openMedia({
      type: trigger.dataset.type,
      src: trigger.dataset.src,
      title: trigger.dataset.title,
      kicker: trigger.dataset.kicker,
      description: trigger.dataset.description,
    });
  });
}

function setupModalHandlers() {
  modalClose.addEventListener("click", closeMedia);

  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
    const clickedInside =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;

    if (!clickedInside) {
      closeMedia();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.open) {
      closeMedia();
    }
  });
}

function setupLoveButton() {
  loveFab.addEventListener("click", async () => {
    triggerHeartBurst();

    try {
      loveSound.currentTime = 0;
      await loveSound.play();
    } catch (error) {}
  });
}

function setupImageFallbacks() {
  document.querySelectorAll("img").forEach((imageElement) => {
    setImageFallback(imageElement);
  });
}

function setupGalleryDrag() {
  if (!galleryGrid) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  galleryGrid.addEventListener("mousedown", (e) => {
    isDown = true;
    galleryGrid.classList.add("is-dragging");
    startX = e.pageX - galleryGrid.offsetLeft;
    scrollLeft = galleryGrid.scrollLeft;
  });

  galleryGrid.addEventListener("mouseleave", () => {
    isDown = false;
    galleryGrid.classList.remove("is-dragging");
  });

  galleryGrid.addEventListener("mouseup", () => {
    isDown = false;
    galleryGrid.classList.remove("is-dragging");
  });

  galleryGrid.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - galleryGrid.offsetLeft;
    const walk = (x - startX) * 1.5;
    galleryGrid.scrollLeft = scrollLeft - walk;
  });
}

function setupVideoPosters() {
  document
    .querySelectorAll(
      "button[data-type='video'] img[data-preview-role='video-thumbnail']",
    )
    .forEach((thumbnailImage) => {
      const videoSource = thumbnailImage.dataset.src;
      if (!videoSource) {
        return;
      }

      const hiddenVideo = document.createElement("video");
      hiddenVideo.src = videoSource;
      hiddenVideo.muted = true;
      hiddenVideo.playsInline = true;
      hiddenVideo.preload = "auto";
      hiddenVideo.hidden = true;
      hiddenVideo.dataset.src = videoSource;

      const applyPoster = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = hiddenVideo.videoWidth || 800;
          canvas.height = hiddenVideo.videoHeight || 1000;
          const context = canvas.getContext("2d");

          if (!context) {
            return;
          }

          context.drawImage(hiddenVideo, 0, 0, canvas.width, canvas.height);
          thumbnailImage.src = canvas.toDataURL("image/jpeg", 0.9);
        } catch (error) {
          thumbnailImage.src = buildPlaceholderSvg(
            thumbnailImage.alt || "Video",
            thumbnailImage.dataset.subtitle || "Video preview",
            "video",
          );
        } finally {
          hiddenVideo.remove();
        }
      };

      hiddenVideo.addEventListener(
        "loadedmetadata",
        () => {
          try {
            hiddenVideo.currentTime = getVideoPreviewTime(hiddenVideo);
          } catch (error) {
            applyPoster();
          }
        },
        { once: true },
      );

      hiddenVideo.addEventListener(
        "seeked",
        () => {
          window.requestAnimationFrame(applyPoster);
        },
        { once: true },
      );

      hiddenVideo.addEventListener(
        "error",
        () => {
          thumbnailImage.src = buildPlaceholderSvg(
            thumbnailImage.alt || "Video",
            thumbnailImage.dataset.subtitle || "Video preview",
            "video",
          );
          hiddenVideo.remove();
        },
        { once: true },
      );

      document.body.appendChild(hiddenVideo);
      hiddenVideo.load();
    });
}

buildProfiles();
buildStory();
buildGallery();
setupImageFallbacks();
setupVideoPosters();
setupRevealObserver();
setupScrollButtons();
setupMediaTriggers();
setupModalHandlers();
setupLoveButton();
setupRelationshipCounter();
setupScrollTopButton();
setupGalleryDrag();
