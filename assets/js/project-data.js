// projects-data.js
window.PROJECTS = {
  "movies-kids": {
    id: "movies-kids",
    title: "Movies & Kids – Video Explainer",
    meta: "Motion Reels · 2024",
    year: "2024",
    category: "motion reels",
    tags: ["Motion Reels", "Thesis Project"],
    status: "Finished", // or "WIP"
    description:
      "A motion graphic explainer about the psychological impact of films on children.",
    role: "Motion Designer · Storyboard · Illustration · Animation.",
    software: [
      { name: "Illustrator", icon: "assets/images/icon/illustrator.ico" },
      { name: "Photoshop", icon: "assets/images/icon/photoshop.ico" },
      { name: "After Effect", icon: "assets/images/icon/aftereffect.ico" },
      { name: "Premiere Pro", icon: "assets/images/icon/premierepro.ico" }
    ],
    media: [
      {
        type: "youtube",
        src: "https://youtu.be/leoghi5n2cA",
        title: "Movies & Kids – [Motion Graphic] Video Explainer"
      },
    ]
  },

  "sportbot": {
    id: "sportbot",
    title: "Sportbot – 3D Showcase",
    meta: "3D Showcase · 2022–2024",
    year: "2022–2024",
    category: "3D showcase",
    tags: ["3D Showcase", "Studio Work"],
    status: "Finished", // or "WIP"
    description:
      "A 3D prop showcase of a futuristic sports robot designed for athletic performance and agility. " +
      "Created at Hompimpa Animworks for the Sportbot animated series IP.",
    role: "3D Prop Artist · Modeling · Texturing · Preview Renderer.",
    software: [
      { name: "Blender", icon: "assets/images/icon/blender.ico" },
      { name: "Substance Painter", icon: "assets/images/icon/substance.ico" },
      { name: "Photoshop", icon: "assets/images/icon/photoshop.ico" }
    ],
      mediaGroups: [
        {
      key: "environment",
      label: "Environment",
      media: window.GENERATED_MEDIA["sportbot-env"]
    },
    {
      key: "prop",
      label: "Prop",
      media: window.GENERATED_MEDIA["sportbot-prop"]
    },
    {
      key: "character",
      label: "Character",
      media: window.GENERATED_MEDIA["sportbot-char"]
    },
    
  ],
  },

  "loconuts": {
    id: "loconuts",
    title: "Loconuts – 3D Showcase",
    meta: "3D Showcase · 2022–2024",
    year: "2022–2024",
    category: "3D showcase",
    tags: ["3D Showcase", "Studio Work"],
    status: "Finished", // or "WIP"
    description:
      "A 3D prop showcase of a futuristic sports robot designed for athletic performance and agility. " +
      "Created at Hompimpa Animworks for the Sportbot animated series IP.",
    role: "3D Prop Artist · Modeling · Texturing · Preview Renderer.",
    software: [
      { name: "Blender", icon: "assets/images/icon/blender.ico" },
      { name: "Substance Painter", icon: "assets/images/icon/substance.ico" },
      { name: "Photoshop", icon: "assets/images/icon/photoshop.ico" }
    ],
    media: window.GENERATED_MEDIA["loconuts"]
  },

  "dinobees": {
    id: "dinobees",
    title: "Dinobees – 3D Showcase",
    meta: "3D Showcase · 2022–2024",
    year: "2022–2024",
    category: "3D showcase",
    tags: ["3D Showcase", "Studio Work"],
    status: "Finished", // or "WIP"
    description:
      "A 3D prop showcase of a futuristic sports robot designed for athletic performance and agility. " +
      "Created at Hompimpa Animworks for the Sportbot animated series IP.",
    role: "3D Prop Artist · Modeling · Texturing · Preview Renderer.",
    software: [
      { name: "Blender", icon: "assets/images/icon/blender.ico" },
      { name: "Substance Painter", icon: "assets/images/icon/substance.ico" },
      { name: "Photoshop", icon: "assets/images/icon/photoshop.ico" },
  
  
 
    ],
    media: window.GENERATED_MEDIA["dinobees"]
  },

  "booya": {
    id: "booya",
    title: "Booya – 3D Showcase",
    meta: "3D Showcase · 2022–2024",
    year: "2022–2024",
    category: "3D showcase",
    tags: ["3D Showcase", "Studio Work"],
    status: "Finished", // or "WIP"
    description:
      "A 3D prop showcase of a futuristic sports robot designed for athletic performance and agility. " +
      "Created at Hompimpa Animworks for the Sportbot animated series IP.",
    role: "3D Prop Artist · Modeling · Texturing · Preview Renderer.",
    software: [
      { name: "Blender", icon: "assets/images/icon/blender.ico" },
      { name: "Substance Painter", icon: "assets/images/icon/substance.ico" },
      { name: "Photoshop", icon: "assets/images/icon/photoshop.ico" }
    ],
    media: window.GENERATED_MEDIA["booya"]
  },

   "personal-project": {
    id: "personal-project",
    title: "Personal Project – 3D Showcase",
    meta: "3D Showcase · 2020–2025",
    year: "2020–2025",
    category: "3D showcase",
    tags: ["3D Showcase", "Studio Work"],
    status: "Finished",
    description:
      "A multi-category personal 3D project showcasing props, characters, environments and supporting illustration work. " +
      "This self-directed series (2020–2025) documents end-to-end workflows: concept, blockout, detailed modeling, UV/layout, PBR texturing, look-dev, lighting and final compositing. " +
      "Pieces include turntable renders, stylized toon-shading experiments, and composited stills prepared for web portfolio. Work demonstrates iterative process, toolchains (Blender, Substance, Photoshop) and presentation techniques.",
    role: "3D Prop Artist · Modeling · Texturing · Look-Dev · Presentation.",
    software: [
      { name: "Blender", icon: "assets/images/icon/blender.ico" },
      { name: "Photoshop", icon: "assets/images/icon/photoshop.ico" }
    ],
    mediaGroups: [
      {
        key: "toonshading",
        label: "Toon Shading",
        media: window.GENERATED_MEDIA["personal-project-toonshading"]
      },
      {
        key: "character",
        label: "Character",
        media: window.GENERATED_MEDIA["personal-project-char"]
      },
      {
        key: "environment",
        label: "Environment",
        media: window.GENERATED_MEDIA["personal-project-env"]
      },
      {
        key: "illustration",
        label: "Illustration",
        media: window.GENERATED_MEDIA["personal-project-illustration"]
      },
      {
        key: "weapon",
        label: "Weapon",
        media: window.GENERATED_MEDIA["personal-project-weapon"]
      },
      {
        key: "prop",
        label: "Prop",
        media: window.GENERATED_MEDIA["personal-project-prop"]
      }
    ],
  },

  "personal-project-sketch": {
    id: "personal-project-sketch",
    title: "Sketch – Personal Project",
    meta: "Personal Project · 2020–2024",
    year: "2020–2024",
    category: "personal project",
    tags: ["Sketch", "Personal Work"],
    status: "Finished",
    description:
      "A curated collection of concept sketches and design studies produced as rapid ideation and deeper exploratory pieces. " +
      "The series focuses on gesture, silhouette, composition and value studies to quickly establish visual direction for 3D characters, props and environments. " +
      "Work was created using Procreate and Photoshop and includes both thumbnail iterations and refined line studies used as references for later 3D modeling.",
    role: "Concept Artist · Thumbnails · Visual Development.",
    software: [
      { name: "Photoshop", icon: "assets/images/icon/photoshop.ico" },
    ],
    media: window.GENERATED_MEDIA["personal-project-sketch"] || []
  },

  "personal-project-digital-painting": {
    id: "personal-project-digital-painting",
    title: "Digital Painting – Personal Project",
    meta: "Personal Project · 2020–2024",
    year: "2020–2024",
    category: "personal project",
    tags: ["Digital Painting", "Personal Work"],
    status: "Finished",
    description:
      "A body of digital illustrations exploring color, lighting, mood and narrative composition. " +
      "Pieces range from quick color studies and portrait practice to completed environment paintings and illustrative scenes. " +
      "Each painting includes process work such as color keys, value breakdowns and compositional thumbnails. Primary tools: Photoshop and Procreate.",
    role: "Digital Painter · Color & Lighting Studies · Illustration.",
    software: [
      { name: "Photoshop", icon: "assets/images/icon/photoshop.ico" },
    ],
    media: window.GENERATED_MEDIA["personal-project-digital-painting"] || []
  },
};

