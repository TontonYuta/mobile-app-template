import { LessonContent } from "../types";

export const CHAP_6: LessonContent = {
  title: "Bài 6: Đạo hàm và Vi phân",
  objectives: [
    "Tính đạo hàm cấp 1, cấp 2 và ứng dụng tìm cực trị.",
    "Hiểu ý nghĩa cận biên (Marginal) trong kinh tế: MC, MR, MP.",
    "Tính hệ số co giãn (Elasticity) của Cầu/Cung."
  ],
  theory: `
### 1. Phân tích cận biên (Marginal Analysis)
Đạo hàm $f'(x)$ biểu thị tốc độ thay đổi tức thời. Trong kinh tế:
*   **Chi phí biên (MC):** $MC = TC'(Q)$. Chi phí tăng thêm khi sản xuất thêm 1 đơn vị.
*   **Doanh thu biên (MR):** $MR = TR'(Q)$. Doanh thu tăng thêm khi bán thêm 1 đơn vị.
*   **Sản phẩm cận biên (MP):** $MP_L = Q'(L)$.

### 2. Hệ số co giãn (Elasticity)
Đo lường độ nhạy của $y$ theo $x$ (theo %):
$$ \\varepsilon_{y/x} = \\frac{y'}{y} \\cdot x $$
*   $|\\varepsilon| > 1$: Co giãn nhiều (Nhạy cảm về giá).
*   $|\\varepsilon| < 1$: Ít co giãn (Ít nhạy cảm).

### 3. Tối ưu hóa lợi nhuận
Lợi nhuận $\\pi = TR - TC$ đạt tối đa khi:
$$ \\pi' = 0 \\Leftrightarrow MR = MC $$
(Doanh thu biên = Chi phí biên).
`,
  examples: [
    {
      problem: "**(Bài 6.11)** Cho hàm doanh thu $TR = 730Q - 3Q^2$ và hàm tổng chi phí $TC = 2Q^3 - 3Q^2 + 4Q + 10$. Tính doanh thu biên (MR) và chi phí biên (MC) tại mức sản lượng $Q=10$. Nêu ý nghĩa.",
      solution: `
**1. Tính MR (Marginal Revenue):**
Hàm MR là đạo hàm của TR:
$$ MR = TR' = (730Q - 3Q^2)' = 730 - 6Q $$
Tại $Q=10$:
$MR(10) = 730 - 6(10) = 670$.
*Ý nghĩa:* Tại mức sản lượng 10, nếu bán thêm 1 đơn vị thì doanh thu tăng thêm khoảng 670.

**2. Tính MC (Marginal Cost):**
Hàm MC là đạo hàm của TC:
$$ MC = TC' = (2Q^3 - 3Q^2 + 4Q + 10)' = 6Q^2 - 6Q + 4 $$
Tại $Q=10$:
$MC(10) = 6(100) - 6(10) + 4 = 600 - 60 + 4 = 544$.
*Ý nghĩa:* Tại mức sản lượng 10, nếu sản xuất thêm 1 đơn vị thì chi phí tăng thêm khoảng 544.

**Nhận xét:** $MR > MC$ (670 > 544) nên việc tăng sản lượng sẽ làm tăng lợi nhuận.
`
    },
    {
      problem: "**(Bài 6.15)** Cho hàm sản xuất ngắn hạn $Q = 15 \\sqrt[3]{L^2}$. Tính hệ số co giãn của sản lượng $Q$ theo lao động $L$.",
      solution: `
Viết lại hàm số dưới dạng lũy thừa: $Q = 15 L^{2/3}$.

**Bước 1: Tính đạo hàm $Q'$ theo $L$**
$$ Q' = 15 \\cdot \\frac{2}{3} L^{2/3 - 1} = 10 L^{-1/3} $$

**Bước 2: Tính hệ số co giãn**
Công thức: $\\varepsilon = \\frac{Q'}{Q} \\cdot L$
$$ \\varepsilon = \\frac{10 L^{-1/3}}{15 L^{2/3}} \\cdot L $$
$$ = \\frac{10}{15} \\cdot \\frac{L}{L^{1/3} \\cdot L^{2/3}} $$
$$ = \\frac{2}{3} \\cdot \\frac{L}{L} = \\frac{2}{3} $$

**Kết luận:** Hệ số co giãn là hằng số $2/3$.
*Ý nghĩa:* Nếu lượng lao động $L$ tăng 1% thì sản lượng $Q$ sẽ tăng xấp xỉ $0.67\\%$.
`
    }
  ],
  quiz: [
    {
      question: "Chi phí biên (MC) được tính bằng cách:",
      options: ["Lấy đạo hàm của Tổng chi phí (TC)", "Lấy đạo hàm của Doanh thu", "Chia Tổng chi phí cho số lượng", "Trừ Doanh thu cho Chi phí"],
      correctAnswerIndex: 0,
      explanation: "Biên (Marginal) trong toán học tương ứng với đạo hàm. MC = TC'."
    },
    {
      question: "Để tối đa hóa lợi nhuận, doanh nghiệp nên sản xuất tại mức sản lượng mà:",
      options: ["MR = MC (Doanh thu biên = Chi phí biên)", "TR = TC", "Doanh thu lớn nhất", "Chi phí thấp nhất"],
      correctAnswerIndex: 0,
      explanation: "Tại điểm MR=MC, lợi nhuận biên bằng 0, tức là lợi nhuận tổng đạt cực trị."
    },
    {
      question: "Nếu hệ số co giãn của cầu theo giá là $\\varepsilon = -2$, điều này có nghĩa là:",
      options: ["Giá tăng 1%, lượng cầu giảm 2%", "Giá tăng 1%, lượng cầu tăng 2%", "Giá tăng 1%, lượng cầu giảm 0.5%", "Cầu không thay đổi"],
      correctAnswerIndex: 0,
      explanation: "Dấu âm chỉ mối quan hệ nghịch biến. Độ lớn 2 cho biết mức độ phản ứng gấp đôi."
    },
    {
      question: "Đạo hàm cấp 2 ($y''$) dương trên một khoảng cho biết đồ thị hàm số:",
      options: ["Lõm (bề lõm quay lên trên)", "Lồi (bề lõm quay xuống dưới)", "Là đường thẳng", "Không xác định"],
      correctAnswerIndex: 0,
      explanation: "$y'' > 0$ thì đồ thị có dạng lòng chảo (Lõm)."
    },
    {
      question: "Vi phân $dy$ của hàm số $y=f(x)$ được tính bằng:",
      options: ["f'(x)dx", "f(x)dx", "f'(x)", "dx/dy"],
      correctAnswerIndex: 0,
      explanation: "Công thức vi phân: $dy = y' dx$."
    }
  ],
  essay: [
    {
      question: "**(Bài 6.13)** Một hãng có hàm doanh thu $TR = 280Q - Q^2$ và hàm chi phí $TC = \\frac{2}{3}Q^3 - 8Q^2 + 40Q + 500$. Tìm mức sản lượng $Q$ để lợi nhuận đạt tối đa.",
      answer: "**Bước 1: Tìm hàm Doanh thu biên và Chi phí biên**\n- $MR = (TR)' = 280 - 2Q$\n- $MC = (TC)' = 2Q^2 - 16Q + 40$\n\n**Bước 2: Giải phương trình $MR = MC$**\n$$ 280 - 2Q = 2Q^2 - 16Q + 40 $$\nChuyển vế: \n$$ 2Q^2 - 14Q - 240 = 0 $$\n$$ Q^2 - 7Q - 120 = 0 $$\n\n**Bước 3: Giải phương trình bậc 2**\n$\\Delta = (-7)^2 - 4(1)(-120) = 49 + 480 = 529 = 23^2$.\nCác nghiệm:\n- $Q_1 = (7 + 23)/2 = 15$ (Nhận vì $Q > 0$).\n- $Q_2 = (7 - 23)/2 = -8$ (Loại).\n\n**Kết luận:** Mức sản lượng tối ưu là $Q = 15$."
    },
    {
      question: "Tìm các cực trị của hàm số $y = x^3 - 3x + 1$.",
      answer: "1.  **Tính đạo hàm:** $y' = 3x^2 - 3$.\n2.  **Tìm điểm dừng:** $y' = 0 \\Leftrightarrow 3x^2 = 3 \\Leftrightarrow x = \\pm 1$.\n3.  **Xét dấu đạo hàm (hoặc dùng y''):**\n    *   $y'' = 6x$.\n    *   Tại $x=1: y'' = 6 > 0 \\Rightarrow$ Cực tiểu. $y_{min} = 1^3 - 3(1) + 1 = -1$.\n    *   Tại $x=-1: y'' = -6 < 0 \\Rightarrow$ Cực đại. $y_{max} = (-1)^3 - 3(-1) + 1 = 3$.\n\nVậy hàm số đạt cực đại tại $x=-1$ và cực tiểu tại $x=1$."
    }
  ],
  keyTakeaways: "Nguyên tắc vàng trong kinh tế: Lợi nhuận tối đa khi Doanh thu biên bằng Chi phí biên ($MR = MC$)."
};