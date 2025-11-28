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