// globals for lightbox
window.currentProjectMedia = [];
window.currentProjectMediaIndex = 0;

// -----------------------------
// Helpers
// -----------------------------

function toYouTubeEmbed(url) {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") {
      return "https://www.youtube.com/embed/" + u.pathname.slice(1) + "?rel=0";
    }
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return "https://www.youtube.com/embed/" + v + "?rel=0";
      if (u.pathname.startsWith("/embed/")) return url;
    }
  } catch (e) {
    // ignore
  }
  return url;
}

// -----------------------------
// Project detail page rendering
// -----------------------------

function renderProjectDetailPage() {
  // only run on project.html
  if (!document.body.classList.contains("project-page-body")) return;
  if (!window.PROJECTS) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = window.PROJECTS[id];

  if (!project) {
    const title = document.getElementById("projectTitle");
    if (title) title.textContent = "Project not found";
    return;
  }

  const mediaRoot = document.getElementById("projectPageMedia");
  const titleEl = document.getElementById("projectTitle");
  const metaEl = document.getElementById("projectMeta");
  const descEl = document.getElementById("projectDescription");
  const roleEl = document.getElementById("projectRole");
  const toolsEl = document.getElementById("projectTools");
  const tagsEl = document.getElementById("projectTags");
  const statusEl = document.getElementById("projectStatus");

  // store media globally for lightbox
  window.currentProjectMedia = project.media || [];
  window.currentProjectMediaIndex = 0;

  // basic text
  if (titleEl) titleEl.textContent = project.title || "";
  if (metaEl) metaEl.textContent = project.meta || project.year || "";
  if (descEl) descEl.textContent = project.description || "";
  if (roleEl) roleEl.textContent = project.role || "";

  // status badge
  if (statusEl) {
    statusEl.textContent = project.status || "";
    statusEl.classList.remove("status-finished", "status-wip");
    if (project.status) {
      const s = project.status.toLowerCase();
      statusEl.classList.add(
        s.includes("wip") ? "status-wip" : "status-finished"
      );
    }
  }

    const mediaTabsRoot = document.getElementById("projectMediaTabs");

  // Helper: render one gallery based on a media list
  function renderMediaList(mediaList) {
    mediaRoot.innerHTML = "";
    const current = [];

    (mediaList || []).forEach((m, index) => {
      const card = document.createElement("article");
      card.className =
        "project-media-card" + (index === 0 ? " project-media-card--hero" : "");

      if (m.type === "image") {
        const img = document.createElement("img");
        img.src = m.src;
        img.alt = m.title || project.title || "";
        img.loading = "lazy";
        card.appendChild(img);
      } else if (m.type === "youtube") {
        const wrap = document.createElement("div");
        wrap.className = "project-media-video";
        const inner = document.createElement("div");
        inner.className = "project-media-video__inner";

        const iframe = document.createElement("iframe");
        iframe.src = toYouTubeEmbed(m.src);
        iframe.title = m.title || project.title || "Video";
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        );

        inner.appendChild(iframe);
        wrap.appendChild(inner);
        card.appendChild(wrap);
      } else if (m.type === "model") {
        const mv = document.createElement("model-viewer");
        mv.src = m.src;
        mv.setAttribute("camera-controls", "");
        mv.setAttribute("auto-rotate", "");
        mv.setAttribute("alt", m.title || project.title || "3D model");
        card.appendChild(mv);
      }

      // store index for lightbox
      card.dataset.mediaIndex = String(index);

      mediaRoot.appendChild(card);
      current.push(m);
    });

    // store media globally for lightbox / fullscreen
    window.currentProjectMedia = current;
    window.currentProjectMediaIndex = 0;
  }

  // Decide initial media + build tabs (if any)
  let initialMedia = project.media || [];

  if (project.mediaGroups && project.mediaGroups.length && mediaTabsRoot) {
    const urlGroup = params.get("group");
    let activeKey = urlGroup;

    if (!activeKey || !project.mediaGroups.some((g) => g.key === activeKey)) {
      activeKey = project.mediaGroups[0].key;
    }

    mediaTabsRoot.innerHTML = "";

    project.mediaGroups.forEach((group) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "project-media-tab" +
        (group.key === activeKey ? " project-media-tab--active" : "");
      btn.textContent = group.label;

      btn.addEventListener("click", () => {
        // update URL ?group=...
        const newParams = new URLSearchParams(window.location.search);
        newParams.set("group", group.key);
        const newUrl =
          window.location.pathname + "?" + newParams.toString();
        window.history.replaceState({}, "", newUrl);

        // update active state
        mediaTabsRoot
          .querySelectorAll(".project-media-tab")
          .forEach((node) => {
            node.classList.toggle(
              "project-media-tab--active",
              node === btn
            );
          });

        // render new gallery
        renderMediaList(group.media || project.media || []);
      });

      mediaTabsRoot.appendChild(btn);
    });

    const initialGroup =
      project.mediaGroups.find((g) => g.key === activeKey) ||
      project.mediaGroups[0];

    initialMedia = initialGroup.media || project.media || [];
  } else if (mediaTabsRoot) {
    // no groups for this project → empty tabs bar
    mediaTabsRoot.innerHTML = "";
  }

  // Initial render
  renderMediaList(initialMedia);

  // end renderMediaList

  // software badges
  if (toolsEl) {
    toolsEl.innerHTML = "";
    (project.software || []).forEach((tool) => {
      const badge = document.createElement("div");
      badge.className = "tool-badge";

      if (tool.icon) {
        const img = document.createElement("img");
        img.src = tool.icon;
        img.alt = tool.name || "";
        badge.appendChild(img);
      }

      const span = document.createElement("span");
      span.textContent = tool.name;
      badge.appendChild(span);
      toolsEl.appendChild(badge);
    });
  }

  // tags
  if (tagsEl) {
    tagsEl.innerHTML = "";
    (project.tags || []).forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tagsEl.appendChild(span);
    });
  }

  // Prev / Next project navigation
  const keys = Object.keys(window.PROJECTS);
  const idx = keys.indexOf(project.id);

  const prev = document.getElementById("projectPrev");
  const next = document.getElementById("projectNext");

  if (prev) {
    if (idx > 0) {
      const prevId = keys[idx - 1];
      prev.href = `project.html?id=${prevId}`;
      prev.textContent = "← Previous";
      prev.style.visibility = "visible";
    } else {
      prev.style.visibility = "hidden";
    }
  }

  if (next) {
    if (idx < keys.length - 1) {
      const nextId = keys[idx + 1];
      next.href = `project.html?id=${nextId}`;
      next.textContent = "Next →";
      next.style.visibility = "visible";
    } else {
      next.style.visibility = "hidden";
    }
  }
}

