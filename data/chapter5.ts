import { LessonContent } from "../types";

export const CHAP_5: LessonContent = {
  title: "Bài 5: Giới hạn và Liên tục của hàm số một biến số",
  objectives: [
    "Tính giới hạn hàm số, khử các dạng vô định (0/0, vô cùng/vô cùng).",
    "Xét tính liên tục của hàm số tại một điểm và trên một khoảng.",
    "Ứng dụng định lý Bolzano-Cauchy để chứng minh sự tồn tại nghiệm.",
    "Ứng dụng kinh tế: Lãi suất liên tục (số e)."
  ],
  theory: `
### 1. Giới hạn (Limit)
Ký hiệu: $\\lim_{x \\to x_0} f(x) = L$.
*   **Các dạng vô định:** $\\frac{0}{0}, \\frac{\\infty}{\\infty}, \\infty - \\infty, 0 \\cdot \\infty$.
*   **Phương pháp khử dạng $\\frac{0}{0}$:**
    *   Phân tích đa thức thành nhân tử rồi rút gọn.
    *   Nhân liên hợp (nếu có căn thức).
    *   Sử dụng giới hạn đáng nhớ: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$.

### 2. Tính liên tục
Hàm số $y=f(x)$ liên tục tại $x_0$ khi và chỉ khi:
$$ \\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x) = f(x_0) $$
(Giới hạn trái = Giới hạn phải = Giá trị hàm số).

### 3. Định lý Bolzano-Cauchy (Giá trị trung gian)
Nếu hàm số $f(x)$ liên tục trên đoạn $[a, b]$ và $f(a) \\cdot f(b) < 0$ (tức là $f(a)$ và $f(b)$ trái dấu), thì phương trình $f(x) = 0$ có ít nhất một nghiệm $c \\in (a, b)$.

### 4. Ứng dụng kinh tế
*   **Lãi suất liên tục:** Nếu lãi suất $r$ được ghép lãi liên tục (kỳ hạn tiến tới 0), giá trị tương lai là:
    $$ A = P \\cdot e^{rt} $$
`,
  examples: [
    {
      problem: "**(Bài 5.2) Tính giới hạn:** $$ \\lim_{x \\to 2} \\frac{x^2 - 5x + 6}{x^2 - 4} $$",
      solution: `
Thay $x=2$ vào biểu thức, ta được dạng vô định $\\frac{0}{0}$.

**Bước 1: Phân tích nhân tử**
*   Tử số: $x^2 - 5x + 6 = (x-2)(x-3)$.
*   Mẫu số: $x^2 - 4 = (x-2)(x+2)$.

**Bước 2: Rút gọn và tính giới hạn**
$$ \\lim_{x \\to 2} \\frac{(x-2)(x-3)}{(x-2)(x+2)} = \\lim_{x \\to 2} \\frac{x-3}{x+2} $$

Thay $x=2$:
$$ = \\frac{2-3}{2+2} = \\frac{-1}{4} $$
`
    },
    {
      problem: "**(Bài 5.3) Xét sự liên tục của hàm số tại $x=1$:** $$ f(x) = \\begin{cases} 4-x & \\text{khi } x < 1 \\\\ (x-2)^2 + 2 & \\text{khi } 1 \\le x < 3 \\end{cases} $$",
      solution: `
Để xét tính liên tục tại $x=1$, ta so sánh giới hạn trái, giới hạn phải và giá trị hàm.

1.  **Tính giá trị hàm:**
    Tại $x=1$, dùng công thức nhánh dưới:
    $f(1) = (1-2)^2 + 2 = (-1)^2 + 2 = 3$.

2.  **Tính giới hạn phải ($x \\to 1^+$):**
    Dùng nhánh dưới ($x \\ge 1$):
    $\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} [(x-2)^2 + 2] = 3$.

3.  **Tính giới hạn trái ($x \\to 1^-$):**
    Dùng nhánh trên ($x < 1$):
    $\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} (4-x) = 4 - 1 = 3$.

**Kết luận:**
Vì $\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^-} f(x) = f(1) = 3$, nên hàm số **liên tục** tại $x=1$.
`
    }
  ],
  quiz: [
    {
      question: "Giới hạn $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$ bằng:",
      options: ["0", "2", "1", "Vô cùng"],
      correctAnswerIndex: 1,
      explanation: "Dạng 0/0. Phân tích $x^2-1 = (x-1)(x+1)$. Rút gọn $(x-1)$, còn lại $(x+1)$. Thay $x=1$ được 2."
    },
    {
      question: "Hàm số $f(x)$ liên tục tại $x_0$ nếu:",
      options: ["Giới hạn trái bằng giới hạn phải", "Giới hạn trái bằng giá trị hàm số", "Giới hạn trái bằng giới hạn phải và bằng giá trị hàm số", "Hàm số xác định tại $x_0$"],
      correctAnswerIndex: 2,
      explanation: "Đây là định nghĩa đầy đủ của tính liên tục tại một điểm."
    },
    {
      question: "**(Bài 5.14)** Cho hàm số $f(x) = \\begin{cases} e^x & x < 1 \\\\ 1-3x & x \\ge 1 \\end{cases}$. Khẳng định nào đúng?",
      options: ["f(1) = e", "f(1) = -2", "Hàm số liên tục tại x=1", "Giới hạn trái tại 1 là -2"],
      correctAnswerIndex: 1,
      explanation: "Tại $x=1$, ta dùng nhánh dưới: $f(1) = 1 - 3(1) = -2$."
    },
    {
      question: "Số $e$ trong công thức lãi suất liên tục xấp xỉ bằng:",
      options: ["3.14", "2.718", "1.414", "1.618"],
      correctAnswerIndex: 1,
      explanation: "Số e (cơ số logarit tự nhiên) xấp xỉ 2.71828."
    },
    {
      question: "Phương trình $x^3 + 3x - 1 = 0$ có nghiệm trong khoảng nào sau đây?",
      options: ["(0, 1)", "(-1, 0)", "(1, 2)", "(-2, -1)"],
      correctAnswerIndex: 0,
      explanation: "Xét $f(x) = x^3 + 3x - 1$. $f(0) = -1 < 0$; $f(1) = 3 > 0$. Vì hàm đổi dấu trong (0, 1) nên có nghiệm trong khoảng này."
    }
  ],
  essay: [
    {
      question: "**(Bài 5.6)** Tìm giá trị của tham số $a$ để hàm số sau liên tục trên miền xác định:\n$$ f(x) = \\begin{cases} x^2 + a & \\text{khi } x < -1 \\\\ 2^{x+1} + 1 & \\text{khi } x \\ge -1 \\end{cases} $$",
      answer: "Hàm số xác định với mọi $x$. Hàm đa thức và hàm mũ liên tục trên từng khoảng xác định. Ta chỉ cần xét tính liên tục tại điểm nối $x = -1$.\n\nĐiều kiện liên tục: $\\lim_{x \\to -1^-} f(x) = \\lim_{x \\to -1^+} f(x) = f(-1)$.\n\n1.  **Giới hạn trái:**\n    $\\lim_{x \\to -1^-} (x^2 + a) = (-1)^2 + a = 1 + a$.\n\n2.  **Giới hạn phải và giá trị hàm:**\n    $\\lim_{x \\to -1^+} (2^{x+1} + 1) = 2^{-1+1} + 1 = 2^0 + 1 = 1 + 1 = 2$.\n    $f(-1) = 2$.\n\n3.  **Cho hai giới hạn bằng nhau:**\n    $1 + a = 2 \\Rightarrow a = 1$.\n\n**Kết luận:** Với $a=1$, hàm số liên tục trên $\\mathbb{R}$."
    },
    {
      question: "**(Bài 5.8)** Sử dụng định lý Bolzano – Cauchy, chứng minh phương trình $x^3 + x + 1 = 0$ có ít nhất một nghiệm.",
      answer: "Xét hàm số $f(x) = x^3 + x + 1$. Hàm số này liên tục trên $\\mathbb{R}$ (do là đa thức).\n\nTa chọn một khoảng $[a, b]$ sao cho $f(a)$ và $f(b)$ trái dấu.\n\n1.  **Tại $x=-1$:**\n    $f(-1) = (-1)^3 + (-1) + 1 = -1 - 1 + 1 = -1 < 0$.\n\n2.  **Tại $x=0$:**\n    $f(0) = 0^3 + 0 + 1 = 1 > 0$.\n\n**Áp dụng định lý Bolzano-Cauchy:**\nVì $f(x)$ liên tục trên $[-1, 0]$ và $f(-1) \\cdot f(0) < 0$, nên tồn tại ít nhất một số $c \\in (-1, 0)$ sao cho $f(c) = 0$.\n\n**Kết luận:** Phương trình đã cho có ít nhất một nghiệm thuộc khoảng $(-1, 0)$."
    }
  ],
  keyTakeaways: "Tính liên tục là điều kiện tiên quyết cho phép tính vi phân. Định lý giá trị trung gian (Bolzano-Cauchy) là công cụ mạnh mẽ để chứng minh sự tồn tại nghiệm mà không cần giải phương trình cụ thể."
};