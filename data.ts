import { BanSchedule, RouteGuide, RoadGroup } from './types';

export const ROAD_DATA: RoadGroup[] = [
  {
    "group": "Cấm triệt để (Màu Đỏ)",
    "roads": [
      {
        "name": "Trần Hữu Dực",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Giao Lê Đức Thọ",
        "destination": "Giao Trịnh Văn Bô (Đường 70)",
        "note": "Toàn tuyến",
        "cachedPath": [
          [21.02663, 105.76684], // Giao Lê Đức Thọ
          [21.02896, 105.76033], // Giao Nguyễn Cơ Thạch
          [21.03387, 105.74768]  // Giao Trịnh Văn Bô / Đường 70
        ]
      },
      {
        "name": "Lê Đức Thọ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hồ Tùng Mậu",
        "destination": "Sân vận động Mỹ Đình",
        "note": "Toàn tuyến",
        "cachedPath": [
          [21.03606, 105.76615], // Hồ Tùng Mậu
          [21.02663, 105.76684], // Giao Trần Hữu Dực
          [21.01757, 105.76985]  // SVĐ Mỹ Đình (Giao Lê Quang Đạo)
        ]
      },
      {
        "name": "Lê Quang Đạo",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Sân vận động Mỹ Đình",
        "destination": "Đại lộ Thăng Long",
        "note": "Toàn tuyến",
        "cachedPath": [
          [21.01757, 105.76985], // SVĐ Mỹ Đình
          [21.01185, 105.77123], // Giao Mễ Trì
          [21.00693, 105.77239]  // Giao Đại Lộ Thăng Long
        ]
      },
      {
        "name": "Phạm Hùng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Ngã tư Mai Dịch",
        "destination": "Trần Duy Hưng (Big C)",
        "note": "Xe tải, khách >16 chỗ",
        "cachedPath": [
          [21.03700, 105.77800], // Mai Dịch
          [21.02850, 105.78150], // Bến xe Mỹ Đình
          [21.01850, 105.78410], // Keangnam
          [21.01423, 105.78469], // Giao Mễ Trì
          [21.00845, 105.78385], // Giao Đỗ Đức Dục
          [21.00816, 105.79383]  // Big C (Trần Duy Hưng)
        ]
      },
      {
        "name": "Đỗ Đức Dục",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phạm Hùng (Bảo tàng HN)",
        "destination": "Miếu Đầm",
        "note": "Toàn tuyến",
        "cachedPath": [
          [21.00845, 105.78385], // Giao Phạm Hùng
          [21.00650, 105.78650], // Cổng Marriott
          [21.00481, 105.78799]  // Giao Miếu Đầm
        ]
      },
      {
        "name": "Miếu Đầm",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đỗ Đức Dục",
        "destination": "Đại lộ Thăng Long",
        "note": "Toàn tuyến",
        "cachedPath": [
            [21.00481, 105.78799], // Giao Đỗ Đức Dục
            [21.00750, 105.78720], // Cầu vượt Mễ Trì
            [21.00947, 105.78652]  // Ra Đại Lộ Thăng Long
        ]
      },
      {
        "name": "Mễ Trì",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phạm Hùng",
        "destination": "Lê Quang Đạo",
        "note": "Toàn tuyến",
        "cachedPath": [
            [21.01423, 105.78469], // Giao Phạm Hùng
            [21.01300, 105.77800], // The Manor
            [21.01185, 105.77123]  // Giao Lê Quang Đạo
        ]
      },
      {
        "name": "Đại lộ Thăng Long",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phạm Hùng",
        "destination": "Lê Quang Đạo",
        "note": "Làn tiếp giáp Trung tâm Hội nghị Quốc gia",
        "cachedPath": [
          [21.00816, 105.79383], // Big C
          [21.0078, 105.7880],
          [21.0075, 105.7830], 
          [21.00693, 105.77239]  // Giao Lê Quang Đạo
        ]
      },
      {
        "name": "Trần Duy Hưng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hầm chui Trung Hòa",
        "destination": "Cầu vượt Nguyễn Chí Thanh",
        "note": "Toàn tuyến",
        "cachedPath": [
            [21.00816, 105.79383], // Big C
            [21.01000, 105.79800],
            [21.01237, 105.80325]  // Giao Láng
        ]
      },
      {
        "name": "Nguyễn Chí Thanh",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Trần Duy Hưng",
        "destination": "Kim Mã / Liễu Giai",
        "note": "Toàn tuyến",
        "cachedPath": [
            [21.01237, 105.80325], // Giao Láng
            [21.02100, 105.80800],
            [21.02690, 105.81308]  // Giao Liễu Giai
        ]
      },
      {
        "name": "Liễu Giai",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Nguyễn Chí Thanh",
        "destination": "Phan Kế Bính",
        "note": "Đoạn Nguyễn Chí Thanh - Phan Kế Bính",
        "cachedPath": [
            [21.02690, 105.81308], // Giao Nguyễn Chí Thanh
            [21.03212, 105.81555], // Giao Đào Tấn
            [21.03608, 105.81745]  // Giao Phan Kế Bính
        ]
      },
      {
        "name": "Đào Tấn",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Liễu Giai",
        "destination": "Bưởi",
        "note": "Toàn tuyến",
        "cachedPath": [
            [21.03212, 105.81555], // Giao Liễu Giai
            [21.03450, 105.80330]  // Giao Bưởi
        ]
      },
      {
        "name": "Kim Mã",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Liễu Giai (Daewoo)",
        "destination": "Sơn Tây / Nguyễn Thái Học",
        "note": "Toàn tuyến",
        "cachedPath": [
            [21.03212, 105.81555], // Giao Liễu Giai
            [21.0315, 105.8200],
            [21.03058, 105.83060]  // Giao Sơn Tây
        ]
      },
      {
        "name": "Khuất Duy Tiến",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Lê Văn Lương",
        "destination": "Phạm Hùng",
        "note": "Đoạn từ Lê Văn Lương đến Phạm Hùng",
        "cachedPath": [[21.0080, 105.7930], [21.0040, 105.7950], [20.9990, 105.7975]]
      },
      {
        "name": "Vạn Phúc",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Liễu Giai",
        "destination": "Hoàng Hoa Thám",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03608, 105.81745], [21.0380, 105.8180]]
      },
      {
        "name": "Nguyễn Thái Học",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Kim Mã",
        "destination": "Cửa Nam",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03058, 105.83060], [21.0290, 105.8400]]
      },
      {
        "name": "Trần Phú",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Kim Mã",
        "destination": "Điện Biên Phủ",
        "note": "Toàn tuyến",
        "cachedPath": [[21.03058, 105.83060], [21.0325, 105.8390]]
      },
      {
        "name": "Hùng Vương",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hoàng Hoa Thám",
        "destination": "Nguyễn Thái Học",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0360, 105.8365], [21.0400, 105.8375]]
      },
      {
        "name": "Chu Văn An",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Điện Biên Phủ",
        "destination": "Nguyễn Thái Học",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0310, 105.8370], [21.0335, 105.8385]]
      },
      {
        "name": "Hoàng Diệu",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phan Đình Phùng",
        "destination": "Nguyễn Thái Học",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0350, 105.8400], [21.0320, 105.8405]]
      },
      {
        "name": "Độc Lập",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Điện Biên Phủ",
        "destination": "Hoàng Văn Thụ",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0365, 105.8350], [21.0350, 105.8355]]
      },
      {
        "name": "Lê Hồng Phong",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Đội Cấn",
        "destination": "Điện Biên Phủ",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0335, 105.8355], [21.0340, 105.8380]]
      },
      {
        "name": "Hoàng Văn Thụ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hoàng Diệu",
        "destination": "Độc Lập",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0375, 105.8350], [21.0380, 105.8400]]
      },
      {
        "name": "Nguyễn Tri Phương",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Phan Đình Phùng",
        "destination": "Điện Biên Phủ",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0340, 105.8410], [21.0280, 105.8415]]
      },
      {
        "name": "Điện Biên Phủ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Cửa Nam",
        "destination": "Lăng Bác",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0290, 105.8400], [21.0330, 105.8390]]
      },
      {
        "name": "Lê Duẩn",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Điện Biên Phủ",
        "destination": "Nguyễn Du",
        "note": "Đoạn Điện Biên Phủ - Nguyễn Du",
        "cachedPath": [[21.0330, 105.8400], [21.0200, 105.8420]]
      },
      {
        "name": "Hàng Lọng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Khu vực Ga Hà Nội",
        "destination": "Khu vực Ga Hà Nội",
        "note": "Đoạn qua Ga Hà Nội",
        "cachedPath": [[21.0245, 105.8415], [21.0235, 105.8418]]
      },
      {
        "name": "Trần Bình Trọng",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Trần Hưng Đạo",
        "destination": "Trần Nhân Tông",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0225, 105.8430], [21.0200, 105.8435]]
      },
      {
        "name": "Trần Hưng Đạo",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Quang Trung",
        "destination": "Quán Sứ",
        "note": "Đoạn Quang Trung - Quán Sứ",
        "cachedPath": [[21.0228, 105.8425], [21.0242, 105.8458]]
      },
      {
        "name": "Quán Sứ",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Hai Bà Trưng",
        "destination": "Trần Hưng Đạo",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0255, 105.8458], [21.0210, 105.8450]]
      },
      {
        "name": "Tràng Thi",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Cửa Nam",
        "destination": "Quang Trung",
        "note": "Toàn tuyến",
        "cachedPath": [[21.0265, 105.8480], [21.0260, 105.8420]]
      },
      {
        "name": "Vành đai 3 trên cao",
        "type": "forbidden",
        "color": "#9f224e",
        "origin": "Cầu Thăng Long",
        "destination": "Nút giao Quốc lộ 5",
        "note": "Cấm ô tô >10 tấn, 6h-21h",
        "cachedPath": [
            [21.0965, 105.7845], // Cầu Thăng Long
            [21.0450, 105.7800], // Mai Dịch
            [21.0080, 105.7930], // Khuất Duy Tiến / Big C
            [20.9700, 105.8150], // Linh Đàm
            [20.9600, 105.8300], // Pháp Vân
            [21.0000, 105.9000]  // Cầu Thanh Trì / QL5
        ]
      }
    ]
  },
  {
    "group": "Hạn chế (Màu Cam)",
    "roads": [
      { 
        "name": "Hoàng Hoa Thám",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Bưởi",
        "destination": "Phan Đình Phùng",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0435, 105.8130], [21.0380, 105.8350]]
      },
      {
        "name": "Thanh Niên",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Yên Phụ",
        "destination": "Hùng Vương",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0480, 105.8350], [21.0420, 105.8420]]
      },
      {
        "name": "Thụy Khuê",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Bưởi",
        "destination": "Mai Xuân Thưởng",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0430, 105.8150], [21.0380, 105.8320]]
      },
      {
        "name": "Nghi Tàm",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Âu Cơ",
        "destination": "Yên Phụ",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0550, 105.8350], [21.0600, 105.8300]]
      },
      {
        "name": "Âu Cơ",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Cầu Nhật Tân",
        "destination": "Nghi Tàm",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0650, 105.8300], [21.0800, 105.8150]]
      },
      {
        "name": "An Dương Vương",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Cầu Nhật Tân",
        "destination": "Cầu Thăng Long",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0800, 105.8150], [21.0900, 105.8000]]
      },
      {
        "name": "Yên Phụ",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Nghi Tàm",
        "destination": "Trần Nhật Duật",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0450, 105.8450], [21.0400, 105.8500]]
      },
      {
        "name": "Trần Nhật Duật",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Yên Phụ",
        "destination": "Trần Quang Khải",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0360, 105.8550], [21.0300, 105.8600]]
      },
      {
        "name": "Hai Bà Trưng",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Lê Thánh Tông",
        "destination": "Lê Duẩn",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0250, 105.8500], [21.0240, 105.8400]]
      },
      {
        "name": "Láng",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Cầu Giấy",
        "destination": "Ngã Tư Sở",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0320, 105.8020], [21.0150, 105.8050], [21.0020, 105.8150]]
      },
      {
        "name": "Láng Hạ",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Láng",
        "destination": "Giảng Võ",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0180, 105.8060], [21.0160, 105.8250]]
      },
      {
        "name": "Lê Văn Lương",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Khuất Duy Tiến",
        "destination": "Láng",
        "note": "Hạn chế xe tải/khách",
        "cachedPath": [[21.0070, 105.8000], [21.0030, 105.8180]]
      },
      {
        "name": "Mễ Trì",
        "type": "restricted",
        "color": "#ea580c",
        "origin": "Lê Quang Đạo",
        "destination": "Phạm Hùng",
        "note": "Hạn chế xe tải/khách (Đoạn này đã cấm, có thể là Mễ Trì đoạn trên)",
        "cachedPath": [[21.01185, 105.77123], [21.01423, 105.78469]]
      }
    ]
  }
];

