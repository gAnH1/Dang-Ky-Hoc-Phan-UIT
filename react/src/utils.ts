import uniqBy from 'lodash/uniqBy';
import { ClassModel } from 'models';

export function uniqMaLop(classes: ClassModel[]) {
  return uniqBy(classes, 'MaLop'); // Có nhiều lớp học nhiều buổi 1 tuần, xuất hiện nhiều lần, nhưng chỉ nên cộng 1 lần
}

export function calcTongSoTC(classes: ClassModel[]) {
  const unique = uniqMaLop(classes);
  return unique.reduce((acc, cur) => acc + cur.SoTc, 0);
}

export function extractListMaLop(classes: ClassModel[]) {
  const unique = uniqMaLop(classes);
  return unique.map((it) => it.MaLop);
}

export function isMonChung(lop: ClassModel) {
  return /^(SS0|PE00)/g.test(lop.MaMH) && lop.MaMH !== 'SS004'; // Kỹ năng nghề nghiệp (SS004) không phải là môn học chung
}