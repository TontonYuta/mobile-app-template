import { LessonContent, SyllabusItem } from "../types";
import { CHAP_1 } from "../data/chapter1";
import { CHAP_2 } from "../data/chapter2";
import { CHAP_3 } from "../data/chapter3";
import { CHAP_4 } from "../data/chapter4";
import { CHAP_5 } from "../data/chapter5";
import { CHAP_6 } from "../data/chapter6";
import { CHAP_7 } from "../data/chapter7";
import { CHAP_8 } from "../data/chapter8";

export const generateLessonContent = async (syllabusItem: SyllabusItem): Promise<LessonContent> => {
  // Giả lập độ trễ mạng nhẹ để tạo cảm giác "đang tải" nhưng thực chất là lấy dữ liệu tĩnh
  await new Promise(resolve => setTimeout(resolve, 300));

  switch (syllabusItem.chapter) {
    case 1: return CHAP_1;
    case 2: return CHAP_2;
    case 3: return CHAP_3;
    case 4: return CHAP_4;
    case 5: return CHAP_5;
    case 6: return CHAP_6;
    case 7: return CHAP_7;
    case 8: return CHAP_8;
    default: return CHAP_1;
  }
};