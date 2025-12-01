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
});

document.addEventListener("DOMContentLoaded", function () {
  const taskContentWrapper = document.querySelector(".task-content-wrapper");
  const taskListItems = document.querySelectorAll(".list-tasks .task");
  const detailPane = document.getElementById("task-detail-pane");

  // Giả lập dữ liệu chi tiết Task (Trong thực tế, bạn sẽ fetch từ API)
  const taskDetailsData = {
    1: {
      title: "Submit Documents",
      priority: "Extreme",
      description: "Review the list of documents required...",
      // ... (thêm các trường khác)
    },
    2: {
      title: "Complete assignments",
      priority: "Moderate",
      description: "The assignments must be completed to pass final year...",
      // ...
    },
  };

  // Hàm cập nhật nội dung chi tiết
  function updateDetailPane(data) {
    if (data) {
      detailPane.innerHTML = `
                <div class="detail-card">
                    <h3>${data.title}</h3>
                    <p class="priority">Priority: <span>${data.priority}</span></p>
                    <p><strong>Description:</strong> ${data.description}</p>
                    <div class="detail-actions">
                        <i class="fa-solid fa-trash-can"></i>
                        <i class="fa-solid fa-pen"></i>
                    </div>
                </div>
            `;
    } else {
      detailPane.innerHTML = ""; // Xóa nội dung nếu không tìm thấy dữ liệu
    }
  }

  // Gắn sự kiện click cho từng Task Item
  taskListItems.forEach((task) => {
    task.addEventListener("click", function () {
      const taskId = this.getAttribute("data-task-id");
      const isCurrentlySelected = this.classList.contains("selected");

      // --- Xóa trạng thái 'selected' khỏi tất cả các mục ---
      taskListItems.forEach((item) => item.classList.remove("selected"));

      if (isCurrentlySelected) {
        // TRƯỜNG HỢP 2: Task đang được chọn bị nhấn lại (Toggle OFF)

        // 1. Bỏ class 'selected' (Đã làm ở trên)

        // 2. Đóng cột chi tiết (Chuyển về bố cục 1 cột)
        taskContentWrapper.classList.remove("show-detail");

        // 3. Xóa nội dung chi tiết
        updateDetailPane(null);
      } else {
        // TRƯỜNG HỢP 1: Task mới được chọn (Toggle ON)

        // 1. Đặt class 'selected' cho Task mới
        this.classList.add("selected");

        // 2. Mở cột chi tiết (Chuyển sang bố cục 2 cột)
        taskContentWrapper.classList.add("show-detail");

        // 3. Tải và hiển thị nội dung chi tiết
        const data = taskDetailsData[taskId];
        updateDetailPane(data);
      }
    });
  });
});
