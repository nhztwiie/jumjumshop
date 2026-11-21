const STORAGE_KEYS = {
  PRODUCTS: "jumjum_products_v1",
  TOPPINGS: "jumjum_toppings_v1",
  VOUCHERS: "jumjum_vouchers_v1",
  ORDERS: "jumjum_orders_v1",
  CART: "jumjum_cart_v1",
  EJS: "jumjum_emailjs_v1",
  THEME_MODE: "jumjum_theme_mode_v1"
};

const DEFAULT_PRODUCTS = [
  { id: "p1", name: "Trà Sữa JUMJUM Signature", category: "Trà sữa", price: 28000, desc: "Trà ủ đậm vị, sữa béo mịn, thơm dịu." },
  { id: "p2", name: "Trà Nhài Kem Cheese", category: "Trà trái cây & Cheese", price: 32000, desc: "Hương nhài thanh mát phủ lớp kem cheese mặn ngọt." },
  { id: "p3", name: "Hồng Trà Đào Cam Sả", category: "Trà trái cây & Cheese", price: 30000, desc: "Tươi mát, cân bằng vị chua ngọt và hương sả." },
  { id: "p4", name: "Khoai Tây Lắc Phô Mai", category: "Ăn vặt", price: 25000, desc: "Giòn rụm nóng hổi, phủ đều bột phô mai." }
];

const DEFAULT_TOPPINGS = [
  { id: "t1", name: "Trân châu đen", price: 6000 },
  { id: "t2", name: "Pudding trứng", price: 8000 },
  { id: "t3", name: "Kem cheese", price: 10000 }
];

const DEFAULT_VOUCHERS = {
  JUMJUM10: 10,
  PHUTAN15: 15
};

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatVND(amount) {
  return Number(amount || 0).toLocaleString("vi-VN") + " ₫";
}

function getAutoThemeByClock() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? "light" : "dark";
}

function initClockAndTheme() {
  const clockEl = document.getElementById("live-clock");
  const themeBtn = document.getElementById("theme-toggle-btn");
  let mode = localStorage.getItem(STORAGE_KEYS.THEME_MODE) || "auto";

  const applyTheme = () => {
    const activeTheme = mode === "auto" ? getAutoThemeByClock() : mode;
    document.documentElement.setAttribute("data-theme", activeTheme);
    if (themeBtn) {
      themeBtn.textContent = mode === "auto"
        ? `🌓 Tự động (${activeTheme === "light" ? "Sáng" : "Tối"})`
        : activeTheme === "light"
          ? "☀️ Chế độ Sáng"
          : "🌙 Chế độ Tối";
    }
  };

  const tickClock = () => {
    const now = new Date();
    if (clockEl) {
      clockEl.textContent = now.toLocaleString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    }
    if (mode === "auto") applyTheme();
  };

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      if (mode === "auto") mode = "light";
      else if (mode === "light") mode = "dark";
      else mode = "auto";
      localStorage.setItem(STORAGE_KEYS.THEME_MODE, mode);
      applyTheme();
    });
  }

  tickClock();
  setInterval(tickClock, 1000);
}

function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  const pointer = { x: width / 2, y: height / 2, active: false };

  const particles = Array.from({ length: 42 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    r: Math.random() * 2.8 + 1.2
  }));

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener("pointermove", (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.active = true;
  });

  const render = () => {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    ctx.fillStyle = isDark ? "rgba(130, 190, 255, 0.45)" : "rgba(47, 128, 237, 0.32)";

    for (const p of particles) {
      if (pointer.active) {
        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < 130) {
          p.vx += (dx / dist) * 0.03;
          p.vy += (dy / dist) * 0.03;
        }
      }
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.985;
      p.vy *= 0.985;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(render);
  };
  render();
}

