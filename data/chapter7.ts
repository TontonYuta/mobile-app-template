import { LessonContent } from "../types";

export const CHAP_7: LessonContent = {
  title: "Bài 7: Tích phân và Ứng dụng",
  objectives: [
    "Tìm hàm tổng từ hàm biên (Nguyên hàm) - Ví dụ tìm TC từ MC.",
    "Tính thặng dư tiêu dùng (CS) và thặng dư sản xuất (PS).",
    "Tính giá trị hiện tại (PV) và tương lai (FV) của dòng tiền liên tục."
  ],
  theory: `
### 1. Nguyên hàm trong kinh tế
Nguyên hàm giúp khôi phục hàm tổng từ hàm biên.
*   **Tổng chi phí:** $TC(Q) = \\int MC(Q) dQ + FC$ (FC là hằng số tích phân).
*   **Tổng doanh thu:** $TR(Q) = \\int MR(Q) dQ$ (với điều kiện $Q=0 \\Rightarrow TR=0$).

### 2. Tích phân xác định và Thặng dư
*   **Công thức Newton-Leibniz:** $\\int_a^b f(x) dx = F(b) - F(a)$.
*   **Thặng dư tiêu dùng (CS):** Phần diện tích dưới đường cầu và trên đường giá cân bằng.
    $$ CS = \\int_0^{Q_0} (D(Q) - P_0) dQ $$
*   **Thặng dư sản xuất (PS):** Phần diện tích dưới đường giá và trên đường cung.
    $$ PS = \\int_0^{Q_0} (P_0 - S(Q)) dQ $$

### 3. Giá trị của dòng tiền liên tục
Nếu dòng tiền $R(t)$ phát sinh liên tục trong thời gian $T$ với lãi suất $r$:
*   **Giá trị hiện tại (PV):**
    $$ PV = \\int_0^T R(t) \\cdot e^{-rt} dt $$
`,
  examples: [
    {
      problem: "**(Bài 7.2)** Một hãng có hàm chi phí biên $MC = 6Q^2 - 8Q + 140$. Biết chi phí cố định $FC = 55$. Tìm hàm tổng chi phí $TC$.",
      solution: `
Hàm tổng chi phí $TC(Q)$ là nguyên hàm của $MC(Q)$:
$$ TC(Q) = \\int (6Q^2 - 8Q + 140) dQ $$

Tính nguyên hàm từng hạng tử:
$$ = 6 \\frac{Q^3}{3} - 8 \\frac{Q^2}{2} + 140Q + C $$
$$ = 2Q^3 - 4Q^2 + 140Q + C $$

Xác định hằng số $C$:
Tại $Q=0$, tổng chi phí chính là chi phí cố định ($FC$).
$$ TC(0) = 55 \\Rightarrow C = 55 $$

**Kết luận:**
$$ TC(Q) = 2Q^3 - 4Q^2 + 140Q + 55 $$
`
    },
    {
      problem: "**(Bài 7.21)** Một dòng tiền có tốc độ $f(t) = 60 + 5t$ (triệu đồng/năm) trong 8 năm. Lãi suất $r = 4.5\\%$. Thiết lập công thức tính giá trị tương lai (FV).",
      solution: `
Công thức giá trị tương lai của dòng tiền liên tục:
$$ FV = e^{rT} \\int_0^T f(t) e^{-rt} dt $$

Thay số $T=8, r=0.045, f(t) = 60+5t$:
$$ FV = e^{0.045 \\cdot 8} \\int_0^8 (60 + 5t) e^{-0.045t} dt $$

*(Bài toán yêu cầu thiết lập công thức hoặc tính toán cụ thể bằng phương pháp tích phân từng phần với $u = 60+5t$ và $dv = e^{-rt}dt$).*
`
    }
  ],
  quiz: [
    {
      question: "Hàm $F(x)$ được gọi là nguyên hàm của $f(x)$ nếu:",
      options: ["F'(x) = f(x)", "f'(x) = F(x)", "F(x) = f(x) + C", "F(x) = f(x)^2"],
      correctAnswerIndex: 0,
      explanation: "Định nghĩa cơ bản của nguyên hàm: Đạo hàm của nguyên hàm bằng hàm số gốc."
    },
    {
      question: "Để tìm hàm Tổng doanh thu (TR) từ Doanh thu biên (MR), ta cần:",
      options: ["Lấy nguyên hàm của MR", "Lấy đạo hàm của MR", "Nhân MR với Q", "Chia MR cho Q"],
      correctAnswerIndex: 0,
      explanation: "Phép toán ngược của đạo hàm là nguyên hàm (tích phân)."
    },
    {
      question: "Thặng dư tiêu dùng (CS) đại diện cho:",
      options: ["Lợi ích người tiêu dùng nhận được thêm so với giá phải trả", "Lợi nhuận của nhà sản xuất", "Thuế chính phủ thu được", "Tổng chi phí sản xuất"],
      correctAnswerIndex: 0,
      explanation: "CS đo lường chênh lệch giữa mức giá người dùng sẵn sàng trả và mức giá thực tế thị trường."
    },
    {
      question: "Tích phân $\\int x^2 dx$ bằng:",
      options: ["x^3/3 + C", "2x + C", "x^3 + C", "3x^2 + C"],
      correctAnswerIndex: 0,
      explanation: "Quy tắc lũy thừa: $\\int x^n dx = \\frac{x^{n+1}}{n+1}$."
    },
    {
      question: "Ký hiệu PV trong tài chính thường là:",
      options: ["Giá trị hiện tại (Present Value)", "Giá trị tương lai (Future Value)", "Lợi nhuận (Profit Value)", "Chi phí (Price Value)"],
      correctAnswerIndex: 0,
      explanation: "PV là giá trị quy đổi dòng tiền tương lai về thời điểm hiện tại."
    }
  ],
  essay: [
    {
      question: "**(Bài 7.10)** Tính giá trị hiện tại (PV) của dòng tiền $R(t) = 3t + 25$ trong 6 năm với lãi suất chiết khấu 5% (tính lãi liên tục).",
      answer: "**Công thức:** $PV = \\int_0^6 (3t + 25)e^{-0.05t} dt$.\n\n**Sử dụng tích phân từng phần:**\nĐặt $u = 3t + 25 \\Rightarrow du = 3dt$\nĐặt $dv = e^{-0.05t}dt \\Rightarrow v = \\frac{1}{-0.05}e^{-0.05t} = -20e^{-0.05t}$\n\n$$ \\int u dv = uv - \\int v du $$\n$$ = [(3t+25)(-20e^{-0.05t})]_0^6 - \\int_0^6 (-20e^{-0.05t})3 dt $$\n\n**Tính toán:**\n- Tại $t=6$: $(18+25)(-20)e^{-0.3} = -860e^{-0.3}$.\n- Tại $t=0$: $(25)(-20)e^{0} = -500$.\n- Phần tích phân còn lại: $\\int 60e^{-0.05t} dt = [60(-20)e^{-0.05t}] = [-1200e^{-0.05t}]_0^6$.\n\nCộng các kết quả lại để ra đáp số cuối cùng."
    },
    {
      question: "Cho hàm cung $P = Q + 5$ và hàm cầu $P = -Q + 25$. Tìm điểm cân bằng và Thặng dư tiêu dùng (CS).",
      answer: "**1. Tìm điểm cân bằng:**\nCho Cung = Cầu: $Q + 5 = -Q + 25$\n$\\Rightarrow 2Q = 20 \\Rightarrow Q_0 = 10$.\nGiá cân bằng $P_0 = 10 + 5 = 15$.\n\n**2. Tính CS:**\nCS là diện tích dưới đường cầu ($D(Q) = -Q + 25$) và trên đường giá ($P_0 = 15$) từ 0 đến $Q_0$.\n$$ CS = \\int_0^{10} ((-Q + 25) - 15) dQ $$\n$$ = \\int_0^{10} (-Q + 10) dQ $$\n$$ = [-\\frac{Q^2}{2} + 10Q]_0^{10} $$\n$$ = (-\\frac{100}{2} + 100) - 0 = -50 + 100 = 50 $$\n\n**Kết quả:** $CS = 50$."
    }
  ],
  keyTakeaways: "Tích phân là công cụ mạnh mẽ để tính toán các giá trị tổng hợp (tổng chi phí, tổng lợi ích xã hội) và định giá tài sản tài chính theo thời gian."
};