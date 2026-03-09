import { LessonContent } from "../types";

export const CHAP_3: LessonContent = {
  title: "Bài 3: Hệ phương trình tuyến tính",
  objectives: [
    "Giải hệ phương trình bằng phương pháp khử Gauss (khử toàn phần).",
    "Sử dụng định lý Kronecker-Capelli để biện luận số nghiệm.",
    "Ứng dụng: Cân bằng thị trường nhiều hàng hóa, Phân bổ nguồn lực."
  ],
  theory: `
### 1. Dạng tổng quát
Hệ phương trình tuyến tính có dạng ma trận:
$$ AX = B $$
Trong đó $A$ là ma trận hệ số, $X$ là ma trận ẩn, $B$ là ma trận hệ số tự do.

### 2. Định lý Kronecker-Capelli
Xét hạng của ma trận hệ số ($A$) và ma trận mở rộng ($\\bar{A} = [A|B]$):
*   Nếu $r(A) < r(\\bar{A})$: Hệ **Vô nghiệm**.
*   Nếu $r(A) = r(\\bar{A}) = n$ (số ẩn): Hệ có **Nghiệm duy nhất**.
*   Nếu $r(A) = r(\\bar{A}) < n$: Hệ có **Vô số nghiệm** (phụ thuộc vào $n - r$ tham số).

### 3. Phương pháp Gauss (Gauss-Jordan)
Nguyên tắc: Biến đổi sơ cấp trên dòng để đưa ma trận mở rộng $\\bar{A}$ về dạng bậc thang (hoặc bậc thang rút gọn).
*   **Bước 1:** Lập ma trận mở rộng $\\bar{A}$.
*   **Bước 2:** Dùng biến đổi sơ cấp dòng đưa về dạng bậc thang.
*   **Bước 3:** Giải ngược từ dưới lên hoặc kết luận về nghiệm.
`,
  examples: [
    {
      problem: "**(Bài 3.2a)** Giải hệ phương trình: $$ \\begin{cases} x_1 - 2x_2 + 3x_3 - x_4 = -5 \\\\ 2x_1 + x_2 - x_3 - 4x_4 = 1 \\\\ -x_1 - 2x_2 - 3x_3 - 3x_4 = 1 \\end{cases} $$",
      solution: `
**Bước 1: Lập ma trận mở rộng**
$$ \\bar{A} = \\begin{pmatrix} 1 & -2 & 3 & -1 & | & -5 \\\\ 2 & 1 & -1 & -4 & | & 1 \\\\ -1 & -2 & -3 & -3 & | & 1 \\end{pmatrix} $$

**Bước 2: Biến đổi Gauss**
*   Lấy $D_2 - 2D_1$: $(2-2, 1-(-4), -1-6, -4-(-2), 1-(-10)) \\rightarrow (0, 5, -7, -2, 11)$.
*   Lấy $D_3 + D_1$: $(-1+1, -2-2, -3+3, -3-1, 1-5) \\rightarrow (0, -4, 0, -4, -4)$.

Ma trận mới:
$$ \\begin{pmatrix} 1 & -2 & 3 & -1 & | & -5 \\\\ 0 & 5 & -7 & -2 & | & 11 \\\\ 0 & -4 & 0 & -4 & | & -4 \\end{pmatrix} $$

Đơn giản dòng 3 (chia cho -4) và đổi chỗ với dòng 2:
$$ \\rightarrow \\begin{pmatrix} 1 & -2 & 3 & -1 & | & -5 \\\\ 0 & 1 & 0 & 1 & | & 1 \\\\ 0 & 5 & -7 & -2 & | & 11 \\end{pmatrix} $$

Khử tiếp cột 2 của dòng 3 mới ($D_3 - 5D_2$):
$$ \\rightarrow \\begin{pmatrix} 1 & -2 & 3 & -1 & | & -5 \\\\ 0 & 1 & 0 & 1 & | & 1 \\\\ 0 & 0 & -7 & -7 & | & 6 \\end{pmatrix} $$

**Bước 3: Giải ngược**
*   Từ $D_3$: $-7x_3 - 7x_4 = 6 \\Rightarrow x_3 = -x_4 - \\frac{6}{7}$.
*   Từ $D_2$: $x_2 + x_4 = 1 \\Rightarrow x_2 = 1 - x_4$.
*   Đặt $x_4 = \\alpha$ (tùy ý).
*   Thay vào $D_1$: $x_1 - 2(1-\\alpha) + 3(-\\alpha - \\frac{6}{7}) - \\alpha = -5$.
    $\\Rightarrow x_1 = -5 + 2 - 2\\alpha + 3\\alpha + \\frac{18}{7} + \\alpha = -3 + \\frac{18}{7} + 2\\alpha = -\\frac{3}{7} + 2\\alpha$.

**Kết luận:** Hệ có vô số nghiệm phụ thuộc tham số $\\alpha$.
`
    },
    {
      problem: "**(Bài 3.1)** Cho hệ phương trình: $$ \\begin{cases} x_1 + 2x_2 + x_3 + x_4 = 14 \\\\ -2x_1 + x_2 + 3x_3 - 2x_4 = 12 \\\\ x_2 + x_3 - x_4 = 8 \\end{cases} $$ Chứng minh vectơ $X=(1, 5, 3, 0)^T$ là nghiệm.",
      solution: `
Thay trực tiếp tọa độ của $X$ vào hệ phương trình:
*   $x_1 = 1, x_2 = 5, x_3 = 3, x_4 = 0$.

**Kiểm tra từng phương trình:**
1.  $1 + 2(5) + 3 + 0 = 1 + 10 + 3 = 14$. (Thỏa mãn $14=14$)
2.  $-2(1) + 5 + 3(3) - 2(0) = -2 + 5 + 9 = 12$. (Thỏa mãn $12=12$)
3.  $0x_1 + 5 + 3 - 0 = 8$. (Thỏa mãn $8=8$)

**Kết luận:** Vì $X$ thỏa mãn tất cả các phương trình trong hệ nên nó là một nghiệm.
`
    }
  ],
  quiz: [
    {
      question: "**(Bài 3.16)** Cho hệ: $\\begin{cases} 2x_1 - x_2 + 2x_3 = -3 \\\\ 3x_1 - x_2 + 3x_3 = -4 \\\\ 2x_1 + x_2 + x_3 = -2 \\end{cases}$. Nghiệm của hệ là:",
      options: ["(0, -1, -2)", "(-2, 1, 1)", "(-3, 1, 3)", "Vô nghiệm"],
      correctAnswerIndex: 1,
      explanation: "Thay thử phương án B (-2, 1, 1):\nPt1: $2(-2) - 1 + 2(1) = -4 - 1 + 2 = -3$ (Đúng).\nPt2: $3(-2) - 1 + 3(1) = -6 - 1 + 3 = -4$ (Đúng).\nPt3: $2(-2) + 1 + 1 = -4 + 2 = -2$ (Đúng).\nVậy B là nghiệm."
    },
    {
      question: "**(Bài 3.17)** Cho phương trình ma trận $XA + E = B$ với A khả nghịch. Khẳng định đúng:",
      options: ["$X = A^{-1}(B-E)$", "$X = (B-E)A^{-1}$", "$X = B A^{-1} - E$", "$X = B - E A^{-1}$"],
      correctAnswerIndex: 1,
      explanation: "Ta có: $XA = B - E$.\nNhân cả hai vế với $A^{-1}$ **từ bên phải**:\n$X A A^{-1} = (B - E) A^{-1} \\Rightarrow X = (B - E) A^{-1}$."
    },
    {
      question: "Hệ thuần nhất $AX=0$ chỉ có nghiệm tầm thường khi:",
      options: ["det(A) ≠ 0", "det(A) = 0", "r(A) < n", "Luôn có nghiệm tầm thường"],
      correctAnswerIndex: 0,
      explanation: "Hệ thuần nhất vuông luôn có nghiệm tầm thường $X=0$. Để nó **chỉ** có nghiệm tầm thường (nghiệm duy nhất) thì định thức phải khác 0 ($r(A)=n$)."
    },
    {
      question: "**(Bài 3.19)** Nếu $h(A) = h(\\bar{A}) = 3$ trong hệ 4 ẩn ($n=4$) thì nghiệm tổng quát có số ẩn tự do là:",
      options: ["4", "3", "2", "1"],
      correctAnswerIndex: 3,
      explanation: "Số ẩn tự do = Số ẩn ($n$) - Hạng ($r$).\nỞ đây: $4 - 3 = 1$ ẩn tự do."
    },
    {
      question: "**(Bài 3.25)** Hệ phương trình có định thức ma trận hệ số $\\Delta \\neq 0$. Khẳng định đúng:",
      options: ["Hệ vô nghiệm", "Hệ có vô số nghiệm", "Hệ có duy nhất nghiệm", "Hệ có 1 nghiệm cơ sở"],
      correctAnswerIndex: 2,
      explanation: "Theo định lý Cramer, nếu $\\Delta \\neq 0$ thì hệ có nghiệm duy nhất."
    }
  ],
  essay: [
    {
      question: "**(Bài 3.7)** Một công ty sản xuất 4 loại sản phẩm A, B, C, D.\n- Chi phí (đơn vị: 10.000đ): A(3), B(2), C(4), D(1).\n- Giá bán (đơn vị: 10.000đ): A(5), B(3), C(6), D(2).\n\na) Viết hệ ràng buộc để với chi phí 210 triệu (21.000 đơn vị tiền), tổng lãi không dưới 130 triệu (13.000 đơn vị tiền) và tổng sản lượng không dưới 8.000.",
      answer: "Gọi $x_1, x_2, x_3, x_4$ lần lượt là số lượng sản phẩm A, B, C, D ($x_i \\ge 0$).\n\n**1. Ràng buộc chi phí:**\nTổng chi phí = $3x_1 + 2x_2 + 4x_3 + 1x_4$.\nTheo đề: $$ 3x_1 + 2x_2 + 4x_3 + x_4 = 21000 $$\n\n**2. Ràng buộc lợi nhuận:**\nLãi đơn vị = Giá - Chi phí.\n- Lãi A: $5-3=2$\n- Lãi B: $3-2=1$\n- Lãi C: $6-4=2$\n- Lãi D: $2-1=1$\n\nTổng lãi = $2x_1 + x_2 + 2x_3 + x_4$.\nTheo đề: $$ 2x_1 + x_2 + 2x_3 + x_4 \\ge 13000 $$\n\n**3. Ràng buộc sản lượng:**\nTổng sản lượng: $$ x_1 + x_2 + x_3 + x_4 \\ge 8000 $$"
    },
    {
      question: "**(Bài 3.12*)** Với giá trị nào của $m$ thì hệ phương trình ma trận sau có nghiệm không tầm thường:\n$$ \\begin{pmatrix} 2 & 1 & 0 & 0 \\\\ 1 & 3 & 1 & 1 \\\\ 3 & 0 & 1 & -1 \\\\ 0 & 2 & 1 & m \\end{pmatrix} \\times X = 2X $$",
      answer: "Phương trình $AX = 2X \\Leftrightarrow (A - 2I)X = 0$.\nĐây là hệ phương trình tuyến tính thuần nhất.\nĐể hệ có nghiệm **không tầm thường** (nghiệm khác 0), định thức của ma trận hệ số phải bằng 0.\n\nXét ma trận $B = A - 2I$:\n$$ B = \\begin{pmatrix} 2-2 & 1 & 0 & 0 \\\\ 1 & 3-2 & 1 & 1 \\\\ 3 & 0 & 1-2 & -1 \\\\ 0 & 2 & 1 & m-2 \\end{pmatrix} = \\begin{pmatrix} 0 & 1 & 0 & 0 \\\\ 1 & 1 & 1 & 1 \\\\ 3 & 0 & -1 & -1 \\\\ 0 & 2 & 1 & m-2 \\end{pmatrix} $$\n\nTính $\\det(B) = 0$:\nKhai triển theo dòng 1: $\\det(B) = -1 \\cdot \\begin{vmatrix} 1 & 1 & 1 \\\\ 3 & -1 & -1 \\\\ 0 & 1 & m-2 \\end{vmatrix}$.\n\nTính định thức con cấp 3:\n$= 1(-1(m-2) - (-1)(1)) - 1(3(m-2) - 0) + 1(3 - 0)$\n$= -(m-2) + 1 - 3(m-2) + 3$\n$= -m + 2 + 1 - 3m + 6 + 3 = -4m + 12$.\n\nVậy $\\det(B) = -(-4m + 12) = 4m - 12$.\nĐể có nghiệm không tầm thường: $4m - 12 = 0 \\Leftrightarrow m = 3$."
    }
  ],
  keyTakeaways: "Định lý Kronecker-Capelli là công cụ lý thuyết để biện luận số nghiệm. Phương pháp Gauss là công cụ thực hành hiệu quả nhất. Mô hình Input-Output là ứng dụng kinh điển của hệ phương trình trong kinh tế vĩ mô."
};
