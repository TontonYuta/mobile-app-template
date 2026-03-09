import { SyllabusItem } from './types';

export const SYLLABUS: SyllabusItem[] = [
  {
    id: 'chap-1',
    chapter: 1,
    title: 'Không gian vectơ R^n',
    description: 'Khái niệm vectơ, các phép toán, sự phụ thuộc tuyến tính, cơ sở và số chiều trong không gian R^n.'
  },
  {
    id: 'chap-2',
    chapter: 2,
    title: 'Ma trận',
    description: 'Định nghĩa, các phép toán trên ma trận, định thức, ma trận nghịch đảo, hạng của ma trận.'
  },
  {
    id: 'chap-3',
    chapter: 3,
    title: 'Hệ phương trình tuyến tính',
    description: 'Phương pháp Gauss, quy tắc Cramer, định lý Kronecker-Capelli, ứng dụng mô hình Input-Output Leontief.'
  },
  {
    id: 'chap-4',
    chapter: 4,
    title: 'Hàm số một biến số & Thực tế',
    description: 'Hàm số một biến số và các bài toán thực tế: lũy tiến, lũy thoái, giá trung bình...'
  },
  {
    id: 'chap-5',
    chapter: 5,
    title: 'Giới hạn và liên tục',
    description: 'Giới hạn và liên tục của hàm số một biến số, ý nghĩa trong phân tích kinh tế.'
  },
  {
    id: 'chap-6',
    chapter: 6,
    title: 'Đạo hàm và vi phân',
    description: 'Ứng dụng trong kinh tế: doanh thu biên, chi phí biên, hệ số co giãn, tối ưu hóa lợi nhuận.'
  },
  {
    id: 'chap-7',
    chapter: 7,
    title: 'Tích phân và ứng dụng',
    description: 'Nguyên hàm, tích phân xác định và ứng dụng kinh tế (thặng dư tiêu dùng/sản xuất).'
  },
  {
    id: 'chap-8',
    chapter: 8,
    title: 'Hàm số nhiều biến số',
    description: 'Đạo hàm riêng, cực trị tự do, cực trị có ràng buộc (nhân tử Lagrange).'
  }
];

export const INITIAL_PROMPT_TEMPLATE = `
Bạn là giảng viên AI môn Toán Cao Cấp 1+2 của Học viện Tài chính (AOF).
Hãy soạn nội dung học tập theo đúng phong cách sư phạm, dễ hiểu, trực quan, phù hợp với sinh viên khối kinh tế.

QUAN TRỌNG VỀ ĐỊNH DẠNG LATEX:
- Tuyệt đối KHÔNG escape dấu $. Viết $x^2$ chứ KHÔNG viết \\$x^2.
- Công thức trong dòng (inline): dùng cặp dấu $. Ví dụ: $f(x) = x^2$.
- Công thức riêng dòng (block): dùng cặp dấu $$. Ví dụ: $$ \\int_{a}^{b} f(x) dx $$.

Yêu cầu cho MỖI BÀI HỌC:
1) Tên bài học
2) Mục tiêu bài học (2–3 ý)
3) Lý thuyết trình bày dễ hiểu, có trực giác, ví dụ trong phần giải thích.
4) Ví dụ minh hoạ (ít nhất 2 ví dụ) có lời giải chi tiết.
5) Bài tập tự luyện:
   - 5 câu trắc nghiệm.
   - 2 bài tự luận.
   - Mức độ từ dễ → trung bình.
   - Ghi rõ đáp án và giải thích ngắn gọn.
6) Ghi nhớ nhanh cuối bài (≤ 80 từ).

Quy tắc chung:
- Dùng tiếng Việt trong toàn bộ nội dung.
- Trình bày khoa học, rõ mục rõ phần, có bullet khi cần.
- Tập trung vào các ứng dụng trong kinh tế (doanh thu, chi phí, lợi nhuận, cung cầu...) nếu nội dung cho phép.
`;