// -----------------------------
// Lightbox functions
// -----------------------------

function openProjectLightbox(index) {
  const lb = document.getElementById("projectLightbox");
  const mediaWrap = document.getElementById("projectLightboxMedia");
  if (!lb || !mediaWrap || !Array.isArray(window.currentProjectMedia)) return;

  const mediaList = window.currentProjectMedia;
  if (!mediaList.length) return;

  const safeIndex = Math.max(0, Math.min(index, mediaList.length - 1));
  window.currentProjectMediaIndex = safeIndex;

  const item = mediaList[safeIndex];
  mediaWrap.innerHTML = "";

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.title || "";
    mediaWrap.appendChild(img);
  } else if (item.type === "youtube") {
    const frameWrap = document.createElement("div");
    frameWrap.style.width = "100%";
    frameWrap.style.height = "100%";

    const iframe = document.createElement("iframe");
    iframe.src = toYouTubeEmbed(item.src);
    iframe.title = item.title || "Video";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";

    frameWrap.appendChild(iframe);
    mediaWrap.appendChild(frameWrap);
  } else if (item.type === "model") {
    const mv = document.createElement("model-viewer");
    mv.src = item.src;
    mv.setAttribute("camera-controls", "");
    mv.setAttribute("auto-rotate", "");
    mv.alt = item.title || "3D model";
    mediaWrap.appendChild(mv);
  }

  lb.classList.add("is-open");
  lb.setAttribute("aria-hidden", "false");
}