function initAudioPlayer() {
  const audio = document.getElementById("bg-audio");
  const btn = document.getElementById("audio-toggle-btn");
  if (!audio || !btn) return;

  const updateLabel = () => {
    btn.textContent = audio.paused ? "♪ Nhạc nền: Tắt" : "♪ Nhạc nền: Đang phát";
  };

  btn.addEventListener("click", async () => {
    try {
      if (audio.paused) await audio.play();
      else audio.pause();
    } catch {
      btn.textContent = "♪ Không tìm thấy nhạc";
    }
    updateLabel();
  });

  audio.addEventListener("play", updateLabel);
  audio.addEventListener("pause", updateLabel);
  updateLabel();
}

function initShopPage() {
  const products = readJSON(STORAGE_KEYS.PRODUCTS, DEFAULT_PRODUCTS);
  const toppings = readJSON(STORAGE_KEYS.TOPPINGS, DEFAULT_TOPPINGS);
  const vouchers = readJSON(STORAGE_KEYS.VOUCHERS, DEFAULT_VOUCHERS);
  let cart = readJSON(STORAGE_KEYS.CART, []);
  let appliedDiscountPercent = 0;
  let appliedVoucherCode = "";

  const gridEl = document.getElementById("products-grid");
  const filterEl = document.getElementById("category-filters");
  const searchEl = document.getElementById("search-input");
  const cartListEl = document.getElementById("cart-list");

  let activeCategory = "Tất cả";

  const categories = ["Tất cả", ...new Set(products.map((p) => p.category))];

  const renderFilters = () => {
    filterEl.innerHTML = "";
    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `chip ${cat === activeCategory ? "active" : ""}`;
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        activeCategory = cat;
        renderFilters();
        renderProducts();
      });
      filterEl.appendChild(btn);
    });
  };

  const renderProducts = () => {
    const q = (searchEl.value || "").trim().toLowerCase();
    const filtered = products.filter((p) => {
      const matchCat = activeCategory === "Tất cả" || p.category === activeCategory;
      const matchQuery = !q || p.name.toLowerCase().includes(q) || (p.desc || "").toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    gridEl.innerHTML = "";
    filtered.forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";

      const toppingHtml = toppings
        .map(
          (t) => `
          <label class="topping-item">
            <span><input type="checkbox" class="top-chk" data-tid="${t.id}" />${t.name}</span>
            <span>+${formatVND(t.price)}</span>
          </label>`
        )
        .join("");

      card.innerHTML = `
        <div>
          <div class="product-cat">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc || ""}</div>
          <div class="topping-box">${toppingHtml}</div>
        </div>
        <div>
          <div class="product-price" style="margin-bottom: 8px;">${formatVND(p.price)}</div>
          <button type="button" class="pill primary add-btn" style="width: 100%; justify-content: center;">+ Thêm vào giỏ</button>
        </div>
      `;

      card.querySelector(".add-btn").addEventListener("click", () => {
        const checkedIds = [...card.querySelectorAll(".top-chk:checked")].map((el) => el.dataset.tid);
        const chosenToppings = toppings.filter((t) => checkedIds.includes(t.id));
        const unitPrice = p.price + chosenToppings.reduce((sum, t) => sum + t.price, 0);
        const key = `${p.id}::${chosenToppings.map((t) => t.id).sort().join(",")}`;

        const existing = cart.find((item) => item.key === key);
        if (existing) {
          existing.qty += 1;
        } else {
          cart.push({
            key,
            productId: p.id,
            name: p.name,
            basePrice: p.price,
            toppings: chosenToppings,
            unitPrice,
            qty: 1
          });
        }
        writeJSON(STORAGE_KEYS.CART, cart);
        card.querySelectorAll(".top-chk").forEach((el) => (el.checked = false));
        renderCart();
      });

      gridEl.appendChild(card);
    });
  };

  const getTotals = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);
    const discount = Math.round((subtotal * appliedDiscountPercent) / 100);
    const total = Math.max(0, subtotal - discount);
    return { subtotal, discount, total };
  };

  const renderCart = () => {
    cartListEl.innerHTML = "";
    if (!cart.length) {
      cartListEl.innerHTML = `<p class="brand-sub">Chưa có món nào trong giỏ hàng.</p>`;
    } else {
      cart.forEach((item, idx) => {
        const topNames = item.toppings.map((t) => t.name).join(", ");
        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
          <div>
            <div style="font-weight: 700;">${item.name}</div>
            ${topNames ? `<div class="brand-sub">+ ${topNames}</div>` : ""}
            <div class="qty-controls">
              <button type="button" class="qty-btn dec">-</button>
              <span>${item.qty}</span>
              <button type="button" class="qty-btn inc">+</button>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-weight: 700;">${formatVND(item.unitPrice * item.qty)}</div>
            <button type="button" class="pill danger rm" style="padding: 4px 8px; font-size: 0.75rem; margin-top: 6px;">Xóa</button>
          </div>
        `;

        row.querySelector(".dec").addEventListener("click", () => {
          item.qty -= 1;
          if (item.qty <= 0) cart.splice(idx, 1);
          writeJSON(STORAGE_KEYS.CART, cart);
          renderCart();
        });
        row.querySelector(".inc").addEventListener("click", () => {
          item.qty += 1;
          writeJSON(STORAGE_KEYS.CART, cart);
          renderCart();
        });
        row.querySelector(".rm").addEventListener("click", () => {
          cart.splice(idx, 1);
          writeJSON(STORAGE_KEYS.CART, cart);
          renderCart();
        });
        cartListEl.appendChild(row);
      });
    }

    const { subtotal, discount, total } = getTotals();
    document.getElementById("subtotal-text").textContent = formatVND(subtotal);
    document.getElementById("discount-text").textContent = `-${formatVND(discount)}`;
    document.getElementById("total-text").textContent = formatVND(total);
  };

  document.getElementById("apply-voucher-btn").addEventListener("click", () => {
    const code = (document.getElementById("voucher-input").value || "").trim().toUpperCase();
    const statusEl = document.getElementById("order-status");
    if (vouchers[code]) {
      appliedVoucherCode = code;
      appliedDiscountPercent = vouchers[code];
      statusEl.className = "status-msg ok";
      statusEl.textContent = `Đã áp dụng mã ${code} (giảm ${appliedDiscountPercent}%).`;
    } else {
      appliedVoucherCode = "";
      appliedDiscountPercent = 0;
      statusEl.className = "status-msg err";
      statusEl.textContent = "Mã giảm giá không hợp lệ.";
    }
    renderCart();
  });

  document.getElementById("clear-cart-btn").addEventListener("click", () => {
    cart = [];
    appliedDiscountPercent = 0;
    appliedVoucherCode = "";
    writeJSON(STORAGE_KEYS.CART, cart);
    renderCart();
  });

  document.getElementById("order-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const statusEl = document.getElementById("order-status");
    if (!cart.length) {
      statusEl.className = "status-msg err";
      statusEl.textContent = "Vui lòng chọn ít nhất một món trước khi đặt hàng.";
      return;
    }

    const { subtotal, discount, total } = getTotals();
    const order = {
      id: "JJ" + Date.now().toString().slice(-6),
      createdAt: new Date().toLocaleString("vi-VN"),
      customerName: document.getElementById("customer-name").value.trim(),
      customerPhone: document.getElementById("customer-phone").value.trim(),
      customerAddress: document.getElementById("customer-address").value.trim() || "Nguyễn Văn Cánh, P. Phú Tân, Vĩnh Long",
      paymentMethod: document.getElementById("payment-method").value,
      voucherCode: appliedVoucherCode,
      items: cart,
      subtotal,
      discount,
      total,
      status: "Mới tạo"
    };

    const orders = readJSON(STORAGE_KEYS.ORDERS, []);
    orders.unshift(order);
    writeJSON(STORAGE_KEYS.ORDERS, orders);

    const ejsCfg = readJSON(STORAGE_KEYS.EJS, null);
    if (ejsCfg && ejsCfg.publicKey && ejsCfg.serviceId && ejsCfg.templateId && window.emailjs) {
      try {
        window.emailjs.init({ publicKey: ejsCfg.publicKey });
        const summaryText = order.items
          .map((i) => `${i.name} x${i.qty}${i.toppings.length ? ` (${i.toppings.map((t) => t.name).join(", ")})` : ""}`)
          .join(" | ");
        await window.emailjs.send(ejsCfg.serviceId, ejsCfg.templateId, {
          to_email: ejsCfg.toEmail || "",
          order_id: order.id,
          customer_name: order.customerName,
          customer_phone: order.customerPhone,
          customer_address: order.customerAddress,
          payment_method: order.paymentMethod,
          items_summary: summaryText,
          total_amount: formatVND(order.total)
        });
      } catch (err) {
        console.warn("EmailJS gửi thất bại:", err);
      }
    }

    cart = [];
    appliedDiscountPercent = 0;
    appliedVoucherCode = "";
    writeJSON(STORAGE_KEYS.CART, cart);
    e.target.reset();
    renderCart();

    statusEl.className = "status-msg ok";
    statusEl.textContent = `Đặt hàng thành công! Mã đơn #${order.id} — Tổng: ${formatVND(order.total)}.`;
  });

  searchEl.addEventListener("input", renderProducts);

  const qrCanvas = document.getElementById("qr-canvas");
  if (qrCanvas && window.QRCode) {
    window.QRCode.toCanvas(qrCanvas, window.location.href, { width: 156, margin: 1 }, () => {});
    document.getElementById("download-qr-btn").addEventListener("click", () => {
      const link = document.createElement("a");
      link.download = "jumjum-qr.png";
      link.href = qrCanvas.toDataURL("image/png");
      link.click();
    });
  }

  renderFilters();
  renderProducts();
  renderCart();
}

function initAdminPage() {
  const ejsCfg = readJSON(STORAGE_KEYS.EJS, {});
  document.getElementById("ejs-public-key").value = ejsCfg.publicKey || "";
  document.getElementById("ejs-service-id").value = ejsCfg.serviceId || "";
  document.getElementById("ejs-template-id").value = ejsCfg.templateId || "";
  document.getElementById("ejs-to-email").value = ejsCfg.toEmail || "";

  document.getElementById("save-ejs-btn").addEventListener("click", () => {
    writeJSON(STORAGE_KEYS.EJS, {
      publicKey: document.getElementById("ejs-public-key").value.trim(),
      serviceId: document.getElementById("ejs-service-id").value.trim(),
      templateId: document.getElementById("ejs-template-id").value.trim(),
      toEmail: document.getElementById("ejs-to-email").value.trim()
    });
    const st = document.getElementById("ejs-status");
    st.className = "status-msg ok";
    st.textContent = "Đã lưu cấu hình EmailJS.";
  });

  const renderAll = () => {
    const products = readJSON(STORAGE_KEYS.PRODUCTS, DEFAULT_PRODUCTS);
    const vouchers = readJSON(STORAGE_KEYS.VOUCHERS, DEFAULT_VOUCHERS);
    const orders = readJSON(STORAGE_KEYS.ORDERS, []);

    const prodBody = document.getElementById("admin-products-body");
    prodBody.innerHTML = "";
    products.forEach((p, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${p.name}</strong><div class="brand-sub">${p.desc || ""}</div></td>
        <td>${p.category}</td>
        <td>${formatVND(p.price)}</td>
        <td><button type="button" class="pill danger" style="padding: 5px 10px;">Xóa</button></td>
      `;
      tr.querySelector("button").addEventListener("click", () => {
        products.splice(i, 1);
        writeJSON(STORAGE_KEYS.PRODUCTS, products);
        renderAll();
      });
      prodBody.appendChild(tr);
    });

    const vList = document.getElementById("voucher-list");
    vList.innerHTML = "";
    Object.entries(vouchers).forEach(([code, pct]) => {
      const chip = document.createElement("span");
      chip.className = "chip active";
      chip.style.cursor = "pointer";
      chip.textContent = `${code} (-${pct}%) ×`;
      chip.addEventListener("click", () => {
        delete vouchers[code];
        writeJSON(STORAGE_KEYS.VOUCHERS, vouchers);
        renderAll();
      });
      vList.appendChild(chip);
    });

    const ordBody = document.getElementById("admin-orders-body");
    ordBody.innerHTML = "";
    if (!orders.length) {
      ordBody.innerHTML = `<tr><td colspan="6" class="brand-sub">Chưa có đơn hàng nào.</td></tr>`;
    } else {
      orders.forEach((ord, idx) => {
        const itemsHtml = ord.items
          .map((it) => `${it.name} x${it.qty}${it.toppings.length ? ` <em>(+${it.toppings.map((t) => t.name).join(", ")})</em>` : ""}`)
          .join("<br>");

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><strong>#${ord.id}</strong><div class="brand-sub">${ord.createdAt}</div></td>
          <td>${ord.customerName}<div class="brand-sub">${ord.customerPhone} • ${ord.customerAddress}</div></td>
          <td>${itemsHtml}</td>
          <td><strong>${formatVND(ord.total)}</strong><div class="brand-sub">${ord.paymentMethod}</div></td>
          <td>${ord.status}</td>
          <td>
            <button type="button" class="pill primary done-btn" style="padding: 5px 10px;">Hoàn tất</button>
            <button type="button" class="pill danger del-btn" style="padding: 5px 10px;">Xóa</button>
          </td>
        `;
        tr.querySelector(".done-btn").addEventListener("click", () => {
          orders[idx].status = "Hoàn tất";
          writeJSON(STORAGE_KEYS.ORDERS, orders);
          renderAll();
        });
        tr.querySelector(".del-btn").addEventListener("click", () => {
          orders.splice(idx, 1);
          writeJSON(STORAGE_KEYS.ORDERS, orders);
          renderAll();
        });
        ordBody.appendChild(tr);
      });
    }
  };

  document.getElementById("add-product-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const products = readJSON(STORAGE_KEYS.PRODUCTS, DEFAULT_PRODUCTS);
    products.push({
      id: "p" + Date.now(),
      name: document.getElementById("new-prod-name").value.trim(),
      category: document.getElementById("new-prod-cat").value.trim(),
      price: Number(document.getElementById("new-prod-price").value),
      desc: document.getElementById("new-prod-desc").value.trim()
    });
    writeJSON(STORAGE_KEYS.PRODUCTS, products);
    e.target.reset();
    renderAll();
  });

  document.getElementById("add-voucher-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const code = document.getElementById("new-voucher-code").value.trim().toUpperCase();
    const pct = Number(document.getElementById("new-voucher-percent").value);
    const vouchers = readJSON(STORAGE_KEYS.VOUCHERS, DEFAULT_VOUCHERS);
    vouchers[code] = pct;
    writeJSON(STORAGE_KEYS.VOUCHERS, vouchers);
    e.target.reset();
    renderAll();
  });

  document.getElementById("reset-demo-btn").addEventListener("click", () => {
    writeJSON(STORAGE_KEYS.PRODUCTS, DEFAULT_PRODUCTS);
    writeJSON(STORAGE_KEYS.TOPPINGS, DEFAULT_TOPPINGS);
    writeJSON(STORAGE_KEYS.VOUCHERS, DEFAULT_VOUCHERS);
    renderAll();
  });

  renderAll();
}

document.addEventListener("DOMContentLoaded", () => {
  initClockAndTheme();
  initParticles();
  initAudioPlayer();

  const page = document.body.dataset.page;
  if (page === "shop") initShopPage();
  if (page === "admin") initAdminPage();
});
