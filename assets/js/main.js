// 1. Lấy các phần tử cần thiết
const flipContainer = document.querySelector(".flip-container");
const toggleSignupLink = document.getElementById("toggle-signup");
const toggleLoginLink = document.getElementById("toggle-login"); // Link "Log In" ở mặt sau

// 2. Hàm kích hoạt lật thẻ
function flipCard(event) {
  // Ngăn chặn hành vi mặc định của thẻ <a> (reload trang)
  event.preventDefault();

  // Thêm hoặc loại bỏ class 'flipped'
  flipContainer.classList.toggle("flipped");
}

// 3. Gắn sự kiện click
if (toggleSignupLink) {
  toggleSignupLink.addEventListener("click", flipCard);
}

if (toggleLoginLink) {
  toggleLoginLink.addEventListener("click", flipCard);
}

document.addEventListener("DOMContentLoaded", function () {
  // 1. Lấy tất cả các mục Sidebar
  const navItems = document.querySelectorAll(".sidebar-nav .nav-item");

  // 2. Lấy tất cả các khu vực Nội dung
  const contentSections = document.querySelectorAll(
    ".main-content .content-area"
  );

  // Hàm xử lý khi một mục Sidebar được click
  function handleNavClick(event) {
    // Ngăn chặn hành vi mặc định của thẻ <a> (chuyển trang/reload)
    event.preventDefault();

    // Lấy target ID từ thuộc tính data-target của mục được click
    const targetId = this.getAttribute("data-target");

    // --- 1. Cập nhật Sidebar Active State ---

    // Bỏ class 'active' khỏi tất cả các mục Sidebar
    navItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Thêm class 'active' vào mục vừa được click
    this.classList.add("active");

    // --- 2. Cập nhật Nội dung hiển thị ---

    // Ẩn tất cả các khu vực nội dung
    contentSections.forEach((section) => {
      section.classList.remove("active-content");
    });

    // Tìm và hiển thị khu vực nội dung tương ứng
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active-content");
    }
  }

  // Gắn trình xử lý sự kiện click cho mỗi mục Sidebar
  navItems.forEach((item) => {
    item.addEventListener("click", handleNavClick);
  });

  // Thiết lập mục Dashboard hiển thị mặc định khi tải trang
  // (Đảm bảo mục Dashboard và khu vực nội dung Dashboard đã có class 'active'/'active-content' ban đầu)
});
