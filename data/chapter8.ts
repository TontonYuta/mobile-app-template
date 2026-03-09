import { LessonContent } from "../types";

export const CHAP_8: LessonContent = {
  title: "Bài 8: Hàm số nhiều biến số",
  objectives: [
    "Tính đạo hàm riêng và vi phân toàn phần.",
    "Phân tích hàm sản xuất Cobb-Douglas (K, L).",
    "Tìm cực trị tự do và cực trị có ràng buộc (Phương pháp Lagrange)."
  ],
  theory: `
### 1. Đạo hàm riêng (Partial Derivatives)
Cho hàm $z = f(x,y)$.
*   $f'_x = \\frac{\\partial z}{\\partial x}$: Đạo hàm theo $x$, coi $y$ là hằng số.
*   $f'_y = \\frac{\\partial z}{\\partial y}$: Đạo hàm theo $y$, coi $x$ là hằng số.

### 2. Cực trị của hàm hai biến
*   **Cực trị tự do:**
    1.  Giải hệ phương trình đạo hàm riêng cấp 1 bằng 0 để tìm điểm dừng.
    2.  Tính các đạo hàm riêng cấp 2 ($A=z''_{xx}, B=z''_{xy}, C=z''_{yy}$).
    3.  Xét $\\Delta = AC - B^2$. Nếu $\\Delta > 0$ và $A > 0$ (Tiểu), $A < 0$ (Đại).

*   **Cực trị có ràng buộc:**
    Bài toán: Tối ưu $f(x,y)$ với điều kiện $g(x,y) = b$.
    Phương pháp nhân tử Lagrange:
    $$ L(x,y,\\lambda) = f(x,y) + \\lambda [b - g(x,y)] $$

### 3. Hàm sản xuất Cobb-Douglas
$$ Q = A \\cdot K^\\alpha \\cdot L^\\beta $$
Trong đó: $K$ là Vốn, $L$ là Lao động.
Hệ số co giãn của $Q$ theo $K$ chính là $\\alpha$, theo $L$ chính là $\\beta$.
`,
  examples: [
    {
      problem: "**(Bài 8.1)** Tính các đạo hàm riêng của hàm số: $f(x,y) = x^3 + x^2y - 3xy + y^2$.",
      solution: `
**a) Đạo hàm riêng theo x ($f'_x$):**
Xem $y$ là hằng số, đạo hàm theo $x$:
$$ f'_x = (x^3)' + (x^2y)' - (3xy)' + (y^2)' $$
$$ = 3x^2 + 2xy - 3y + 0 $$
$$ = 3x^2 + 2xy - 3y $$

**b) Đạo hàm riêng theo y ($f'_y$):**
Xem $x$ là hằng số, đạo hàm theo $y$:
$$ f'_y = (x^3)' + (x^2y)' - (3xy)' + (y^2)' $$
$$ = 0 + x^2(1) - 3x(1) + 2y $$
$$ = x^2 - 3x + 2y $$
`
    },
    {
      problem: "**(Bài 8.4)** Cho hàm sản xuất Cobb-Douglas $z = 20 x^{3/5} y^{4/5}$. Tính các hệ số co giãn riêng của $z$ theo $x$ và $y$.",
      solution: `
Đối với hàm dạng lũy thừa tích $z = A x^\\alpha y^\\beta$, hệ số co giãn chính là số mũ.

**1. Hệ số co giãn theo x:**
$$ \\varepsilon_x = \\frac{\\partial z}{\\partial x} \\frac{x}{z} = \\alpha = \\frac{3}{5} = 0.6 $$
*Ý nghĩa:* Khi $x$ tăng 1% (giữ nguyên $y$) thì $z$ tăng 0.6%.

**2. Hệ số co giãn theo y:**
$$ \\varepsilon_y = \\frac{\\partial z}{\\partial y} \\frac{y}{z} = \\beta = \\frac{4}{5} = 0.8 $$
*Ý nghĩa:* Khi $y$ tăng 1% (giữ nguyên $x$) thì $z$ tăng 0.8%.
`
    }
  ],
  quiz: [
    {
      question: "Đạo hàm riêng theo x của hàm $z = x^2y^3$ là:",
      options: ["2xy^3", "3x^2y^2", "5x", "x^2"],
      correctAnswerIndex: 0,
      explanation: "Khi đạo hàm theo x, $y^3$ là hệ số hằng. $(x^2)' = 2x$. Vậy kết quả là $2x \\cdot y^3$."
    },
    {
      question: "Điểm dừng (Critical point) của hàm nhiều biến là điểm mà tại đó:",
      options: ["Tất cả các đạo hàm riêng cấp 1 bằng 0", "Hàm số không xác định", "Đạo hàm cấp 2 bằng 0", "Giá trị hàm bằng 0"],
      correctAnswerIndex: 0,
      explanation: "Đây là điều kiện cần để hàm số đạt cực trị."
    },
    {
      question: "Hàm Lagrange $L(x,y,\\lambda)$ được sử dụng để giải quyết bài toán:",
      options: ["Cực trị có ràng buộc (có điều kiện)", "Tìm nghiệm phương trình", "Tính tích phân", "Tính giới hạn"],
      correctAnswerIndex: 0,
      explanation: "Phương pháp nhân tử Lagrange chuyển bài toán cực trị có ràng buộc thành cực trị tự do của hàm L."
    },
    {
      question: "Trong hàm sản xuất $Q = K^{0.4}L^{0.6}$, tổng hệ số co giãn $(\\alpha + \\beta)$ bằng:",
      options: ["1", "0.4", "0.6", "0.24"],
      correctAnswerIndex: 0,
      explanation: "$0.4 + 0.6 = 1$. Điều này thể hiện hiệu suất không đổi theo quy mô (Constant returns to scale)."
    },
    {
      question: "Vi phân toàn phần $dz$ được tính bằng công thức:",
      options: ["z'_x dx + z'_y dy", "z'_x dy + z'_y dx", "dx + dy", "z'_x + z'_y"],
      correctAnswerIndex: 0,
      explanation: "Vi phân toàn phần là tổng các vi phân riêng phần."
    }
  ],
  essay: [
    {
      question: "**(Bài 8.14)** Một doanh nghiệp có hàm chi phí $TC = 3Q_1^2 + 4Q_2^2$. Giá bán hai loại sản phẩm là $p_1 = 48 - 2Q_1$ và $p_2 = 70 - 3Q_2$. Tìm sản lượng $Q_1, Q_2$ để tối đa hóa lợi nhuận.",
      answer: "**Bước 1: Lập hàm Lợi nhuận ($\\pi$)**\nDoanh thu $TR = p_1Q_1 + p_2Q_2 = (48-2Q_1)Q_1 + (70-3Q_2)Q_2$\n$$ = 48Q_1 - 2Q_1^2 + 70Q_2 - 3Q_2^2 $$\n\nLợi nhuận $\\pi = TR - TC$:\n$$ \\pi = (48Q_1 - 2Q_1^2 + 70Q_2 - 3Q_2^2) - (3Q_1^2 + 4Q_2^2) $$\n$$ \\pi = 48Q_1 - 5Q_1^2 + 70Q_2 - 7Q_2^2 $$\n\n**Bước 2: Tìm điểm dừng**\nTính đạo hàm riêng và cho bằng 0:\n$$ \\frac{\\partial \\pi}{\\partial Q_1} = 48 - 10Q_1 = 0 \\Rightarrow Q_1 = 4.8 $$\n$$ \\frac{\\partial \\pi}{\\partial Q_2} = 70 - 14Q_2 = 0 \\Rightarrow Q_2 = 5 $$\n\n**Bước 3: Kiểm tra điều kiện đủ (nếu cần)**\nĐạo hàm cấp 2 đều âm ($-10, -14$) nên đây là điểm cực đại.\n\n**Kết luận:** Sản xuất 4.8 đơn vị SP 1 và 5 đơn vị SP 2."
    },
    {
      question: "**(Bài 8.43)** Tìm cực trị của hàm lợi ích $U = 25 x^{0.5} y^{0.5}$ với điều kiện ngân sách $p_1 x + p_2 y = 220$ (Giả sử $p_1=8, p_2=4$).",
      answer: "**Bài toán:** Max $U = 25 \\sqrt{xy}$ với điều kiện $8x + 4y = 220$.\n\n**Điều kiện tối ưu:**\nTỷ lệ thay thế biên bằng tỷ lệ giá cả:\n$$ \\frac{MU_x}{MU_y} = \\frac{p_1}{p_2} $$\n\nTa có:\n$MU_x = U'_x = 12.5 x^{-0.5}y^{0.5}$\n$MU_y = U'_y = 12.5 x^{0.5}y^{-0.5}$\n$\\Rightarrow \\frac{MU_x}{MU_y} = \\frac{y}{x}$\n\nVậy: $\\frac{y}{x} = \\frac{8}{4} = 2 \\Rightarrow y = 2x$.\n\nThay vào phương trình ngân sách:\n$8x + 4(2x) = 220$\n$16x = 220 \\Rightarrow x = 13.75$\n$y = 2(13.75) = 27.5$\n\n**Kết luận:** $x = 13.75, y = 27.5$."
    }
  ],
  keyTakeaways: "Hàm nhiều biến cho phép mô hình hóa các hệ thống phức tạp với nhiều yếu tố đầu vào (Vốn, Lao động). Phương pháp Lagrange là công cụ mạnh mẽ nhất để giải quyết bài toán tối ưu hóa trong điều kiện nguồn lực khan hiếm (ràng buộc ngân sách)."
};