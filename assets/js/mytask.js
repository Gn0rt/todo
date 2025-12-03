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
      status: 0,
      createdOn: "1/12/2025",
    },
    2: {
      title: "Complete assignments",
      priority: "Moderate",
      description: "The assignments must be completed to pass final year...",
      status: 1,
      createdOn: "1/12/2025",
    },
    3: {
      title: "Complete assignments",
      priority: "Moderate",
      description: "The assignments must be completed to pass final year...",
      status: 2,
      createdOn: "1/12/2025",
    },
  };

  // Hàm cập nhật nội dung chi tiết
  function updateDetailPane(data) {
    if (data) {
      detailPane.innerHTML = `
                <div class="detail-card">
                    <h3>${data.title}</h3>
                    <p class="priority">Priority: <span>${data.priority}</span></p>
                    <p class="status">Status: <span>Incomplete</span></p>
                    <p class="created">Created on: <span>1/12/2025</span></p>
                    <div class="detail-card-desc">
                        <strong>Description:</strong> 
                        <span>
                            Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Quod dolor saepe dolorum,
                            distinctio fuga suscipit adipisci quam. Optio magnam
                            voluptatibus debitis doloribus ducimus ullam beatae quisquam
                            natus recusandae neque sit id perspiciatis, aspernatur ut
                            voluptas adipisci? Nam iste deserunt nihil numquam,
                            eligendi, ullam eos adipisci, optio ipsa officia sed quasi
                            praesentium? Quia dolor explicabo impedit sunt nobis et
                            dolores asperiores, suscipit ipsa eos praesentium, odio
                            consequatur repudiandae consequuntur numquam accusantium quo
                            itaque distinctio. Culpa excepturi cum molestiae vitae est
                            quas, repellendus modi repellat deserunt eius. Sapiente
                            suscipit repudiandae asperiores assumenda animi unde eos
                            ratione praesentium, voluptate sequi quis dolorum
                            reprehenderit.
                        </span>
                    </div>
                    </div>
                    <div class="detail-actions">
                        <button class="btnEditTask"><i class="fa-solid fa-pen"></i></button>
                        <button class="btnInProgressTask"><i class="fa-solid fa-spinner"></i></button>
                        <button class="btnCompleteTask"><i class="fa-solid fa-check"></i></button>
                        <button class="btnDeleteTask"><i class="fa-solid fa-trash-can"></i></button>

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
