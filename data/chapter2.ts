import { LessonContent } from "../types";

export const CHAP_2: LessonContent = {
  title: "Bài 2: Ma trận và Định thức",
  objectives: [
    "Thực hiện thành thạo các phép toán ma trận: cộng, nhân, chuyển vị.",
    "Tính định thức, tìm ma trận nghịch đảo, hạng của ma trận.",
    "Giải phương trình ma trận và ứng dụng trong mô hình kinh tế (Input-Output)."
  ],
  theory: `
### 1. Các phép toán ma trận
*   **Cộng/Trừ:** $A \\pm B$ (chỉ thực hiện khi cùng cấp).
*   **Nhân vô hướng:** $kA$ (nhân k vào mọi phần tử).
*   **Nhân ma trận:** $A_{m \\times n} \\times B_{n \\times p} = C_{m \\times p}$.
    (Lấy dòng của A nhân với cột của B).
*   **Chuyển vị ($A^T$):** Đổi dòng thành cột. $(AB)^T = B^T A^T$.

### 2. Định thức (Determinant)
*   Ký hiệu: $\\det(A)$ hoặc $|A|$. Chỉ tính cho ma trận vuông.
*   **Tính chất:**
    *   $\\det(A^T) = \\det(A)$.
    *   $\\det(AB) = \\det(A)\\det(B)$.
    *   $\\det(kA) = k^n \\det(A)$ (với A cấp $n$).
*   **Cách tính:** Quy tắc Sarrus (cấp 3), Khai triển Laplace, hoặc biến đổi về dạng tam giác.

### 3. Ma trận nghịch đảo & Hạng
*   **Nghịch đảo:** $A$ khả nghịch $\\Leftrightarrow \\det(A) \\neq 0$.
    Công thức: $A^{-1} = \\frac{1}{\\det(A)} P_{A}$ ($P_A$ là ma trận phụ hợp).
*   **Hạng ($r(A)$):** Cấp cao nhất của định thức con khác 0.
`,
  examples: [
    {
      problem: "**(Bài 2.2)** Cho các ma trận: $$ A = \\begin{pmatrix} 2 & -1 & 3 \\\\ 1 & 0 & -2 \\end{pmatrix}; \\quad B = \\begin{pmatrix} -2 & -1 \\\\ 3 & 1 \\\\ 2 & -3 \\end{pmatrix}; \\quad C = \\begin{pmatrix} 1 & -1 & 1 \\\\ 2 & 3 & 0 \\\\ -1 & 2 & 4 \\end{pmatrix} $$ Tính $AC$ và $(2A + B^T)C$.",
      solution: `
**a) Tính AC:**
Ma trận $A$ cấp $2 \\times 3$, $C$ cấp $3 \\times 3 \\Rightarrow AC$ cấp $2 \\times 3$.
$$ AC = \\begin{pmatrix} 2 & -1 & 3 \\\\ 1 & 0 & -2 \\end{pmatrix} \\begin{pmatrix} 1 & -1 & 1 \\\\ 2 & 3 & 0 \\\\ -1 & 2 & 4 \\end{pmatrix} $$
*   Dòng 1: $(2(1)+(-1)(2)+3(-1), \\; 2(-1)+(-1)(3)+3(2), \\; 2(1)+(-1)(0)+3(4))$
    $= (-3, 1, 14)$
*   Dòng 2: $(1(1)+0(2)+(-2)(-1), \\; 1(-1)+0(3)+(-2)(2), \\; 1(1)+0(0)+(-2)(4))$
    $= (3, -5, -7)$

Vậy $AC = \\begin{pmatrix} -3 & 1 & 14 \\\\ 3 & -5 & -7 \\end{pmatrix}$.

**b) Tính $(2A + B^T)C$:**
*   $B^T = \\begin{pmatrix} -2 & 3 & 2 \\\\ -1 & 1 & -3 \\end{pmatrix}$.
*   $2A = \\begin{pmatrix} 4 & -2 & 6 \\\\ 2 & 0 & -4 \\end{pmatrix}$.
*   $2A + B^T = \\begin{pmatrix} 2 & 1 & 8 \\\\ 1 & 1 & -7 \\end{pmatrix}$.

Nhân với C:
$$ (2A + B^T)C = \\begin{pmatrix} 2 & 1 & 8 \\\\ 1 & 1 & -7 \\end{pmatrix} \\begin{pmatrix} 1 & -1 & 1 \\\\ 2 & 3 & 0 \\\\ -1 & 2 & 4 \\end{pmatrix} = \\begin{pmatrix} -4 & 17 & 34 \\\\ 10 & -12 & -27 \\end{pmatrix} $$
`
    },
    {
      problem: "**(Bài 2.12*)** Cho $A$ là ma trận vuông cấp $n$ thỏa mãn điều kiện $A^3 + B = BA$, biết rằng $\\det(B) = 0$. Chứng minh rằng $A$ là ma trận không khả nghịch.",
      solution: `
Ta có giả thiết:
$$ A^3 + B = BA $$
$$ \\Leftrightarrow A^3 = BA - B $$
$$ \\Leftrightarrow A^3 = B(A - I) $$

Lấy định thức hai vế:
$$ \\det(A^3) = \\det(B(A - I)) $$
$$ (\\det(A))^3 = \\det(B) \\cdot \\det(A - I) $$

Do giả thiết $\\det(B) = 0$, nên vế phải bằng 0.
$$ \\Rightarrow (\\det(A))^3 = 0 $$
$$ \\Rightarrow \\det(A) = 0 $$

**Kết luận:** Vì $\\det(A) = 0$ nên ma trận $A$ không khả nghịch (suy biến).
`
    }
  ],
  quiz: [
    {
      question: "**(Bài 2.22)** Ma trận $\\begin{pmatrix} 1 & 1 & 2 \\\\ 0 & m & 0 \\\\ m-1 & 0 & m+1 \\end{pmatrix}$ là ma trận tam giác khi và chỉ khi:",
      options: ["m = 0 hoặc m = -1", "m ≠ 1", "m ≠ 0 và m ≠ -1", "m = 1"],
      correctAnswerIndex: 3,
      explanation: "Để là ma trận tam giác trên, các phần tử dưới đường chéo chính phải bằng 0.\nCụ thể: $a_{21}=0$ (đã thỏa), $a_{31}=m-1=0$, $a_{32}=0$ (đã thỏa).\nVậy cần $m-1=0 \\Rightarrow m=1$."
    },
    {
      question: "**(Bài 2.18)** Ma trận nào dưới đây là ma trận đơn vị cấp 2?",
      options: ["$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$", "(1)", "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$"],
      correctAnswerIndex: 0,
      explanation: "Ma trận đơn vị cấp 2 (kí hiệu $I_2$) là ma trận vuông cấp 2 có các phần tử trên đường chéo chính bằng 1 và các phần tử khác bằng 0."
    },
    {
      question: "**(Bài 2.28)** Cho $A$ vuông cấp $n \\ge 2$. Nhân dòng 1 của $A$ với -3 được $B$. Đổi chỗ cột 1 và cột 2 của $A$ được $C$. Khẳng định đúng:",
      options: ["|B| = 3|A|", "|C| = |A|", "|B| = -3|A|", "|A| = -|A^T|"],
      correctAnswerIndex: 2,
      explanation: "Tính chất định thức:\n- Nhân một dòng với số $k$ thì định thức tăng gấp $k$ lần $\\Rightarrow |B| = -3|A|$.\n- Đổi chỗ 2 cột thì định thức đổi dấu $\\Rightarrow |C| = -|A|$."
    },
    {
      question: "**(Bài 2.34)** Cho $A$ = $\\begin{pmatrix} -5 & 7 \\\\ 1 & -2 \\end{pmatrix}$. Phần tử nằm trên dòng 2, cột 1 của ma trận nghịch đảo $A^{-1}$ bằng:",
      options: ["1", "-1", "-1/3", "1/3"],
      correctAnswerIndex: 2,
      explanation: "$\\det(A) = (-5)(-2) - (7)(1) = 10 - 7 = 3$.\nMa trận phụ hợp $P_A = \\begin{pmatrix} -2 & -7 \\\\ -1 & -5 \\end{pmatrix}$ (đã chuyển vị).\nVậy $A^{-1} = \\frac{1}{3} \\begin{pmatrix} -2 & -7 \\\\ -1 & -5 \\end{pmatrix}$.\nPhần tử dòng 2 cột 1 là $-1/3$."
    },
    {
      question: "**(Bài 2.32)** Cho ma trận $A = \\begin{pmatrix} \\lambda & 0 & 0 \\\\ 1 & -2 & 0 \\\\ 3 & 2 & 1 \\end{pmatrix}$. Khẳng định đúng:",
      options: ["A suy biến với mọi $\\lambda \\neq 0$", "A không suy biến với mọi $\\lambda \\neq -2$", "A suy biến với mọi $\\lambda = -2$", "A không suy biến với mọi $\\lambda \\neq 0$"],
      correctAnswerIndex: 3,
      explanation: "Đây là ma trận tam giác dưới.\n$\\det(A) = \\lambda \\cdot (-2) \\cdot 1 = -2\\lambda$.\nĐể A không suy biến (khả nghịch) thì $\\det(A) \\neq 0 \\Leftrightarrow -2\\lambda \\neq 0 \\Leftrightarrow \\lambda \\neq 0$."
    }
  ],
  essay: [
    {
      question: "**(Bài 2.8a)** Cho ma trận $A = \\begin{pmatrix} 2 & 1 & -1 \\\\ 1 & 3 & 0 \\\\ -2 & 1 & 2 \\end{pmatrix}$ và $C = \\begin{pmatrix} -1 & 1 \\\\ 2 & -1 \\\\ 0 & -3 \\end{pmatrix}$.\nTìm ma trận $X$ thỏa mãn phương trình: $AX = C$.",
      answer: "**Bước 1: Tính $\\det(A)$**\n$\\det(A) = 2(6-0) - 1(2-0) + (-1)(1+6) = 12 - 2 - 7 = 3 \\neq 0$. Tồn tại $A^{-1}$.\n\n**Bước 2: Tìm $A^{-1}$**\nCác phần bù đại số:\n$A_{11}=6, A_{12}=-2, A_{13}=7$\n$A_{21}=-3, A_{22}=2, A_{23}=-4$\n$A_{31}=3, A_{32}=-1, A_{33}=5$\n\nMa trận nghịch đảo (lưu ý chuyển vị): \n$$ A^{-1} = \\frac{1}{3} \\begin{pmatrix} 6 & -3 & 3 \\\\ -2 & 2 & -1 \\\\ 7 & -4 & 5 \\end{pmatrix} $$\n\n**Bước 3: Tính $X = A^{-1}C$**\n$$ X = \\frac{1}{3} \\begin{pmatrix} 6 & -3 & 3 \\\\ -2 & 2 & -1 \\\\ 7 & -4 & 5 \\end{pmatrix} \\begin{pmatrix} -1 & 1 \\\\ 2 & -1 \\\\ 0 & -3 \\end{pmatrix} $$\n$$ = \\frac{1}{3} \\begin{pmatrix} -12 & 0 \\\\ 6 & -1 \\\\ -15 & -4 \\end{pmatrix} = \\begin{pmatrix} -4 & 0 \\\\ 2 & -1/3 \\\\ -5 & -4/3 \\end{pmatrix} $$"
    },
    {
      question: "**(Bài 2.16b)** Tính định thức của ma trận cấp n:\n$$ D_n = \\begin{vmatrix} a_0 & -1 & 0 & \\dots & 0 \\\\ a_1 & x & -1 & \\dots & 0 \\\\ a_2 & 0 & x & \\dots & 0 \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_n & 0 & 0 & \\dots & x \\end{vmatrix} $$",
      answer: "Khai triển theo cột 1:\n$$ D_n = a_0 M_{11} - a_1 M_{21} + a_2 M_{31} - \\dots + (-1)^{n+1} a_n M_{(n+1)1} $$\n\nQuan sát các định thức con:\n*   $M_{11}$ là ma trận tam giác dưới (các phần tử trên đường chéo là $x$), cấp $n$: $M_{11} = x^n$.\n*   $M_{21}$: Bỏ dòng 2 cột 1. Có dạng tam giác, đường chéo là $(-1, x, x, \\dots)$. Định thức con này (có dấu) sẽ tạo ra số hạng chứa $x^{n-1}$.\n\n**Kết quả tổng quát (Quy nạp):**\n$$ D_n = a_0 x^n + a_1 x^{n-1} + a_2 x^{n-2} + \\dots + a_n $$"
    }
  ],
  keyTakeaways: "Định thức $\\neq 0$ là điều kiện tiên quyết để ma trận khả nghịch. Phép nhân ma trận không giao hoán, nên khi giải phương trình ma trận cần chú ý nhân bên trái hay bên phải ($X=A^{-1}B$ khác $X=BA^{-1}$)."
};
