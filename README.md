# 📱 Yuta's Android CI/CD Template

Hệ thống **Continuous Integration / Continuous Deployment (CI/CD)** dành cho việc đóng gói ứng dụng Android từ mã nguồn Web.

Toàn bộ quá trình build được **tự động hóa thông qua GitHub Actions** và kết quả file **APK** sẽ được gửi trực tiếp về **Telegram Bot**.

---

# ⚙️ Hướng dẫn cấu hình ứng dụng (App Configuration)

Trước khi build APK, bạn cần cấu hình **định danh và giao diện cơ bản của ứng dụng**.

---

## 1️⃣ Cấu hình Tên và ID Ứng dụng

Tạo hoặc chỉnh sửa file:

```text
capacitor.config.json
```

Ví dụ cấu hình:

```json
{
  "appId": "com.yuta.mathapp",
  "appName": "Tên Ứng dụng Của Bạn",
  "webDir": "dist",
  "bundledWebRuntime": false
}
```

### Giải thích

| Thuộc tính          | Ý nghĩa                               |
| ------------------- | ------------------------------------- |
| `appId`             | Mã định danh duy nhất của ứng dụng    |
| `appName`           | Tên hiển thị trên màn hình điện thoại |
| `webDir`            | Thư mục chứa file web sau khi build   |
| `bundledWebRuntime` | Cấu hình runtime của Capacitor        |

### Ví dụ

```json
{
  "appId": "com.tontonyuta.examapp",
  "appName": "Luyện Thi Khối A",
  "webDir": "dist"
}
```

---

# 🎨 Cấu hình biểu tượng ứng dụng (App Icon)

Chuẩn bị một file icon:

```text
icon.png
```

Yêu cầu:

* Định dạng: **PNG**
* Kích thước khuyến nghị: **1024 × 1024**

Đặt file tại:

```text
project-root/icon.png
```

Hệ thống CI sẽ tự động:

* resize icon
* tạo icon cho mọi chuẩn Android
* đóng gói vào APK

---

# 🚀 Quy trình triển khai (Deployment Flow)

## Bước 1: Khởi tạo dự án

Trên GitHub nhấn:

```text
Use this template
```

để tạo repo mới từ template này.

---

## Bước 2: Tích hợp mã nguồn

1. Xuất mã nguồn từ **Google AI Studio**
2. Giải nén project
3. Copy toàn bộ file vào repo

Ví dụ:

```text
index.html
style.css
script.js
assets/
```

---

## Bước 3: Kích hoạt tiến trình build

Push code lên GitHub:

```bash
git add .
git commit -m "Deploy: Update source code"
git push origin main
```

GitHub Actions sẽ tự động:

1. Setup **Node.js 22**
2. Setup **Java 21**
3. Build Web App
4. Sync Capacitor
5. Build Android APK

---

## Bước 4: Nhận file APK

Sau khoảng **3 – 5 phút**:

1. Telegram Bot gửi thông báo
2. File **APK** được gửi trực tiếp vào chat

Bạn chỉ cần:

```text
Download → Install → Test
```

---

# 🏗 Kiến trúc hệ thống

```
AI Studio
    ↓
GitHub Repository
    ↓
GitHub Actions
    ↓
Reusable Workflow
    ↓
Android Build System
    ↓
Telegram Bot
    ↓
APK delivered to phone
```

---

# 📂 Cấu trúc project

```
mobile-app-template
│
├── index.html
├── package.json
├── capacitor.config.json
├── icon.png
│
├── android/
│
└── .github/
    └── workflows/
        └── build-apk.yml
```

---

# 🔐 Security Variables

Cần cấu hình **GitHub Secrets** tại:

```text
Settings → Secrets and variables → Actions
```

Thêm hai biến sau:

```
TELEGRAM_TOKEN
TELEGRAM_CHAT_ID
```

| Variable         | Mô tả                       |
| ---------------- | --------------------------- |
| TELEGRAM_TOKEN   | API Token của Telegram Bot  |
| TELEGRAM_CHAT_ID | ID cuộc trò chuyện nhận APK |

---

# 💡 Ví dụ sử dụng thực tế

Bạn muốn tạo app **Luyện Thi Khối A**.

Chỉ cần:

1. sửa `appName`:

```json
"appName": "Luyện Thi Khối A"
```

2. thay icon:

```
icon.png
```

3. push code:

```bash
git push
```

Sau vài phút Telegram sẽ gửi:

```
LuyenThiKhoiA.apk
```

---

# ⚡ Ưu điểm của hệ thống

* Không cần **Android Studio**
* Không cần **Java SDK local**
* Không cần **Gradle**
* Build Android hoàn toàn **trên cloud**

Workflow cực đơn giản:

```
Create app → Push → Receive APK
```

---

# 👨‍💻 Author

**TontonYuta**

2026
