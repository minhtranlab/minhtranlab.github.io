/* ===== Bài 2: Hán Việt + chiết tự + a memory hook for each word (same shape as Bài 1 ETY) ===== */
var CH2 = window.CH2 || (window.CH2 = {});
(function () {
  CH2.ETY = {
    '一辈子': { parts: [['一', 'nhất', 'Một.'], ['辈', 'bối', '非 ở trên, 车 (xe) ở dưới. Nghĩa gốc: hàng xe xếp nối nhau, từ đó thành “lớp người, thế hệ”. Như “tiền bối”, “hậu bối”.'], ['子', 'tử', 'Hậu tố danh từ, đọc nhẹ.']],
      hook: 'Một (一) lớp đời người (辈) = trọn một đời. Tiếng Việt cũng nói “cả một đời”.' },
    '农村': { parts: [['农', 'nông', 'Bản phồn thể 農 có 辰: vốn là lưỡi liềm làm bằng vỏ trai, nông cụ thời xưa. Việc đồng áng. Như “nông dân”, “nông nghiệp”.'], ['村', 'thôn', '木 (cây) + 寸 (chỉ âm). Xóm làng có cây cối bao quanh. Như “thôn xóm”.']],
      hook: 'Nông (农) + thôn (村) = “nông thôn”, y như tiếng Việt. Chỗ có ruộng đồng và xóm làng.' },
    '屋': { parts: [['屋', 'ốc', '尸 ở trên là mái che (cũng thấy trong 层) + 至 (đến). Đi đến rồi dừng lại dưới mái: căn nhà. Như “phòng ốc”.']],
      hook: 'Đi đến (至) dưới mái che (尸) là vào tới nhà. Nhớ “phòng ốc”.' },
    '断': { parts: [['断', 'đoạn', 'Bên trái là bó sợi tơ, bên phải là 斤 (cái rìu). Rìu chặt đứt bó sợi. Như “đoạn tuyệt”, “gián đoạn”.']],
      hook: 'Cái rìu (斤) chặt đứt bó sợi: 断. Sợi dây giữa mẹ và con bú cũng “đứt” được: 断奶 = cai sữa.' },
    '以来': { parts: [['以', 'dĩ', 'Chữ nối chỉ mốc, như trong 以前, 以后.'], ['来', 'lai', 'Đến. Từ mốc đó “đến” bây giờ.']],
      hook: '以前 nhìn về trước, 以后 nhìn về sau, còn 以来 đi từ mốc <b>đến tận bây giờ</b>. “Dĩ lai” = từ đó đến nay.' },
    '姥姥': { parts: [['姥', 'lão', '女 (nữ) + 老 (già): người đàn bà lớn tuổi. Hán Việt cũng đọc “mỗ”.']],
      hook: 'Người đàn bà (女) già (老) bên ngoại: bà ngoại. Còn 奶奶 là bà nội.' },
    '舅舅': { parts: [['舅', 'cữu', '臼 (cái cối) ở trên chỉ âm jiù, 男 (nam) ở dưới cho biết đây là người đàn ông.']],
      hook: 'Chữ có 男 (nam) ở dưới: người đàn ông bên họ mẹ = cậu. Như “cữu phụ”, “cậu mợ”.' },
    '姑姑': { parts: [['姑', 'cô', '女 (nữ) + 古 (cổ, chỉ âm gū). Người phụ nữ trong họ bên ba.']],
      hook: 'Bộ 女 + âm “gū” nghe gần “cô”: cô bên nội (chị em gái của ba).' },
    '坚决': { parts: [['坚', 'kiên', 'Bản phồn thể 堅 có 土 (đất) ở dưới: đất nện chắc. Cứng, vững. Như “kiên cố”, 坚持 (kiên trì).'], ['决', 'quyết', 'Bản gốc 決 có 氵 (nước) + 夬: nước phá bờ tràn ra, không gì cản nổi; sau thành “quyết định” (决定).']],
      hook: 'Vững như đất nện (坚), dứt khoát như nước vỡ bờ (决): đã nói không là không.' }
  };
})();
