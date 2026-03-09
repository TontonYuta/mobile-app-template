import { LessonContent } from "../types";

export const CHAP_1: LessonContent = {
  title: "Bài 1: Khái niệm vectơ và không gian vectơ $\\mathbb{R}^n$",
  objectives: [
    "Thực hiện thành thạo các phép toán vectơ trong $\\mathbb{R}^n$ (cộng, trừ, nhân vô hướng).",
    "Xét sự độc lập tuyến tính (ĐLTT), phụ thuộc tuyến tính (PTTT) của hệ vectơ.",
    "Xác định cơ sở, số chiều của không gian vectơ và tìm tọa độ của vectơ."
  ],
  theory: `
### 1. Không gian $\\mathbb{R}^n$
Một vectơ $n$-chiều là một bộ số thực có thứ tự $x = (x_1, x_2, \\dots, x_n)$.

*   **Phép cộng:** Cho $x=(x_1, \\dots, x_n)$ và $y=(y_1, \\dots, y_n)$. Khi đó:
    $$ x+y = (x_1+y_1, \\dots, x_n+y_n) $$
*   **Phép nhân vô hướng:** Cho số thực $k$. Khi đó:
    $$ kx = (kx_1, \\dots, kx_n) $$
*   **Tích vô hướng:** $\\langle x, y \\rangle = x_1y_1 + x_2y_2 + \\dots + x_ny_n$.

### 2. Tổ hợp tuyến tính (THTT)
Vectơ $X$ là THTT của hệ $\\{A_1, A_2, \\dots, A_m\\}$ nếu tồn tại các số $k_1, k_2, \\dots, k_m$ sao cho:
$$ X = k_1 A_1 + k_2 A_2 + \\dots + k_m A_m $$

### 3. Sự phụ thuộc tuyến tính (PTTT) và Độc lập tuyến tính (ĐLTT)
Xét phương trình vectơ:
$$ k_1 A_1 + k_2 A_2 + \\dots + k_m A_m = \\theta $$

*   Nếu phương trình chỉ có nghiệm tầm thường $k_1 = k_2 = \\dots = k_m = 0$ $\\rightarrow$ Hệ **ĐLTT**.
*   Nếu phương trình có nghiệm không tầm thường (ít nhất một $k_i \\neq 0$) $\\rightarrow$ Hệ **PTTT**.

**Định lý:**
*   Hệ chứa vectơ $\\theta$ thì PTTT.
*   Trong $\\mathbb{R}^n$, hệ có $m > n$ vectơ thì luôn PTTT.

### 4. Cơ sở và Số chiều
Hệ $B = \\{e_1, e_2, \\dots, e_n\\}$ là cơ sở của không gian $V$ nếu $B$ ĐLTT và mọi vectơ trong $V$ đều biểu diễn được qua $B$.

*   Số chiều của $\\mathbb{R}^n$ là $\\dim(\\mathbb{R}^n) = n$.
*   Hệ $n$ vectơ ĐLTT trong $\\mathbb{R}^n$ lập thành một cơ sở.
`,
  examples: [
    {
      problem: "**(Bài 1.1)** Trong không gian $\\mathbb{R}^4$, cho các vectơ: $A=(-2, 1, 3, 0)$, $B=(1, 2, 0, -1)$, $C=(-1, 2, -1, 4)$. Tính $2A + B$ và $A - B + 2C$.",
      solution: `
**a) Tính $2A + B$:**

Ta có:
$$ 2A = 2(-2, 1, 3, 0) = (-4, 2, 6, 0) $$

Khi đó:
$$ 2A + B = (-4+1, 2+2, 6+0, 0-1) $$
$$ = (-3, 4, 6, -1) $$

**b) Tính $A - B + 2C$:**

Tính từng thành phần:
$$ 2C = 2(-1, 2, -1, 4) = (-2, 4, -2, 8) $$
$$ A - B = (-2-1, 1-2, 3-0, 0-(-1)) = (-3, -1, 3, 1) $$

Cộng lại:
$$ A - B + 2C = (-3-2, -1+4, 3-2, 1+8) $$
$$ = (-5, 3, 1, 9) $$
`
    },
    {
      problem: "**(Bài 1.6a)** Trong $\\mathbb{R}^2$, cho hệ vectơ $\\{A_1=(1,-3), A_2=(5,2), A_3=(-1,0)\\}$. Chỉ ra một cơ sở và tìm biểu diễn tuyến tính của $A_3$ qua cơ sở đó.",
      solution: `
**Bước 1: Chọn cơ sở**
Xét hệ 2 vectơ đầu tiên $\\{A_1, A_2\\}$. Tính định thức của ma trận tạo bởi 2 vectơ này:
$$ D = \\begin{vmatrix} 1 & 5 \\\\ -3 & 2 \\end{vmatrix} = 1(2) - 5(-3) = 2 + 15 = 17 \\neq 0 $$
Vậy $\\{A_1, A_2\\}$ Độc lập tuyến tính. Vì không gian $\\mathbb{R}^2$ có số chiều là 2, nên hệ gồm 2 vectơ ĐLTT này lập thành một **cơ sở**.

**Bước 2: Biểu diễn $A_3$ qua $A_1, A_2$**
Giả sử $A_3 = k_1 A_1 + k_2 A_2$. Ta có hệ phương trình:
$$ \\begin{cases} 1k_1 + 5k_2 = -1 \\\\ -3k_1 + 2k_2 = 0 \\end{cases} $$

Từ phương trình thứ 2: $2k_2 = 3k_1 \\Rightarrow k_2 = 1.5k_1$.
Thay vào phương trình 1:
$k_1 + 5(1.5k_1) = -1$
$8.5k_1 = -1 \\Rightarrow k_1 = -\\frac{1}{8.5} = -\\frac{2}{17}$.
Suy ra $k_2 = 1.5 \\times (-\\frac{2}{17}) = -\\frac{3}{17}$.

**Kết luận:**
$$ A_3 = -\\frac{2}{17}A_1 - \\frac{3}{17}A_2 $$
`
    }
  ],
  quiz: [
    {
      question: "**(Bài 1.14)** Vectơ nào dưới đây thuộc không gian $\\mathbb{R}^5$?",
      options: ["(1, 2, 3, 4)", "(6, -2, 0, 2, 1)", "(3, 1, 2, -1)", "(-2, 4, 7)"],
      correctAnswerIndex: 1,
      explanation: "Một vectơ thuộc không gian $\\mathbb{R}^n$ phải có đúng $n$ thành phần.\n\n*   Phương án B: $(6, -2, 0, 2, 1)$ có đúng **5 thành phần**.\n*   Các phương án còn lại chỉ có 3 hoặc 4 thành phần."
    },
    {
      question: "**(Bài 1.16)** Trong $\\mathbb{R}^4$, cho $A = (3, 1, -2, 1), B = (0, 5, -3, 2)$. Tích vô hướng $\\langle A, 2B \\rangle$ bằng:",
      options: ["26", "29", "13", "1"],
      correctAnswerIndex: 0,
      explanation: "Ta có $\\langle A, 2B \\rangle = 2 \\langle A, B \\rangle$.\n$\\langle A, B \\rangle = 3(0) + 1(5) + (-2)(-3) + 1(2) = 0 + 5 + 6 + 2 = 13$.\nVậy $\\langle A, 2B \\rangle = 2 \\times 13 = 26$."
    },
    {
      question: "**(Bài 1.24)** Trong $\\mathbb{R}^3$, hệ $S = \\{A_1=(2,1,1), A_2=(3,0,2), A_3=(1,\\lambda,1)\\}$. Hệ độc lập tuyến tính khi và chỉ khi:",
      options: ["$\\lambda \\neq -1$", "$\\lambda \\neq 1$", "$\\lambda \\neq 1/7$", "$\\lambda \\neq -1/7$"],
      correctAnswerIndex: 0,
      explanation: "Lập định thức của ma trận các vectơ cột:\n$D = \\det \\begin{pmatrix} 2 & 3 & 1 \\\\ 1 & 0 & \\lambda \\\\ 1 & 2 & 1 \\end{pmatrix} = 2(0 - 2\\lambda) - 3(1 - \\lambda) + 1(2 - 0)$\n$= -4\\lambda - 3 + 3\\lambda + 2 = -\\lambda - 1$.\nĐể hệ ĐLTT thì $D \\neq 0 \\Leftrightarrow -\\lambda - 1 \\neq 0 \\Leftrightarrow \\lambda \\neq -1$."
    },
    {
      question: "**(Bài 1.22)** Hệ vectơ nào dưới đây PTTT trong $\\mathbb{R}^3$?",
      options: ["A=(1,1,2), B=(3,0,1)", "A=(2,3,1)", "A=(1,2,3), B=(2,4,6)", "A=(1,0,0), B=(0,1,0), C=(0,0,1)"],
      correctAnswerIndex: 2,
      explanation: "Xét phương án C: Ta thấy $B = 2A$ (tỷ lệ với nhau). Một hệ có 2 vectơ tỷ lệ thì luôn Phụ thuộc tuyến tính."
    },
    {
      question: "**(Bài 1.30)** Cho hệ $S = \\{A_1=(1,0,2), A_2=(3,1,4), A_3=(2,1,2), A_4=(-1,-1,0)\\}$. Số cơ sở của hệ vectơ S là...",
      options: ["1", "2", "3", "4"],
      correctAnswerIndex: 1,
      explanation: "Đây là bài toán tìm hạng của hệ vectơ. Ta nhận thấy:\n$A_3 = A_2 - A_1$ và $A_4 = A_1 - A_3$.\nChỉ có $A_1, A_2$ là độc lập tuyến tính. Vậy hạng (số chiều không gian sinh bởi S) là 2. Bất kỳ 2 vectơ ĐLTT nào trong hệ cũng lập thành 1 cơ sở."
    }
  ],
  essay: [
    {
      question: "**(Bài 1.5)** Xét xem hệ vectơ sau có là cơ sở của không gian tương ứng hay không?\na) $\\{A_1=(2,-5); A_2=(-1,4)\\}$, không gian $\\mathbb{R}^2$.\nb) $\\{A_1=(0,-1,1); A_2=(2,1,-1); A_3=(4,-1,1)\\}$, không gian $\\mathbb{R}^3$.",
      answer: "**a) Hệ trong $\\mathbb{R}^2$:**\nSố chiều của $\\mathbb{R}^2$ là 2. Hệ có 2 vectơ.\nTính định thức: $D = \\begin{vmatrix} 2 & -1 \\\\ -5 & 4 \\end{vmatrix} = 8 - 5 = 3 \\neq 0$.\nVậy hệ ĐLTT và là một cơ sở của $\\mathbb{R}^2$.\n\n**b) Hệ trong $\\mathbb{R}^3$:**\nSố chiều của $\\mathbb{R}^3$ là 3. Hệ có 3 vectơ.\nTính định thức:\n$D = \\det \\begin{pmatrix} 0 & 2 & 4 \\\\ -1 & 1 & -1 \\\\ 1 & -1 & 1 \\end{pmatrix}$.\nNhận thấy dòng 3 = -1 * dòng 2 (tỷ lệ). Hoặc tính trực tiếp:\n$D = 0 - 2(-1+1) + 4(1-1) = 0$.\nVì $D=0$, hệ phụ thuộc tuyến tính. Vậy hệ **không phải** là cơ sở của $\\mathbb{R}^3$."
    },
    {
      question: "**(Bài 1.10*)** Trong không gian $\\mathbb{R}^n$, cho hệ vectơ $S = \\{A, B, C\\}$. Chứng minh rằng nếu $S$ độc lập tuyến tính thì hệ $\\{A+B, B+C, C+A\\}$ cũng độc lập tuyến tính.",
      answer: "Xét phương trình vectơ:\n$$ k_1(A+B) + k_2(B+C) + k_3(C+A) = \\theta $$\n\nKhai triển và nhóm theo $A, B, C$:\n$$ (k_1 + k_3)A + (k_1 + k_2)B + (k_2 + k_3)C = \\theta $$\n\nVì hệ $\\{A, B, C\\}$ ĐLTT, nên các hệ số phải bằng 0:\n$$ \\begin{cases} k_1 + k_3 = 0 \\\\ k_1 + k_2 = 0 \\\\ k_2 + k_3 = 0 \\end{cases} $$\n\nCộng 3 phương trình: $2(k_1 + k_2 + k_3) = 0 \\Rightarrow k_1 + k_2 + k_3 = 0$.\nKết hợp với từng phương trình con:\n- $(k_1+k_2) + k_3 = 0 \\Rightarrow 0 + k_3 = 0 \\Rightarrow k_3 = 0$.\n- Tương tự suy ra $k_1 = 0, k_2 = 0$.\n\nVậy hệ phương trình chỉ có nghiệm tầm thường. Do đó hệ $\\{A+B, B+C, C+A\\}$ ĐLTT."
    }
  ],
  keyTakeaways: "Trong $\\mathbb{R}^n$, hệ có nhiều hơn $n$ vectơ luôn PTTT. Định thức $\\neq 0$ là công cụ nhanh nhất để kiểm tra tính ĐLTT của $n$ vectơ trong không gian $n$ chiều."
};