export const SCHEDULES: BanSchedule[] = [
  {
    date: "14/01",
    slots: [{ start: "05:30", end: "11:30" }]
  },
  {
    date: "19/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
  {
    date: "20/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
  {
    date: "21/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
  {
    date: "22/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
  {
    date: "23/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
  {
    date: "24/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
  {
    date: "25/01",
    slots: [
      { start: "06:00", end: "08:30" },
      { start: "10:30", end: "12:00" },
      { start: "13:00", end: "14:00" },
      { start: "16:00", end: "19:00" }
    ]
  },
];

export const DETOURS: RouteGuide[] = [
  {
    from: "Phía Đông",
    to: "Phía Tây",
    path: "Cao tốc Hà Nội - Hải Phòng -> QL5 -> Cầu Thanh Trì/Phù Đổng -> Nút giao Ninh Hiệp -> QL3 mới."
  },
  {
    from: "Phía Nam",
    to: "Đông/Tây/Bắc",
    path: "Pháp Vân - Cầu Giẽ -> Nút giao Đỗ Mười -> Vành đai 3 trên cao -> Cầu Thanh Trì -> Cao tốc Hà Nội - Hải Phòng (đi Đông) HOẶC Cầu Phù Đổng -> Ninh Hiệp -> QL3 mới (đi Tây); hoặc đi thẳng cao tốc Hà Nội - Bắc Giang để đi các tỉnh phía Bắc và ngược lại."
  },
  {
    from: "Phía Nam",
    to: "Tây Bắc",
    path: "Đường Hồ Chí Minh -> QL21A và ngược lại. Trường hợp từ các tỉnh phía Nam đi các tỉnh phía Tây có thể theo cao tốc Pháp Vân - Cầu Giẽ đến Đỗ Mười - Ngọc Hồi hoặc từ Quốc lộ 1A rẽ Phan Trọng Tuệ - Cầu Bươu - Văn Khê - Lê Trọng Tấn - Hoàng Tùng - đường gom Đại lộ Thăng Long - Tây Mỗ - Miêu Nha - Xuân Phương - Cầu Diễn - Hồ Tùng Mậu - Phạm Văn Đồng - cầu Thăng Long - Võ Văn Kiệt - Quốc lộ 2."
  },
  {
    from: "Phú Thọ",
    to: "Trung tâm Hà Nội",
    path: "Cầu Diễn -> Hồ Tùng Mậu HOẶC QL21 -> QL6 -> Quang Trung -> Trần Phú -> Nguyễn Trãi. (Hạn chế vào Đại lộ Thăng Long)."
  }
];