function closeProjectLightbox() {
  const lb = document.getElementById("projectLightbox");
  const mediaWrap = document.getElementById("projectLightboxMedia");
  if (!lb || !mediaWrap) return;
  lb.classList.remove("is-open");
  lb.setAttribute("aria-hidden", "true");
  mediaWrap.innerHTML = "";
}

function nextProjectLightbox(delta) {
  if (!Array.isArray(window.currentProjectMedia)) return;
  const total = window.currentProjectMedia.length;
  if (!total) return;

  const nextIndex =
    (window.currentProjectMediaIndex + delta + total) % total;
  openProjectLightbox(nextIndex);
}

// -----------------------------
// Init on DOMContentLoaded
// -----------------------------

document.addEventListener("DOMContentLoaded", function () {
  // render project page if we're on project.html
  renderProjectDetailPage();

  // setup lightbox controls (only if markup exists)
  const lb = document.getElementById("projectLightbox");
  if (!lb) return;

  const closeBtn = lb.querySelector(".project-lightbox__close");
  const prevBtn = lb.querySelector(".project-lightbox__nav--prev");
  const nextBtn = lb.querySelector(".project-lightbox__nav--next");
  const backdrop = lb.querySelector(".project-lightbox__backdrop");

  if (closeBtn) closeBtn.addEventListener("click", closeProjectLightbox);
  if (backdrop) backdrop.addEventListener("click", closeProjectLightbox);
  if (prevBtn)
    prevBtn.addEventListener("click", function () {
      nextProjectLightbox(-1);
    });
  if (nextBtn)
    nextBtn.addEventListener("click", function () {
      nextProjectLightbox(1);
    });

  document.addEventListener("keydown", function (ev) {
    if (!lb.classList.contains("is-open")) return;
    if (ev.key === "Escape") {
      closeProjectLightbox();
    } else if (ev.key === "ArrowRight") {
      nextProjectLightbox(1);
    } else if (ev.key === "ArrowLeft") {
      nextProjectLightbox(-1);
    }
  });
});
