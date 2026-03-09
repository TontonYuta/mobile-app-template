import { LessonContent } from "../types";

export const CHAP_4: LessonContent = {
  title: "Bài 4: Hàm số một biến số và các bài toán thực tế",
  objectives: [
    "Nhận dạng và mô hình hóa các hàm số cơ bản trong kinh tế (Cầu, Cung, Doanh thu, Chi phí, Lợi nhuận).",
    "Hiểu và lập được hàm phân khúc (lũy tiến, lũy thoái) từ bảng đơn giá/tax.",
    "Áp dụng mô hình hàm số để giải các bài toán tiền điện, nước, thuế, cước taxi, doanh thu."
  ],
  theory: `
### 1. Các hàm số trong kinh tế

- **Hàm Cầu (Demand):** $Q_D = D(p)$. Thường là hàm **nghịch biến theo giá** (giá tăng, lượng cầu giảm).
- **Hàm Cung (Supply):** $Q_S = S(p)$. Thường là hàm **đồng biến theo giá** (giá tăng, lượng cung tăng).
- **Doanh thu (Total Revenue):** $TR = p \\cdot Q$.
- **Chi phí (Total Cost):** $TC = VC + FC$ (Chi phí biến đổi + Chi phí cố định).
- **Lợi nhuận (Profit):** $\\pi = TR - TC$.

Trong kinh tế, ta thường quan tâm **dạng hàm** (tuyến tính, bậc hai, phân khúc, …) để phân tích hành vi của doanh nghiệp/thị trường.

### 2. Hàm phân khúc (Hàm lũy tiến / lũy thoái)

Các loại bảng giá/thuế mà **đơn giá thay đổi theo từng “bậc” sử dụng** được mô tả bởi **hàm phân khúc** (piecewise function).

Ví dụ dạng tổng quát (lũy tiến):

$$
f(x) =
\\begin{cases}
a_1 x & 0 \\le x \\le x_1 \\\\
a_1 x_1 + a_2 (x - x_1) & x_1 < x \\le x_2 \\\\
a_1 x_1 + a_2 (x_2 - x_1) + a_3 (x - x_2) & x_2 < x \\le x_3 \\\\
\\ldots &
\\end{cases}
$$

- **Lũy tiến:** đơn giá cho phần dùng nhiều hơn thì **cao hơn**.
- **Lũy thoái:** đơn giá cho phần dùng nhiều hơn thì **thấp hơn** (ví dụ cước taxi giảm dần theo km).
`,
  examples: [
    {
      problem:
        "**(Bài 4.3 - Giá điện)** Giá điện sinh hoạt được tính lũy tiến:\n- 50 kWh đầu: 1.5 nghìn/kWh.\n- Từ 51 đến 100 kWh: 1.7 nghìn/kWh.\n- Trên 100 kWh: 2.0 nghìn/kWh.\nLập hàm chi phí $C(x)$ theo số kWh tiêu thụ $x$.",
      solution: `
Ta xây dựng hàm theo từng khoảng của $x$ (số kWh):

**Khoảng 1: $0 \\le x \\le 50$**

Tiền điện chỉ dùng mức 1:
$$ C(x) = 1.5x. $$

**Khoảng 2: $50 < x \\le 100$**

Tiền điện gồm:
- 50 kWh đầu giá 1.5 nghìn,
- Phần từ 51 đến $x$ giá 1.7 nghìn.

$$
C(x) = 1.5 \\cdot 50 + 1.7(x - 50)
= 75 + 1.7x - 85
= 1.7x - 10.
$$

**Khoảng 3: $x > 100$**

Tiền điện gồm:
- 50 kWh đầu giá 1.5 nghìn,
- 50 kWh tiếp theo giá 1.7 nghìn,
- Phần từ 101 đến $x$ giá 2.0 nghìn.

$$
C(x) = 1.5 \\cdot 50 + 1.7 \\cdot 50 + 2.0(x - 100)
= 75 + 85 + 2x - 200
= 2x - 40.
$$

**Kết luận:**

$$
C(x) =
\\begin{cases}
1.5x & 0 \\le x \\le 50 \\\\
1.7x - 10 & 50 < x \\le 100 \\\\
2x - 40 & x > 100
\\end{cases}
$$
(Đơn vị: nghìn đồng).
`
    },
    {
      problem:
        "**(Bài 4.15 - Doanh thu)** Một doanh nghiệp có hàm cầu $p = 500 - 4Q$ (đơn giá tính theo nghìn đồng, $Q$ tính theo đơn vị sản phẩm). Tính doanh thu khi bán hết 60 đơn vị sản phẩm.",
      solution: `
**Bước 1: Lập hàm Doanh thu (TR)**

Doanh thu:
$$
TR(Q) = p \\cdot Q = (500 - 4Q)Q = 500Q - 4Q^2.
$$

**Bước 2: Tính giá trị tại $Q = 60$**

Thay $Q = 60$ vào:
$$
TR(60) = 500 \\cdot 60 - 4 \\cdot 60^2
= 30000 - 4 \\cdot 3600
= 30000 - 14400
= 15600.
$$

Nếu đơn giá tính theo nghìn đồng thì doanh thu là:
$$
15\\,600 \\text{ nghìn đồng} = 15{,}6 \\text{ triệu đồng}.
$$
`
    }
  ],
   quiz: [
    {
      question: "Trong hàm chi phí $TC(Q) = 3Q + 1200$, hệ số 1200 biểu thị:",
      options: ["Chi phí cố định", "Chi phí biến đổi", "Chi phí biên", "Lợi nhuận"],
      correctAnswerIndex: 0,
      explanation: "Hệ số tự do trong hàm chi phí tuyến tính chính là chi phí cố định (FC)."
    },
    {
      question: "Điểm hòa vốn đạt được khi:",
      options: ["$TR = TC$", "$\\pi > 0$", "$TR < TC$", "Chi phí bằng 0"],
      correctAnswerIndex: 0,
      explanation: "Điểm hòa vốn xảy ra khi doanh thu vừa đủ bù đắp chi phí ($\\pi = 0$)."
    },
    {
      question: "Trong các loại hàm sau, hàm nào thường mô tả doanh thu?",
      options: ["$TR = p \\, Q$", "$TC = VC + FC$", "$p = 100 - Q$", "$MC = TC'$"],
      correctAnswerIndex: 0,
      explanation: "Định nghĩa căn bản: doanh thu bằng giá bán nhân với sản lượng tiêu thụ."
    },
    {
      question: "Hàm cầu thông thường có dạng:",
      options: [
        "Nghịch biến theo giá $p$",
        "Đồng biến theo giá",
        "Không phụ thuộc giá",
        "Là hàm mũ theo $p$"
      ],
      correctAnswerIndex: 0,
      explanation: "Theo quy luật cầu: giá tăng → lượng cầu giảm."
    },
    {
      question: "Thuế lũy tiến có nghĩa là:",
      options: [
        "Thuế suất tăng theo bậc thu nhập",
        "Thuế suất giảm theo bậc thu nhập",
        "Thuế suất không đổi",
        "Không phải nộp thuế ở mức thu nhập cao"
      ],
      correctAnswerIndex: 0,
      explanation: "Lũy tiến tức là càng cao càng chịu thuế suất cao hơn."
    },
    {
      question: "Nếu $p = 120 - 2Q$, doanh thu $TR(Q)$ là hàm:",
      options: ["Bậc 2", "Bậc 1", "Hàm phân khúc", "Hàm logarit"],
      correctAnswerIndex: 0,
      explanation: "$TR = pQ = (120 - 2Q)Q = 120Q - 2Q^2$ là đa thức bậc hai."
    },
    {
      question: "Mục đích của việc lập hàm phân khúc là để:",
      options: [
        "Phản ánh đơn giá thay đổi theo từng bậc tiêu thụ",
        "Làm bài toán khó hơn",
        "Tiết kiệm giấy khi in bảng giá",
        "Tránh dùng đạo hàm"
      ],
      correctAnswerIndex: 0,
      explanation: "Khi giá phụ thuộc từng khoảng, chỉ hàm phân khúc mới mô tả đúng."
    },
    {
      question: "Cung và cầu cân bằng khi:",
      options: ["$Q_D = Q_S$", "$TR = TC$", "Lợi nhuận cực đại", "MC = MR"],
      correctAnswerIndex: 0,
      explanation: "Điểm cân bằng thị trường xảy ra khi lượng cung bằng lượng cầu."
    },
    {
      question: "Đơn vị của chi phí biên $MC = \\frac{dTC}{dQ}$ là:",
      options: ["Đơn vị tiền / sản phẩm", "Sản phẩm / tiền", "Không có đơn vị", "Sản phẩm"],
      correctAnswerIndex: 0,
      explanation: "Chi phí biên cho biết tăng thêm một sản phẩm gây tăng bao nhiêu chi phí."
    },
    {
      question: "Nếu doanh thu tăng chậm lại khi sản lượng lớn, điều đó có thể là do:",
      options: [
        "Hàm cầu dốc xuống → giá giảm khi bán nhiều",
        "Chi phí cố định tăng",
        "Không có lý do kinh tế",
        "Thuế suất giảm"
      ],
      correctAnswerIndex: 0,
      explanation:
        "Theo quy luật thị trường, muốn bán nhiều hơn phải giảm giá → doanh thu không tăng tuyến tính."
    },
    {
      question: "Yếu tố nào sau đây KHÔNG ảnh hưởng tới hàm chi phí:",
      options: ["Giá bán sản phẩm", "Nguyên vật liệu", "Tiền lương công nhân", "Khấu hao máy móc"],
      correctAnswerIndex: 0,
      explanation: "Giá bán ảnh hưởng doanh thu, không ảnh hưởng đến chi phí sản xuất."
    }
  ],

  essay: [
    {
      question:
        "**(Bài 4.5 - Thuế lũy tiến)** Thuế thu nhập cá nhân năm 2020 (giả định):\n- Từ 0 đến 9.950 USD: Thuế suất 10%.\n- Trên 9.950 đến 40.525 USD: Thuế suất 12%.\nTính số thuế phải nộp cho một người có thu nhập 30.000 USD/năm.",
      answer: `
Thu nhập 30.000 USD nằm trong **bậc 2**.

Chia thu nhập thành 2 phần:

1. **Phần 1 (bậc 1):** 9.950 USD đầu tiên  
   Thuế phải nộp:
   $$
   T_1 = 9{,}950 \\times 10\\% = 995 \\text{ USD}.
   $$

2. **Phần 2 (bậc 2):** Phần vượt quá 9.950 USD  
   Số tiền chịu thuế bậc 2:
   $$
   30{,}000 - 9{,}950 = 20{,}050 \\text{ USD}.
   $$
   Thuế tương ứng:
   $$
   T_2 = 20{,}050 \\times 12\\% = 2{,}406 \\text{ USD}.
   $$

**Tổng thuế phải nộp:**
$$
T = T_1 + T_2 = 995 + 2{,}406 = 3{,}401 \\text{ USD}.
$$
`
    },
    {
      question:
        "**(Bài 4.9 - Cước taxi lũy thoái)** Cước taxi hãng A được tính như sau:\n- 0–10 km đầu: 7 nghìn/km.\n- Trên 10 đến 30 km: 6 nghìn/km.\nTính số tiền khách phải trả nếu đi quãng đường 25 km.",
      answer: `
Chia quãng đường 25 km thành 2 chặng:

1. **Chặng 1:** 10 km đầu tiên  
   Giá: 7 nghìn/km  
   $$
   \\text{Tiền chặng 1} = 10 \\times 7 = 70 \\text{ nghìn}.
   $$

2. **Chặng 2:** Từ km thứ 11 đến km thứ 25  
   Số km: $25 - 10 = 15$ km  
   Giá: 6 nghìn/km  
   $$
   \\text{Tiền chặng 2} = 15 \\times 6 = 90 \\text{ nghìn}.
   $$

**Tổng cước taxi:**
$$
70 + 90 = 160 \\text{ nghìn đồng}.
$$

Đây là ví dụ của **hàm lũy thoái**: đi càng xa, đơn giá/km càng rẻ.
`
    }
  ],
  keyTakeaways:
    "Hàm số một biến được dùng rộng rãi để mô hình hóa các bài toán kinh tế như giá điện, thuế, cước vận tải, doanh thu – chi phí. Đặc biệt, các bảng giá lũy tiến/lũy thoái tương ứng với hàm phân khúc, giúp tính toán chính xác chi phí và phân tích hành vi tiêu dùng/sản xuất."
};